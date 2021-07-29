/* eslint-disable @typescript-eslint/no-unused-vars */
import { Team } from '@/types/team';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

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
    getTeamsDetailsRequest: (draft, _action: PayloadAction<{ teamId: number }>) => {
      draft.selectedTeam = {} as Team;
      draft.loading = true;
    },
    getTeamsDetailsSuccess: (draft, action: PayloadAction<Team>) => {
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
      draft.selectedTeam = action.payload;
      draft.loading = false;
    },
    getTeamsDetailsFailure: draft => {
      draft.loading = false;
      Toast.show({
        topOffset: 80,
        type: 'error',
        position: 'top',
        visibilityTime: 5000,
        text1: 'Erro ao atualizar detalhes do time.',
        text2: 'Verifique sua conexão com a internet e tente novamente!',
      });
    },
  },
});

export const { getTeamsDetailsRequest, getTeamsDetailsSuccess, getTeamsDetailsInCacheSuccess, getTeamsDetailsFailure } =
  teamSlice.actions;

export const teamReducer = teamSlice.reducer;
