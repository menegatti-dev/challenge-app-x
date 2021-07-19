export interface League {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: Country;
  seasons?: SeasonsEntity[] | null;
}
interface Country {
  name: string;
  code: string;
  flag: string;
}
interface SeasonsEntity {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: Coverage;
}
interface Coverage {
  fixtures: Fixtures;
  standings: boolean;
  players: boolean;
  top_scorers: boolean;
  top_assists: boolean;
  top_cards: boolean;
  injuries: boolean;
  predictions: boolean;
  odds: boolean;
}
interface Fixtures {
  events: boolean;
  lineups: boolean;
  statistics_fixtures: boolean;
  statistics_players: boolean;
}
