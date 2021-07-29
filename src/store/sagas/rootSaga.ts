import { takeLatest } from 'redux-saga/effects';

import { getLeaguesRequest, getLeaguesDetailsRequest } from '@/store/slices/league';
import { getSeasonsRequest } from '@/store/slices/season';

import { handleGetLeagues, handleGetLeagueDetails } from './handlers/league';
import { handleGetSeassons } from './handlers/season';

export function* watcherSaga(): Generator {
  yield takeLatest(getLeaguesRequest.type, handleGetLeagues);
  yield takeLatest(getLeaguesDetailsRequest.type, handleGetLeagueDetails);
  yield takeLatest(getSeasonsRequest.type, handleGetSeassons);
}
