import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

interface DataWithCache<T> {
  data: T;
  lastUpdate?: string;
}

const seasonSlice = createSlice({
  name: '@season',
  initialState: {
    loading: false,
    seasons: { data: [] } as DataWithCache<number[]>,
  },
  reducers: {
    getSeasonsRequest: draft => {
      draft.loading = true;
    },
    getSeasonsSuccess: (draft, action: PayloadAction<number[]>) => {
      draft.seasons.data = action.payload;
      draft.seasons.lastUpdate = new Date().toString();
      draft.loading = false;
    },
    getSeasonsInCacheSuccess: draft => {
      draft.loading = false;
    },
    getSeasonsFailure: draft => {
      draft.loading = false;
      Toast.show({
        topOffset: 80,
        type: 'error',
        position: 'top',
        visibilityTime: 5000,
        text1: 'Erro ao atualizar lista de temporadas.',
        text2: 'Verifique sua conexão com a internet e tente novamente!',
      });
    },
  },
});

export const { getSeasonsRequest, getSeasonsSuccess, getSeasonsInCacheSuccess, getSeasonsFailure } =
  seasonSlice.actions;

export const seasonReducer = seasonSlice.reducer;
