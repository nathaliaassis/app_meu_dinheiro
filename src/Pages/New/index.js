import React, { useState } from 'react';
import { Keyboard, Picker, Platform } from 'react-native';

import { Container, Title, PickerItem } from './styles';
import { Background } from '../../Assets/globalStyle';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

export default function New() {

  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('receita');

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <Title>Criar Novo</Title>
        <Input
          placeholder='Valor desejado'
          keyboardType='numeric'
          value={valor}
          onChangeText={(valor) => {
            setValor(valor);
          }}
          returnKeyType='next'
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        <PickerItem
          selectedValue={tipo}
          onValueChange={(itemValue, itemIndex) => {
            setTipo(itemValue)
          }}
        >
          <Picker.Item label='Receita' value='receita' />
          <Picker.Item label='Despesa' value='despesa' />
        </PickerItem>

        <Button onPress={() => { }} name='Registrar' />
      </Container>
    </Background>
  );
}
