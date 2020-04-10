import React from 'react';
import firebase from '../../Services/firebaseConnection';
import { Container, Title } from './styles';
import Button from '../../Components/Button';

export default function Dashboard({ navigation }) {
  function logOut() {
    firebase.auth().signOut();
    navigation.navigate('SignIn');
  }
  return (
    <Container>
      <Title>Dashboard</Title>
      <Button name="Sair" onPress={logOut} />
    </Container>
  )
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
}
