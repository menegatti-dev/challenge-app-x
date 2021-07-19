import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { League } from '@/types/league';
import { LeagueCard } from '@/components/LeagueCard';
import { Search } from '@/components/Search';
import { EmptyLeague } from '@/components/EmptyLeague';
import { routeNames } from '@/routes/routeNames';
import leaguesJson from '@/mocks/leagues.json';
import seasonsJson from '@/mocks/seasons.json';

import { Container, Title, SeasonsList, SeasonsCard, SeasonsCardText, LeagueList, ListSeparator } from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const [leagues, setLeagues] = useState<League[]>([]);
  const [seasons, setSeasons] = useState<number[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<number>(new Date().getFullYear());
  const [searchText, setSearchText] = useState('');

  const leaguesFiltered = useMemo(
    () => [
      ...leagues.filter(
        item => item.league.name.includes(searchText) && item.seasons?.find(value => value.year === selectedSeasons),
      ),
    ],
    [leagues, searchText, selectedSeasons],
  );

  const renderItem = useCallback(
    ({ item }: { item: League }) => (
      <LeagueCard
        league={item.league.name}
        logo={item.league.logo}
        country={item.country.name}
        onPress={() => navigate(routeNames.CLASSIFICATION, { season: selectedSeasons, league: item.league.id })}
      />
    ),
    [navigate, selectedSeasons],
  );

  const seasonRenderItem = useCallback(
    ({ item }: { item: number }) => (
      <SeasonsCard active={item === selectedSeasons} onPress={() => setSelectedSeasons(item)}>
        <SeasonsCardText>{item}</SeasonsCardText>
      </SeasonsCard>
    ),
    [selectedSeasons],
  );

  const leaguesHeaderComponent = useCallback(
    () => (
      <>
        <Title>Selecione a temporada</Title>
        <SeasonsList
          data={seasons.sort((a, b) => a + b)}
          horizontal
          ItemSeparatorComponent={ListSeparator}
          keyExtractor={item => `${item}`}
          renderItem={seasonRenderItem}
        />
        <Title>Selecione a liga</Title>
      </>
    ),
    [seasonRenderItem, seasons],
  );

  const loadData = () => {
    setLeagues([...leaguesJson.response]);
    setSeasons([...seasonsJson.response.sort((a: number, b: number) => b - a)]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Search value={searchText} onChangeText={value => setSearchText(value)} placeholder="Procure sua liga..." />

      <LeagueList
        data={leaguesFiltered}
        ListHeaderComponent={leaguesHeaderComponent}
        ListEmptyComponent={EmptyLeague}
        keyExtractor={item => `${item.league.id}`}
        ItemSeparatorComponent={ListSeparator}
        renderItem={renderItem}
      />
    </Container>
  );
};

export { Home };
