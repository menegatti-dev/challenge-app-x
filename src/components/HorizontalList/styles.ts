import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const FilterList = styled(FlatList as new () => FlatList<{ id: string; name: string }>)`
  width: 100%;
  padding: 0 0 16px;
`;

interface FilterCardProps {
  active: boolean;
}

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  margin-top: 16px;
  font-family: 'Poppins-Medium';
`;

export const ListSeparator = styled.View`
  height: 8px;
  width: 8px;
`;

export const FilterCard = styled(RectButton)<FilterCardProps>`
  background: ${({ theme: { colors }, active }) => (active ? colors.blue : colors.black)};
  border-radius: 5px;
  height: 36px;
  align-items: center;
  justify-content: center;
  padding: 0px 16px;
`;

export const FilterCardText = styled.Text`
  font-family: 'Poppins-Regular';
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;
