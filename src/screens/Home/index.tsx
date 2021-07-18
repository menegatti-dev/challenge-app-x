import React from 'react';

import { ArrowLeft } from 'react-native-feather';
import { Container, Title } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>App X</Title>
      <ArrowLeft color="#f00" width={20} height={20} />
    </Container>
  );
};

export { Home };
