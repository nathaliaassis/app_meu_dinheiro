import React from 'react';
import { Container, Area, Tipo, Data, Valor } from './styles';

export default function HistoricoList({ data }) {
  return (

    <Container>
      <Area>
        <Tipo tipo={data.tipo}>{data.tipo}</Tipo>
        <Data>{data.date}</Data>
      </Area>
      <Valor>R$ {data.valor}</Valor>
    </Container>
  );
}
