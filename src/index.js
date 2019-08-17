import React from 'react';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Warning: Failed prop'
]);

import Routes from './routes';


export default function App() {
  return (
    <Routes/>
  );
};

