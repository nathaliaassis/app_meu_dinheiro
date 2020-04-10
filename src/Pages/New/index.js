import React, { useState } from 'react';
import firebase from '../../Services/firebaseConnection';
import { Keyboard, Picker, Platform, Alert } from 'react-native';

import { Container, Title, PickerItem } from './styles';
import { Background } from '../../Assets/globalStyle';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

export default function New({ navigation }) {

  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('receita');

  function handleSubmit() {

    if (isNaN(parseFloat(valor))) {
      alert('Preencha todos os campos!');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo: ${tipo} | Valor: ${parseFloat(valor)} `,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  async function handleAdd() {
    setValor('');
    navigation.navigate('Dashboard');
    let uid = firebase.auth().currentUser.uid;
    let key = firebase.database().ref('historico').child(uid).push().key;
    await firebase.database().ref('historico').child(uid).child(key).set({
      tipo: tipo,
      valor: parseFloat(valor),
      date: new Date().toLocaleDateString(),
    });

    //Atualiza saldo do user
    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo);

      tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);

      user.set({
        saldo: saldo
      });
    }).catch((error) =>
      alert(error)
    )
  }

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

        <Button onPress={handleSubmit} name='Registrar' />
      </Container>
    </Background>
  );
}
