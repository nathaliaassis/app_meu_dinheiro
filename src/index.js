import React from 'react';
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Sign } from './Routes';

console.disableYellowBox = true;

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent={true}
      />
      <Sign />
    </>
  );
}

