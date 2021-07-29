import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import { leagueReducer } from './slices/league';
import { seasonReducer } from './slices/season';

const reducers = combineReducers({
  league: leagueReducer,
  season: seasonReducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export { store };
