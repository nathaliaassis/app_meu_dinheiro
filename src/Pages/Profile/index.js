import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import firebase from '../../Services/firebaseConnection';
import { Container, Title, Name, BtnLogOut, BtnText } from './styles';

export default function Profile({ navigation }) {
  const [nome, setNome] = useState('');

  useEffect(() => {
    async function loadName() {
      const nomeStorage = await AsyncStorage.getItem('@nome');

      if (nomeStorage) {
        setNome(nome);
      } else {
        let uid = firebase.auth().currentUser.uid;
        await firebase.database().ref('users').child(uid).once('value')
          .then((snapshot) => {
            setNome(snapshot.val().nome);
          });
        await AsyncStorage.setItem('@nome', nome);
      }
    }
    loadName();
  }, [])

  async function logOut() {
    await firebase.auth().signOut();
    await AsyncStorage.removeItem('@nome');
  }
  return (
    <Container>
      <Title>Bem Vindo(a)</Title>
      <Name>{nome}</Name>
      <BtnLogOut onPress={logOut}>
        <BtnText>Sair</BtnText>
      </BtnLogOut>
    </Container>
  )
}

