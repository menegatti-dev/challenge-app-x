import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
`;

export const Column = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  font-family: 'Poppins-regular';
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: 'Poppins-regular';
`;

export const TeamWrapper = styled.View`
  margin: 24px 0 8px;
  align-items: center;
`;

export const TeamLogoBackground = styled.View`
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
`;

export const TeamLogo = styled.Image`
  width: 121px;
  height: 121px;
`;

export const TeamTitle = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;

export const Line = styled.View`
  background: ${({ theme }) => theme.colors.black};
  height: 1px;
  flex: 1;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  padding: 0px 8px;
`;

export const VenueImage = styled.Image`
  width: 100%;
  height: ${(Dimensions.get('window').width / 16) * 9}px;
  border-radius: 20px;
  margin-bottom: 16px;
`;
