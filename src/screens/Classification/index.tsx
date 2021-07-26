import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Search } from '@/components/Search';
import { EmptyLeague } from '@/components/EmptyLeague';
import { routeNames } from '@/routes/routeNames';
import leagueJson from '@/mocks/league.json';

import Header from '@/components/Header';
import { LeagueDetails, StandingsEntity } from '@/types/leagueDetails';
import TableItem from '@/components/TableItem';
import {
  Container,
  LeagueWrapper,
  LeagueLogoBackground,
  LeagueLogo,
  Title,
  FilterList,
  FilterCard,
  FilterCardText,
  LeagueList,
  ListSeparator,
  LeagueTitle,
} from './styles';

interface RouteParamsProps {
  season: string;
  leagueId: string;
}

const Classification: React.FC = () => {
  const { navigate } = useNavigation();
  const route = useRoute();

  const { season, leagueId } = route.params as RouteParamsProps;

  const [league, setLeague] = useState<LeagueDetails>({} as LeagueDetails);

  const filters = useMemo(
    () => [
      { id: 'classification', name: 'Rank' },
      { id: 'name', name: 'Nome' },
      { id: 'wins', name: 'Vitorias' },
      { id: 'draw', name: 'Empates' },
      { id: 'losers', name: 'Derrotas' },
      { id: 'golsDiff', name: 'Diferença em gols' },
    ],
    [],
  );
  const [selectedFilter, setSelectedFilter] = useState<string>('classification');
  const [searchText, setSearchText] = useState('');

  const teamsFiltered = useMemo(() => {
    const filtered = league?.standings?.filter(item => item.team.name.includes(searchText)) || [];
    switch (selectedFilter) {
      case 'classification':
        return filtered.sort((a, b) => a.rank - b.rank);

      case 'name':
        return filtered.sort((a, b) => (b.team.name < a.team.name ? 1 : b.team.name > a.team.name ? -1 : 0));

      case 'wins':
        return filtered.sort((a, b) => b.all.win - a.all.win);

      case 'draw':
        return filtered.sort((a, b) => b.all.draw - a.all.draw);

      case 'losers':
        return filtered.sort((a, b) => b.all.lose - a.all.lose);

      case 'golsDiff':
        return filtered.sort((a, b) => b.goalsDiff - a.goalsDiff);

      default:
        return filtered;
    }
  }, [league?.standings, searchText, selectedFilter]);

  const renderItem = useCallback(
    ({ item }: { item: StandingsEntity }) => (
      <TableItem
        type="line"
        logo={item.team.logo}
        classification={item.rank}
        name={item.team.name}
        points={item.points}
        wins={item.all.win}
        draw={item.all.draw}
        losers={item.all.lose}
        golsDiff={item.goalsDiff}
        onPress={() => navigate(routeNames.TEAMDETAILS, { teamId: item.team.id })}
      />
    ),
    [navigate],
  );

  const filterRenderItem = useCallback(
    ({ item }: { item: { id: string; name: string }; index: number }) => (
      <FilterCard
        active={selectedFilter === item.id}
        onPress={() => {
          setSelectedFilter(item.id);
        }}
      >
        <FilterCardText>{item.name}</FilterCardText>
      </FilterCard>
    ),
    [selectedFilter],
  );

  const leaguesHeaderComponent = useCallback(
    () => (
      <>
        <Title>Classificar por</Title>
        <FilterList
          data={filters}
          horizontal
          ItemSeparatorComponent={ListSeparator}
          keyExtractor={item => `${item.id}`}
          renderItem={filterRenderItem}
        />
        <TableItem
          type="header"
          classification=""
          name="Nome"
          points="Pts"
          wins="V"
          draw="E"
          losers="D"
          golsDiff="DG"
        />
      </>
    ),
    [filterRenderItem, filters],
  );

  const loadData = () => {
    setLeague({ ...leagueJson.response[0].league });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header countryName={league?.country} countryLogo={league?.flag} />
      <LeagueWrapper>
        <LeagueLogoBackground>
          <LeagueLogo source={{ uri: league?.logo }} />
        </LeagueLogoBackground>
        <LeagueTitle>{`${league?.name} ${league?.season}`}</LeagueTitle>
      </LeagueWrapper>
      <Search value={searchText} onChangeText={value => setSearchText(value)} placeholder="Procure sua liga..." />

      <LeagueList
        data={teamsFiltered}
        ListHeaderComponent={leaguesHeaderComponent}
        ListEmptyComponent={EmptyLeague}
        keyExtractor={item => `${item.team.id}`}
        ItemSeparatorComponent={ListSeparator}
        renderItem={renderItem}
      />
    </Container>
  );
};

export { Classification };
