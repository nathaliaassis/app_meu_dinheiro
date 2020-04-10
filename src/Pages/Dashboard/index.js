import React from 'react';
import { View, Text } from 'react-native';
import firebase from '../../Services/firebaseConnection';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Dashboard({ navigation }) {
  function logOut() {
    firebase.auth().signOut();
    navigation.navigate('SignIn');
  }
  return (
    <>
      <View>
        <Text>alo alo alo alo dash</Text>
        <TouchableOpacity onPress={logOut}>
          <Text>sair</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
