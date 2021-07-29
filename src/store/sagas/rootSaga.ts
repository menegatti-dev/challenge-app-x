import { takeLatest } from 'redux-saga/effects';

import { getLeaguesRequest, getLeaguesDetailsRequest } from '@/store/slices/league';

import { handleGetLeagues, handleGetLeagueDetails } from './handlers/league';

export function* watcherSaga(): Generator {
  yield takeLatest(getLeaguesRequest.type, handleGetLeagues);
  yield takeLatest(getLeaguesDetailsRequest.type, handleGetLeagueDetails);
}
