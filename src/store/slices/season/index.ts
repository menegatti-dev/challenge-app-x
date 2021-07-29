import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      console.log('getSeasonsRequest');
      draft.loading = true;
    },
    getSeasonsSuccess: (draft, action: PayloadAction<number[]>) => {
      console.log('getSeasonsSuccess');
      draft.seasons.data = action.payload;
      draft.seasons.lastUpdate = new Date().toString();
      draft.loading = false;
    },
    getSeasonsInCacheSuccess: draft => {
      console.log('getSeasonsInCacheSuccess');
      draft.loading = false;
    },
    getSeasonsFailure: draft => {
      console.log('getSeasonsFailure');
      draft.loading = false;
    },
  },
});

export const { getSeasonsRequest, getSeasonsSuccess, getSeasonsInCacheSuccess, getSeasonsFailure } =
  seasonSlice.actions;

export const seasonReducer = seasonSlice.reducer;
