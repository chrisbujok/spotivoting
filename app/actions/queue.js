export const ADD = 'queue/ADD_TRACK';
export const REMOVE = 'queue/REMOVE_TRACK';
export const UPVOTE = 'queue/UPVOTE_TRACK';
export const DOWNVOTE = 'queue/DOWNVOTE_TRACK';
export const PLAY = 'queue/PLAY';
export const NEXT = 'queue/NEXT';
export const STOP = 'queue/STOP';

export const add = (track) => ({
  type: ADD,
  track,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

export const upvote = (id) => ({
  type: UPVOTE,
  id,
});

export const downvote = (id) => ({
  type: DOWNVOTE,
  id,
});

export const play = () => ({
  type: PLAY,
});

export const next = () => ({
  type: NEXT,
});

export const stop = () => ({
  type: STOP,
});
