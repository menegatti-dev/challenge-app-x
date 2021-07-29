/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { api } from '@/services/api';
import { AxiosResponse } from 'axios';
import { call, put, select } from 'redux-saga/effects';
import { getSeasonsSuccess, getSeasonsInCacheSuccess, getSeasonsFailure } from '@/store/slices/season';
import { ReduxStore } from '@/store/types';
import { differenceInHours } from 'date-fns';

export function* handleGetSeassons() {
  try {
    const lastUpdate: string | undefined = yield select((state: ReduxStore) => state.season.seasons.lastUpdate);

    if (lastUpdate && differenceInHours(new Date(lastUpdate), new Date()) < 24) {
      yield put(getSeasonsInCacheSuccess());
    } else {
      const response = (yield call(api.get, '/leagues/seasons')) as AxiosResponse<{ response: number[] }>;
      yield put(getSeasonsSuccess(response.data.response));
    }
  } catch (error) {
    yield put(getSeasonsFailure());
    console.error(error);
  }
}
