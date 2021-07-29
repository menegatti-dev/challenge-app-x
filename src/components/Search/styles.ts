import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.black};
  flex-direction: row;
  width: 100%;
  padding: ${Platform.OS === 'android' ? 8 : 16}px 16px;
  align-items: center;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.white};
`;
