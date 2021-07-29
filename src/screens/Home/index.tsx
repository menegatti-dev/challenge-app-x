import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { League } from '@/types/league';
import { LeagueCard } from '@/components/LeagueCard';
import { Search } from '@/components/Search';
import { EmptyLeague } from '@/components/EmptyLeague';
import { routeNames } from '@/routes/routeNames';

import { useReduxDispatch, useReduxSelector } from '@/hooks';
import { getLeaguesRequest } from '@/store/slices/league';
import { getSeasonsRequest } from '@/store/slices/season';
import { Container, Title, SeasonsList, SeasonsCard, SeasonsCardText, LeagueList, ListSeparator } from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const leagues = useReduxSelector(state => state.league.leagues.data);
  const loading = useReduxSelector(state => state.league.loading);
  const seasons = useReduxSelector(state => state.season.seasons.data);

  const [selectedSeasons, setSelectedSeasons] = useState<number>(new Date().getFullYear());
  const [searchText, setSearchText] = useState('');

  const dispatch = useReduxDispatch();
  useEffect(() => {
    dispatch(getLeaguesRequest());
    dispatch(getSeasonsRequest());
  }, [dispatch]);

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
        onPress={() => navigate(routeNames.CLASSIFICATION, { season: selectedSeasons, leagueId: item.league.id })}
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
          data={[...seasons.slice().sort((a, b) => b - a)]}
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

  return (
    <Container>
      <Search value={searchText} onChangeText={value => setSearchText(value)} placeholder="Procure sua liga..." />

      <LeagueList
        data={leaguesFiltered}
        ListHeaderComponent={leaguesHeaderComponent}
        ListEmptyComponent={
          <EmptyLeague title={loading ? 'Carregando...' : 'Não há nenhuma liga para a temporada selecionada'} />
        }
        keyExtractor={item => `${item.league.id}`}
        ItemSeparatorComponent={ListSeparator}
        renderItem={renderItem}
      />
    </Container>
  );
};

export { Home };
