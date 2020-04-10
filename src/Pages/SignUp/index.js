import React, { useState } from 'react';
import { Platform } from 'react-native';
import firebase from '../../Services/firebaseConnection';
import { Container, Title, AreaInput, Input, Btn, BtnText, SignInLink, SignInText, Backround } from './styles';

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
            nome
          })
        }).catch((error) => {
          if (error.code == 'auth/weak-password') {
            alert('Sua senha deve ter pelo menos 6 caracteres.');
          }
          if (error.code == 'auth/invalid-email') {
            alert('E-mail inválido.');
          }
        });
      setNome('');
      setEmail('');
      setPassword('');
      Keyboard.dismiss();
    }
  }

  return (
    <Backround>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <Title>Quase tudo pronto =)</Title>
        <AreaInput>
          <Input
            placeholder='Nome'
            autoCorrect={false}
            autoCapitalize='none'
            value={nome}
            onChangeText={(nome) => setNome(nome)}
          />
        </AreaInput>
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
        <Btn onPress={handleSubmit} >
          <BtnText>Cadastrar</BtnText>
        </Btn>

        <SignInLink onPress={() => navigation.navigate('SignIn')}>
          <SignInText>Já possuo uma conta</SignInText>
        </SignInLink>
      </Container>
    </Backround>
  )
}
