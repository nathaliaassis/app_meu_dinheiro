import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Container, Title, AreaInput, Input, Btn, BtnText, SignInLink, SignInText, Backround } from './styles';

export default function SignUp({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            onChangeText={(nome) => setEmail(nome)}
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
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </AreaInput>
        <Btn>
          <BtnText>Cadastrar</BtnText>
        </Btn>

        <SignInLink onPress={() => navigation.navigate('SignIn')}>
          <SignInText>Já possuo uma conta</SignInText>
        </SignInLink>
      </Container>
    </Backround>
  )
}
