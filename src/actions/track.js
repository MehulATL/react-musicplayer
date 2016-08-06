import * as actionTypes from '../constants/actionTypes';

export function setTracks(tracks) {
  return {
    type: actionTypes.SET_TRACKS,
    tracks
  };
};

export function playTrack(track) {
  return {
    type: actionTypes.PLAY_TRACK,
    track
  };
};
