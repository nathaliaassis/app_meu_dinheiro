import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Container, Logo, AreaInput, Input, Btn, BtnText, SignUpLink, SignUpText, Backround } from './styles';

export default function SignIn({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Backround>
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
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </AreaInput>
        <Btn>
          <BtnText>Entrar</BtnText>
        </Btn>
        <SignUpLink onPress={() => navigation.navigate('SignUp')}>
          <SignUpText>Criar minha conta</SignUpText>
        </SignUpLink>
      </Container>
    </Backround>
  )
}
