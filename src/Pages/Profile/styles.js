import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 28px;
  color: #1b2c4c;
  text-align: center;
`;
export const Name = styled(Title)`
  font-weight: bold;
`;
export const BtnLogOut = styled.TouchableHighlight`
  background-color: #ff4242;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 45px;
  border-radius: 5px;
  margin-top: 32px;
`;
export const BtnText = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: white;
`;

