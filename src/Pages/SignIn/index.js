import React, { useState } from 'react';
import { Platform, Keyboard } from 'react-native';
import firebase from '../../Services/firebaseConnection';
import { Container, Logo, SignUpLink, SignUpText } from './styles';

import { Background } from '../../Assets/globalStyle';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

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
          else {
            alert('Usuário não encontrado, verifique se seu e-mail está correto.' + '[ ' + error.code + ']')
          }
        });

      Keyboard.dismiss();
    }
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Logo source={require('../../Assets/img/logo.png')} />

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
        <Button onPress={handleSubmit} name='Entrar' />
        <SignUpLink onPress={() => navigation.navigate('SignUp')}>
          <SignUpText>Criar minha conta</SignUpText>
        </SignUpLink>
      </Container>
    </Background>
  )
}
