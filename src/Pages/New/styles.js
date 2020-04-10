import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 40px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: white;
  text-align: center;
  margin-bottom: 24px;
`;

export const PickerItem = styled.Picker`
  flex-direction: row;
  background-color: white;
  height: 45px;
  width: 90%;
  border-radius: 5px;
  font-size: 18px;
`;
