import * as actionTypes from '../constants/actionTypes';

const initialState = {
  tracks: [],
  activeTrack: null
};

function setTracks(state, action) {
  const { tracks } = action;
  return { ...state, tracks: tracks };
}

function setActiveTrack(state, action) {
  const { track } = action;
  return { ...state, activeTrack: track };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_TRACKS:
      return setTracks(state, action);
    case actionTypes.PLAY_TRACK:
      return setActiveTrack(state, action);
  }
  return state;
}
