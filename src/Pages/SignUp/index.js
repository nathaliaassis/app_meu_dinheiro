import React, { useState } from 'react';
import { Platform } from 'react-native';
import firebase from '../../Services/firebaseConnection';
import { Container, Title, SignInLink, SignInText } from './styles';


import { Background } from '../../Assets/globalStyle';
import Input from '../../Components/Input';
import Button from '../../Components/Button';


export default function SignUp({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  firebase.auth().signOut();


  async function handleSubmit() {
    if (nome !== '' && email !== '' && password !== '') {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async () => {
          let uid = firebase.auth().currentUser.uid;
          await firebase.database().ref('users').child(uid).set({
            saldo: 0,
            nome: nome,
          })
        }).catch((error) => {
          if (error.code == 'auth/weak-password') {
            alert('Sua senha deve ter pelo menos 6 caracteres.');
          }
          if (error.code == 'auth/invalid-email') {
            alert('E-mail inválido.');
          }
        });
      navigation.navigate('SignIn');
      Keyboard.dismiss();
    }
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Title>Quase tudo pronto =)</Title>
        <Input
          placeholder='Nome'
          value={nome}
          onChangeText={(nome) => setNome(nome)}
        />
        <Input
          placeholder='E-mail'
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Input
          placeholder='Senha'
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Button onPress={handleSubmit} name='Cadastrar' />

        <SignInLink onPress={() => navigation.navigate('SignIn')}>
          <SignInText>Já possuo uma conta</SignInText>
        </SignInLink>
      </Container>
    </Background>
  )
}
