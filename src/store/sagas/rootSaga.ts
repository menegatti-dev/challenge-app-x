import { takeLatest } from 'redux-saga/effects';

import { getLeaguesRequest, getLeaguesDetailsRequest } from '@/store/slices/league';
import { getTeamsDetailsRequest } from '@/store/slices/team';
import { getSeasonsRequest } from '@/store/slices/season';

import { handleGetLeagues, handleGetLeagueDetails } from './handlers/league';
import { handleGetSeassons } from './handlers/season';
import { handleGetTeamDetails } from './handlers/team';

export function* watcherSaga(): Generator {
  yield takeLatest(getLeaguesRequest.type, handleGetLeagues);
  yield takeLatest(getLeaguesDetailsRequest.type, handleGetLeagueDetails);
  yield takeLatest(getSeasonsRequest.type, handleGetSeassons);
  yield takeLatest(getTeamsDetailsRequest.type, handleGetTeamDetails);
}
