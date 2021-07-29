import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled(RectButton).attrs({
  shadowOpacity: 0.3,
  shadowRadius: 2,
  shadowColor: '#000',
  shadowOffset: { height: 2, width: 2 },
  elevation: 2,
})`
  flex-direction: row;
  background: ${({ theme }) => theme.colors.black};
  padding: 10px 16px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const WrapperLogo = styled.View`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 4px 6px;
`;

export const Logo = styled(FastImage)`
  width: 54px;
  height: 54px;
`;

export const WrapperContent = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Country = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
`;
