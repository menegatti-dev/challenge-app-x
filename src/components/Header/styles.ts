import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 0 16px;
  width: 100%;
`;

export const ButtonWrapper = styled(RectButton)`
  padding: 3px;
`;

export const CountryWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  margin-left: 8px;
`;
