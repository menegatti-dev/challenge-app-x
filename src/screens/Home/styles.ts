import { League } from '@/types/league';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
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

export const SeasonsList = styled(FlatList as new () => FlatList<number>)`
  width: 100%;
  padding: 0 0 16px;
`;

interface SeasonsCardProps {
  active: boolean;
}

export const SeasonsCard = styled(RectButton)<SeasonsCardProps>`
  background: ${({ theme: { colors }, active }) => (active ? colors.blue : colors.black)};
  border-radius: 5px;
  height: 36px;
  align-items: center;
  justify-content: center;
  padding: 0px 16px;
`;

export const SeasonsCardText = styled.Text`
  font-family: 'Poppins-Regular';
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
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
