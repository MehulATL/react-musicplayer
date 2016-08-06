import * as actionTypes from '../constants/actionTypes';

export function setTracks(tracks) {
  return {
    type: actionTypes.SET_TRACKS,
    tracks
  };
};
