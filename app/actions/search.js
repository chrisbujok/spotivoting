import axios from 'axios';

export const ADD_AUTOCOMPLETE = 'search/ADD_AUTOCOMPLETE';
export const CLEAR_AUTOCOMPLETE = 'search/CLEAR_AUTOCOMPLETE';
export const START_SEARCH = 'search/START_SEARCH';
export const FINISH_SEARCH = 'search/FINISH_SEARCH';
export const CANCEL = 'search/CANCEL';
export const REMOVE_ITEM = 'search/REMOVE_ITEM';

export function startSearch() {
  return {
    type: START_SEARCH,
  };
}

export function finishSearch() {
  return {
    type: FINISH_SEARCH,
  };
}

export function clear() {
  return {
    type: CLEAR_AUTOCOMPLETE,
  };
}

export function add(items) {
  return {
    type: ADD_AUTOCOMPLETE,
    items: items.map(track => ({
      id: track.id,
      name: track.name,
      artists: track.artists,
      album: track.album,
      preview_url: track.preview_url,
      score: 0,
      isPlaying: false,
    })),
  };
}

export function cancel() {
  return {
    type: CANCEL,
  };
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id,
  };
}

export const searchSpotify = query => (dispatch, getState) => {
  dispatch(clear());

  if (!query) {
    return;
  }

  dispatch(startSearch());

  axios.get(`https://api.spotify.com/v1/search?type=track&q=${query.replace(' ', '%20')}*&market=PL&limit=20`)
    .then(({ data }) => {
      dispatch(finishSearch());

      const currentTracks = getState().queue.get('tracks');

      dispatch(add(
        data.tracks.items.filter(item => !currentTracks.find(track => track.id === item.id))
      ));
    });
};
