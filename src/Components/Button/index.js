import React from 'react';
import { Btn, BtnText } from './styles';


export default function Button(props) {

  return (
    <Btn onPress={props.onPress} >
      <BtnText>{props.name}</BtnText>
    </Btn>
  );
}
