import React from 'react';
import { AreaInput, StyledInput } from './styles';


export default function Input(props) {

  return (
    <AreaInput>
      <StyledInput
        autoCorrect={false}
        autoCapitalize='none'
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </AreaInput>
  );
}
