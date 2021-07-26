import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import { Team } from '@/types/team';

import teamJson from '@/mocks/team.json';

import Header from '@/components/Header';
import {
  Container,
  TeamWrapper,
  TeamLogoBackground,
  TeamLogo,
  Row,
  Column,
  Title,
  Value,
  TeamTitle,
  SectionTitle,
  Line,
  VenueImage,
} from './styles';

interface RouteParamsProps {
  teamId: string;
}

const TeamDetails: React.FC = () => {
  const route = useRoute();

  const { teamId } = route.params as RouteParamsProps;

  const [data, setData] = useState<Team>({} as Team);

  const loadData = () => {
    setData({ ...teamJson.response[0] });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header />
      <TeamWrapper>
        <TeamLogoBackground>
          <TeamLogo source={{ uri: data?.team?.logo }} />
        </TeamLogoBackground>
        <TeamTitle>{`${data?.team?.name}`}</TeamTitle>
      </TeamWrapper>
      <Row>
        <Column>
          <Title>País</Title>
          <Value>{data?.team?.country}</Value>
        </Column>
        <Column>
          <Title>Fundação</Title>
          <Value>{data?.team?.founded}</Value>
        </Column>
      </Row>
      <Row>
        <Line />
        <SectionTitle>Estádio</SectionTitle>
        <Line />
      </Row>
      <VenueImage resizeMode="cover" source={{ uri: data?.venue?.image }} />
      <Row>
        <Column>
          <Title>Nome</Title>
          <Value>{data?.venue?.name}</Value>
        </Column>
        <Column>
          <Title>Capacidade</Title>
          <Value>{data?.venue?.capacity}</Value>
        </Column>
      </Row>
      <Row>
        <Column>
          <Title>Endereço</Title>
          <Value>{data?.venue?.address}</Value>
        </Column>
        <Column>
          <Title>Cidade</Title>
          <Value>{data?.venue?.city}</Value>
        </Column>
      </Row>
    </Container>
  );
};

export { TeamDetails };
