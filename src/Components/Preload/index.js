import React, { useEffect } from 'react';
import firebase from '../../Services/firebaseConnection';
import { View, Text } from 'react-native';

export default function Preload({ navigation }) {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Dashboard');
      } else {
        navigation.navigate('AppRoutes');
      }
    });
  }, []);

  return (
    <View><Text>preload</Text></View>
  );
}
