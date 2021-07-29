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
    },
  },
});

export const { getSeasonsRequest, getSeasonsSuccess, getSeasonsInCacheSuccess, getSeasonsFailure } =
  seasonSlice.actions;

export const seasonReducer = seasonSlice.reducer;
