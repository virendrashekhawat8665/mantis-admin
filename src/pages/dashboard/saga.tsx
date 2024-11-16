import { AxiosResponse } from 'axios';
import { call, delay, put, select } from 'redux-saga/effects';
import { SelectDateFilter, selectEndDate, selectStartDate } from './selector';
import { actions } from './slice';

import CustomSnackbar from 'components/Common/CustomSnackbar';
import CatchError from 'hooks/CatchError';
import moment from 'moment';
import { getType } from 'utilsNew/request';

export function* doGetDashboardDataRequest() {
  yield delay(500);
  try {
    const startDate: string = yield select(selectStartDate);
    const endDate: string = yield select(selectEndDate);
    const dateFIlter: number = yield select(SelectDateFilter);
    yield put(actions.setLoading(true));
    const response: AxiosResponse = yield call(
      getType,
      `admin/dashboard/dashboard?dateFilter=${dateFIlter}${startDate ? '&startDate=' + moment(startDate).format('YYYY-MM-DD') : ''}${
        endDate ? '&endDate=' + moment(endDate).format('YYYY-MM-DD') : ''
      }`
    );
    yield put(actions.setLoading(false));
    if (response && !response.data) {
      CustomSnackbar(response.data.message, 'error');
      return;
    }
    yield put(actions.setDashboardData(response.data.data));
  } catch (error: any) {
    yield put(actions.setLoading(false));
    CatchError(error);
  }
}

export function* DashboardRepoSaga() {
  // yield takeLatest(actions.doGetDashboardData, doGetDashboardDataRequest);
}
