import React, { useEffect } from 'react';
import firebase from '../../Services/firebaseConnection';
import { ActivityIndicator } from 'react-native';
import { Background } from '../../Assets/globalStyle';
import { Container } from './styles';

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
    <Background>
      <Container>
        <ActivityIndicator size={50} color='#fff' />
      </Container>
    </Background>
  );
}
