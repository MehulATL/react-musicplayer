import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './stores/configStore';
import * as actions from './actions';
import Stream from './components/Stream/';

const tracks = [
  {
    title: 'Can\'t Tell Me Nothing'
  },
  {
    title: 'Ultralight Beam'
  }
];

const store = configStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
  document.getElementById('root')
);
