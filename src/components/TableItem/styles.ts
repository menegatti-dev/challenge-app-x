import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background: #0000;
  border-bottom-color: #2b2b3d;
  border-bottom-width: 1px;
  border-style: solid;
  padding-bottom: 5px;
  margin: 10px;
`;

export const ButtonContainer = styled(RectButton)`
  flex-direction: row;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  padding: 10px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-family: 'Poppins-Medium';
`;

export const Logo = styled.Image`
  width: 14px;
  height: 14px;
  margin-right: 3px;
`;

interface ItemProps {
  flex: number;
}

export const Item = styled.View<ItemProps>`
  flex: ${({ flex }) => flex};
  padding-right: 0px;
  flex-direction: row;
  align-items: center;
`;
