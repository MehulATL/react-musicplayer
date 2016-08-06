import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';
import * as actionTypes from '../constants/actionTypes';

function setUser(user) {
  return {
    type: actionTypes.SET_USER,
    user
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
        });
    });
  }
};
