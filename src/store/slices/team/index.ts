import { Team } from '@/types/team';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataWithCache<T> {
  data: T;
  lastUpdate?: string;
}

const teamSlice = createSlice({
  name: '@team',
  initialState: {
    loading: false,
    selectedTeam: {} as Team,
    teamsDetails: [] as DataWithCache<Team>[],
  },
  reducers: {
    getTeamsDetailsRequest: (draft, action: PayloadAction<{ teamId: number }>) => {
      console.log('getTeamsDetailsRequest');
      draft.selectedTeam = {} as Team;
      draft.loading = true;
    },
    getTeamsDetailsSuccess: (draft, action: PayloadAction<Team>) => {
      console.log('getTeamsDetailsSuccess');
      const index = draft.teamsDetails.findIndex(item => item.data.team.id === action.payload.team.id);

      if (index >= 0) {
        draft.teamsDetails[index] = { data: action.payload, lastUpdate: new Date().toString() };
      } else {
        draft.teamsDetails.push({ data: action.payload, lastUpdate: new Date().toString() });
      }

      draft.selectedTeam = action.payload;
      draft.loading = false;
    },
    getTeamsDetailsInCacheSuccess: (draft, action: PayloadAction<Team>) => {
      console.log('getTeamsDetailsInCacheSuccess');
      draft.selectedTeam = action.payload;
      draft.loading = false;
    },
    getTeamsDetailsFailure: draft => {
      console.log('getTeamsDetailsFailure');
      draft.loading = false;
    },
  },
});

export const { getTeamsDetailsRequest, getTeamsDetailsSuccess, getTeamsDetailsInCacheSuccess, getTeamsDetailsFailure } =
  teamSlice.actions;

export const teamReducer = teamSlice.reducer;
