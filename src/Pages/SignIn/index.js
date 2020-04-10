import React, { useState } from 'react';
import { Platform, Keyboard, AsyncStorage } from 'react-native';
import firebase from '../../Services/firebaseConnection';

import { Background } from '../../Assets/globalStyle';
import { Container, Logo, AreaInput, Input, Btn, BtnText, SignUpLink, SignUpText } from './styles';

export default function SignIn({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    if (email !== '' && password !== '') {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
          if (error.code == 'auth/weak-password') {
            alert('Sua senha deve ter pelo menos 6 caracteres.');
          }
          if (error.code == 'auth/invalid-email') {
            alert('E-mail inválido.');
          }
        });
      setEmail('');
      setPassword('');
      Keyboard.dismiss();
    }
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <Logo source={require('../../Assets/img/logo.png')} />
        <AreaInput>
          <Input
            placeholder='E-mail'
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder='Senha'
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </AreaInput>
        <Btn onPress={handleSubmit}>
          <BtnText>Entrar</BtnText>
        </Btn>
        <SignUpLink onPress={() => navigation.navigate('SignUp')}>
          <SignUpText>Criar minha conta</SignUpText>
        </SignUpLink>
      </Container>
    </Background>
  )
}
