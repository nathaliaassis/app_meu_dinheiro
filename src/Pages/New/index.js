import React, { useState } from 'react';
import firebase from '../../Services/firebaseConnection';
import { Keyboard, Platform, Alert, TouchableWithoutFeedback } from 'react-native';

import { Container, Title } from './styles';
import { Background } from '../../Assets/globalStyle';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Picker from '../../Components/Picker';

export default function New({ navigation }) {

  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState(null);

  function handleSubmit() {

    if (isNaN(parseFloat(valor)) || tipo === null) {
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

      user.child('saldo').set(saldo);
    }).catch((error) =>
      alert(error)
    );
    setValor('');
    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
          <Picker onChange={setTipo} />

          <Button onPress={handleSubmit} name='Registrar' />

        </Container>
      </TouchableWithoutFeedback>
    </Background>
  );
}
