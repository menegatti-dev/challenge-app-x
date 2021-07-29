/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { api } from '@/services/api';
import { AxiosResponse } from 'axios';
import { call, put, select } from 'redux-saga/effects';
import {
  getTeamsDetailsRequest,
  getTeamsDetailsInCacheSuccess,
  getTeamsDetailsSuccess,
  getTeamsDetailsFailure,
} from '@/store/slices/team';
import { ReduxStore } from '@/store/types';
import { differenceInMinutes } from 'date-fns';
import { Team } from '@/types/team';

export function* handleGetTeamDetails(action: ReturnType<typeof getTeamsDetailsRequest>) {
  try {
    const { teamId } = action.payload;

    const teamsDetails: ReduxStore['team']['teamsDetails'] = yield select(
      (state: ReduxStore) => state.team.teamsDetails,
    );

    const index = teamsDetails.findIndex(item => item.data.team.id === teamId);

    const item = teamsDetails[index];

    if (index >= 0 && item?.lastUpdate && differenceInMinutes(new Date(item.lastUpdate), new Date()) < 60) {
      yield put(getTeamsDetailsInCacheSuccess(teamsDetails[index].data));
    } else {
      const response = (yield call(api.get, `/teams?id=${teamId}`)) as AxiosResponse<{
        response: Team[];
      }>;
      yield put(getTeamsDetailsSuccess(response.data.response[0]));
    }
  } catch (error) {
    yield put(getTeamsDetailsFailure());
    console.error(error);
  }
}
