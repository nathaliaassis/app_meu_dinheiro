import React from 'react';
import { PickerView } from './styles';
import RNPickerSelect from 'react-native-picker-select';

export default function Picker({ onChange }) {
  return (
    <PickerView>
      <RNPickerSelect
        style={{
          inputIOS: {
            height: 50,
            padding: 5,
            backgroundColor: '#fff',
            fontSize: 16,
          }
        }}
        placeholder={{
          label: 'Selecione o tipo',
          color: '#222',
          value: null,
        }}
        onValueChange={(tipo) => onChange(tipo)}
        items={[
          { label: 'Receita', value: 'receita', color: '#222', },
          { label: 'Despesa', value: 'despesa', color: '#222', }
        ]}
      />
    </PickerView>
  )
}
