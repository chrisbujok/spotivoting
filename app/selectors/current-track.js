import { createSelector } from 'reselect';

const getTracks = state => state.tracks;

export const getCurrentTrack = createSelector(
  [getTracks],
  tracks => tracks.find(track => track.isPlaying)
);
