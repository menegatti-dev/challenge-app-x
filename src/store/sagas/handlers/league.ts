/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { api } from '@/services/api';
import { AxiosResponse } from 'axios';
import { call, put, select } from 'redux-saga/effects';
import {
  getLeaguesSuccess,
  getLeaguesInCacheSuccess,
  getLeaguesFailure,
  getLeaguesDetailsRequest,
  getLeaguesDetailsInCacheSuccess,
  getLeaguesDetailsSuccess,
  getLeaguesDetailsFailure,
} from '@/store/slices/league';
import { ReduxStore } from '@/store/types';
import { differenceInMinutes } from 'date-fns';
import { League } from '@/types/league';
import { LeagueDetails } from '@/types/leagueDetails';

export function* handleGetLeagues() {
  try {
    const lastUpdate: string | undefined = yield select((state: ReduxStore) => state.league.leagues.lastUpdate);

    if (lastUpdate && differenceInMinutes(new Date(lastUpdate), new Date()) < 60) {
      yield put(getLeaguesInCacheSuccess());
    } else {
      const response = (yield call(api.get, '/leagues?type=league')) as AxiosResponse<{ response: League[] }>;
      yield put(getLeaguesSuccess(response.data.response));
    }
  } catch (error) {
    yield put(getLeaguesFailure());
    console.error(error);
  }
}

export function* handleGetLeagueDetails(action: ReturnType<typeof getLeaguesDetailsRequest>) {
  try {
    const { league, season } = action.payload;

    const leaguesDetails: ReduxStore['league']['leaguesDetails'] = yield select(
      (state: ReduxStore) => state.league.leaguesDetails,
    );

    const index = leaguesDetails.findIndex(item => item.data.id === league && item.data.season === season);

    const item = leaguesDetails[index];

    if (index >= 0 && item?.lastUpdate && differenceInMinutes(new Date(item.lastUpdate), new Date()) < 60) {
      yield put(getLeaguesDetailsInCacheSuccess(leaguesDetails[index].data));
    } else {
      const response = (yield call(api.get, `/standings?season=${season}&league=${league}`)) as AxiosResponse<{
        response: { league: LeagueDetails }[];
      }>;
      if (response.data.response[0]?.league) {
        yield put(getLeaguesDetailsSuccess(response.data.response[0]?.league));
      }
      yield put(getLeaguesDetailsFailure());
    }
  } catch (error) {
    yield put(getLeaguesDetailsFailure());
    console.error(error);
  }
}
