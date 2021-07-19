import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

import { Container, Title } from './styles';

interface RouteParamsProps {
  season: string;
  league: string;
}

const Classification: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { season, league } = route.params as RouteParamsProps;

  return (
    <Container>
      <Title>Classification</Title>
    </Container>
  );
};

export { Classification };
