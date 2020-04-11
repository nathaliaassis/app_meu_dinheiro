import React, { useState, useEffect } from 'react';
import firebase from '../../Services/firebaseConnection';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HistoricoList from '../../Components/HistoricoList';

import { Container, AreaSaldo, SaldoTitle, Saldo, Registros, Title, IconRight, List } from './styles';
import { Background } from '../../Assets/globalStyle';



export default function Dashboard({ navigation }) {

  const [saldo, setSaldo] = useState(0);
  const [historico, setHistorico] = useState([]);
  let uid = firebase.auth().currentUser.uid;

  useEffect(() => {

    async function loadingList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo);
      });

      await firebase.database().ref('historico').child(uid)
        .orderByChild('date').equalTo(new Date().toLocaleDateString())
        .limitToLast(5).on('value', (snapshot) => {
          setHistorico([]);

          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              date: childItem.val().date,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor
            };

            setHistorico(oldArray => [...oldArray, list].reverse());
          });

        });
    }
    loadingList();
  }, []);

  return (
    <Background>
      <Container>
        <AreaSaldo>
          <SaldoTitle>Saldo Atual</SaldoTitle>
          <Saldo>R$ {saldo}</Saldo>
        </AreaSaldo>

        <Registros>
          <Title>Registros do dia</Title>
          <IconRight>
            <Icon name="chevron-right" size={30} color="#FFF" />
          </IconRight>
        </Registros>

        <List
          keyExtractor={item => item.key}
          data={historico}
          renderItem={({ item }) => (<HistoricoList data={item} />)}
        />

      </Container>
    </Background>
  )
}

