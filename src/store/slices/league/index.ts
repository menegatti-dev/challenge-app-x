import { League } from '@/types/league';
import { LeagueDetails } from '@/types/leagueDetails';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataWithCache<T> {
  data: T;
  lastUpdate?: string;
}

const leagueSlice = createSlice({
  name: '@league',
  initialState: {
    loading: false,
    leagues: { data: [] } as DataWithCache<League[]>,
    selectedLeague: {} as LeagueDetails,
    leaguesDetails: [] as DataWithCache<LeagueDetails>[],
  },
  reducers: {
    getLeaguesRequest: draft => {
      draft.loading = true;
    },
    getLeaguesSuccess: (draft, action: PayloadAction<League[]>) => {
      draft.leagues.data = action.payload;
      draft.leagues.lastUpdate = new Date().toString();
      draft.loading = false;
    },
    getLeaguesInCacheSuccess: draft => {
      draft.loading = false;
    },
    getLeaguesFailure: draft => {
      draft.loading = false;
    },
    getLeaguesDetailsRequest: (draft, action: PayloadAction<{ season: number; league: number }>) => {
      draft.selectedLeague = {} as LeagueDetails;
      draft.loading = true;
    },
    getLeaguesDetailsSuccess: (draft, action: PayloadAction<LeagueDetails>) => {
      const index = draft.leaguesDetails.findIndex(
        item => item.data.id === action.payload.id && item.data.season === action.payload.season,
      );

      if (index >= 0) {
        draft.leaguesDetails[index] = { data: action.payload, lastUpdate: new Date().toString() };
      } else {
        draft.leaguesDetails.push({ data: action.payload, lastUpdate: new Date().toString() });
      }

      draft.selectedLeague = action.payload;
      draft.loading = false;
    },
    getLeaguesDetailsInCacheSuccess: (draft, action: PayloadAction<LeagueDetails>) => {
      draft.selectedLeague = action.payload;
      draft.loading = false;
    },
    getLeaguesDetailsFailure: draft => {
      draft.loading = false;
    },
  },
});

export const {
  getLeaguesRequest,
  getLeaguesSuccess,
  getLeaguesInCacheSuccess,
  getLeaguesFailure,
  getLeaguesDetailsRequest,
  getLeaguesDetailsSuccess,
  getLeaguesDetailsInCacheSuccess,
  getLeaguesDetailsFailure,
} = leagueSlice.actions;

export const leagueReducer = leagueSlice.reducer;
