import React from 'react';
import { View } from 'react-native';
import { ChevronLeft } from 'react-native-feather';
import { useTheme } from 'styled-components';
import { SvgFromUri } from 'react-native-svg';

import { useNavigation } from '@react-navigation/native';
import { Container, ButtonWrapper, CountryWrapper, Title } from './styles';

interface HeaderProps {
  countryLogo?: string;
  countryName?: string;
}

const Header: React.FC<HeaderProps> = ({ countryLogo, countryName }) => {
  const { goBack } = useNavigation();
  const { colors } = useTheme();
  return (
    <Container>
      <ButtonWrapper onPress={goBack}>
        <ChevronLeft color={colors.white} width={24} height={24} />
      </ButtonWrapper>
      <CountryWrapper>
        {countryLogo && <SvgFromUri uri={countryLogo} width="20" height="16" />}
        <Title>{countryName}</Title>
      </CountryWrapper>
      <View />
    </Container>
  );
};

export default Header;
