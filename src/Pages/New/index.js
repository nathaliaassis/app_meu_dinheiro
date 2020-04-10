import React from 'react';
import { Container, Title } from './styles';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

export default function New() {

  return (
    <Container>
      <Title>Criar Novo</Title>
      <Input
        placeholder='Teste'
      />
      <Button onPress={() => { }} name='teste' />
    </Container>
  );
}
