import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 80%;
  margin-top: 20%;
  align-self: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;
