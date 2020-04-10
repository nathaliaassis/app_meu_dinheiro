import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import firebase from '../../Services/firebaseConnection';
import { Container } from './styles';

export default function Dashboard({ navigation }) {
  function logOut() {
    firebase.auth().signOut();
    navigation.navigate('SignIn');
  }
  return (
    <Container>
      <Text>alo alo alo alo dash</Text>
      <TouchableOpacity onPress={logOut}>
        <Text>sair</Text>
      </TouchableOpacity>
    </Container>
  )
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
}
