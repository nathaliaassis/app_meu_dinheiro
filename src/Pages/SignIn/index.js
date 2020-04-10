import React, { useState } from 'react';
import { Container, Logo, AreaInput, Input, Btn, BtnText, SignUpLink, SignUpText, Backround } from './styles';
export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Backround>
      <Container>
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
        <SignUpLink>
          <SignUpText>Criar minha conta</SignUpText>
        </SignUpLink>
      </Container>
    </Backround>
  )
}
