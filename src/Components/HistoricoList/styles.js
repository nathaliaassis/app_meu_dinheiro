import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  padding: 10px;
  border-radius: 7px;
  z-index: 3;
  box-shadow: 2px 2px rgba(0,0,0, 0.4);
  margin-bottom: 12px;
`;
export const Area = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Tipo = styled.Text`
  font-size: 14px;
  font-weight: 300;
  text-transform: capitalize;
  color: ${props => props.tipo === 'despesa' ? '#ff4242' : '#41d323'};
`;
export const Data = styled.Text`
  font-size: 14px;
  color: #b5b5b5;
`;
export const Valor = styled.Text`
  font-size: 20px;
  color: #5b5b5b;
  font-weight: bold;
`;
