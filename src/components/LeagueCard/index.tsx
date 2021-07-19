import React from 'react';
import { View } from 'react-native';
import { ChevronRight } from 'react-native-feather';
import { useTheme } from 'styled-components';

import { Container, WrapperLogo, Logo, WrapperContent, Title, Country } from './styles';

interface LeagueCardProps {
  league: string;
  country: string;
  logo: string;
  onPress(): void;
}

const LeagueCard: React.FC<LeagueCardProps> = ({ country, logo, league, onPress }) => {
  const { colors } = useTheme();
  return (
    <Container onPress={onPress}>
      <WrapperLogo>
        <Logo resizeMode="contain" source={{ uri: logo }} />
      </WrapperLogo>
      <WrapperContent>
        <Title>{league}</Title>
        <Country>{country}</Country>
      </WrapperContent>
      <ChevronRight color={colors.white} width={24} height={24} />
    </Container>
  );
};

export { LeagueCard };
