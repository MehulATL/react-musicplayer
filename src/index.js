import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './stores/configStore';
import * as actions from './actions';
import Stream from './components/Stream';

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

const store = configStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Stream />,
  document.getElementById('root')
);
