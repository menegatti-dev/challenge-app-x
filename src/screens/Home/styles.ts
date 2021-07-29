import { League } from '@/types/league';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  margin-top: 16px;
  font-family: 'Poppins-Medium';
`;

export const LeagueList = styled(FlatList as new () => FlatList<League>)`
  flex: 1;
  padding: 10px 0;
  width: 100%;
  margin-top: 10px;
`;

export const ListSeparator = styled.View`
  height: 16px;
  width: 16px;
`;
