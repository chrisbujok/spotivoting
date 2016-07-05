import * as actions from '../actions/queue';
import Immutable from 'immutable';

const defaultState = Immutable.Map({
  tracks: Immutable.List(),
  currentTrack: undefined,
});

let playedIndex = 0;

function vote(state, action, voter) {
  const trackIndex = state.get('tracks').findIndex(track => track.id === action.id);

  if (state.get('currentTrack')) {
    if (action.id === state.get('currentTrack').id) {
      console.info('Preventing voting on currently being played track');

      return state;
    }

    if (state.get('tracks').get(trackIndex).score + voter >= state.get('currentTrack').score) {
      console.info('Preventing voting on currently being played track');

      return state;
    }
  }

  return state
    .set(
      'tracks',
      state
        .get('tracks')
        .update(
          state.get('tracks').findIndex(track => track.id === action.id),
          track => ({
            ...track,
            score: track.score + voter,
          })
        )
        .sort((a, b) => a.score < b.score)
    );
}

function removeTrack(state, action) {
  const currentTrack = state.get('currentTrack');

  if (currentTrack && currentTrack.id === action.id) {
    return state;
  }

  return state.set(
    'tracks',
    state.get('tracks').delete(state.get('tracks').findIndex(
      track => track.id === action.id
    ))
  );
}

function hasReachedEndOfQueue(state) {
  return playedIndex === state.get('tracks').size;
}

function resetTrack(state) {
  return state.set('currentTrack', undefined);
}

function getNextTrack(state) {
  return state.set('currentTrack', state.get('tracks').get(playedIndex++));
}

function queue(state = defaultState, action) {
  switch (action.type) {
    case actions.ADD:
      if (state.get('tracks').find(track => track.id === action.track.id)) {
        return state;
      }

      return state.set('tracks', state.get('tracks').push(action.track));
    case actions.REMOVE:
      return removeTrack(state, action);
    case actions.UPVOTE:
      return vote(state, action, 1);
    case actions.DOWNVOTE:
      return vote(state, action, -1);
    case actions.PLAY:
      if (hasReachedEndOfQueue(state)) {
        playedIndex = 0;

        return resetTrack(state);
      }

      return getNextTrack(state);
    case actions.NEXT:
      if (hasReachedEndOfQueue(state)) {
        playedIndex = 0;
      }

      return getNextTrack(state);
    case actions.STOP:
      playedIndex = 0;

      return resetTrack(state);
    default:
      return state;
  }
}

export default queue;
