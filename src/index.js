import React from 'react';
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Routes } from './Routes';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent={true}
      />
      <Routes />
    </>
  );
}

