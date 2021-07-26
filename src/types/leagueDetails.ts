export interface LeagueDetails {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: StandingsEntity[];
}
export interface StandingsEntity {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description?: string | null;
  all: AllOrHomeOrAway;
  home: AllOrHomeOrAway;
  away: AllOrHomeOrAway;
  update: string;
}
interface Team {
  id: number;
  name: string;
  logo: string;
}
interface AllOrHomeOrAway {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}
interface Goals {
  for: number;
  against: number;
}
