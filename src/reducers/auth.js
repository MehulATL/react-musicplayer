import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return setUser(state, action);
  }
  return state;
}

function setUser(state, action) {
  const { user } = action;
  return { ...state, user };
}
