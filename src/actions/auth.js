import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';
import * as actionTypes from '../constants/actionTypes';
import { setTracks } from './track';

function setUser(user) {
  return {
    type: actionTypes.SET_USER,
    user
  };
}

function fetchStream(user, session) {
  return function (dispatch) {
    fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setTracks(data.collection));
      });
  };
}

export function auth() {
  return function(dispatch) {
    SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

    SC.connect().then((session) => {
      // TODO: refactor to use axios for browser support.
      fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
        .then((response) => response.json())
        .then((user) => {
          dispatch(setUser(user));
          dispatch(fetchStream(user, session));
        });
    });
  }
};
