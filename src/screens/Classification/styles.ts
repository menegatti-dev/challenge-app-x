import { StandingsEntity } from '@/types/leagueDetails';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  margin-top: 16px;
  font-family: 'Poppins-Medium';
`;

export const LeagueWrapper = styled.View`
  margin: 24px 0 8px;
  align-items: center;
`;

export const LeagueLogoBackground = styled.View`
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
`;

export const LeagueLogo = styled(FastImage)`
  width: 121px;
  height: 121px;
`;

export const LeagueTitle = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;

export const FilterList = styled(FlatList as new () => FlatList<{ id: string; name: string }>)`
  width: 100%;
  padding: 0 0 16px;
`;

interface FilterCardProps {
  active: boolean;
}

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

export const LeagueList = styled(FlatList as new () => FlatList<StandingsEntity>)`
  flex: 1;
  padding: 10px 0;
  width: 100%;
  margin-top: 10px;
`;

export const ListSeparator = styled.View`
  height: 8px;
  width: 8px;
`;
