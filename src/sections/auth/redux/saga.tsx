import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { AxiosResponse } from 'axios';
import { selectLoginForm, selectUpdatePasswordForm } from './selector';
import { ILogin, IPassword } from './types';
import { loginValidation, updatePasswordValidation } from 'components/Common/Validations';
import { getType, patchType, postType } from '../../../utilsNew/request';
import { openSnackbar } from '../../../store/reducers/snackbar';
import CatchBlockFunction from '../../../hooks/CatchError';

export function* doLoginRequest(action: { payload: { callback: any } }) {
  yield delay(500);
  const form: ILogin = yield select(selectLoginForm);

  const isValid = loginValidation(form);
  if (!isValid) {
    return;
  }
  let data = {
    email: form?.email,
    password: btoa(form?.password)
  };

  yield put(actions.setButtonLoading(true));
  try {
    const response: AxiosResponse = yield call(postType, `auth/admin/login`, data);
    yield put(actions.setButtonLoading(false));
    if (response && !response.data) {
      yield put(
        openSnackbar({
          open: true,
          message: response.data.message,
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
      return;
    }
    yield put(
      openSnackbar({
        open: true,
        message: response.data.message,
        variant: 'alert',
        alert: {
          color: 'success'
        },
        close: true
      })
    );
    yield put(actions.setToken(response.data.data.accessToken));
    yield call(action?.payload?.callback(response.data.data.accessToken));
  } catch (error: any) {
    yield put(actions.setButtonLoading(false));
    CatchBlockFunction(error);
  }
}
export function* doGetMeProfileRequest(action: { payload: { token: string; callback: any } }) {
  yield delay(500);

  if (action.payload.token) {
    try {
      yield put(actions.setLoading(true));
      const response: AxiosResponse = yield call(getType, `auth/user/me`);
      if (response && !response.data) {
        yield put(
          openSnackbar({
            open: true,
            message: response.data.message,
            variant: 'alert',
            alert: {
              color: 'error'
            },
            close: true
          })
        );
        return;
      }
      yield put(actions.setProfileData(response.data.data));
      yield put(actions.setIsLogin(true));
      yield put(actions.setLoading(false));
      yield call(action?.payload?.callback());
    } catch (error: any) {
      yield put(actions.setLoading(false));
      if (error?.response?.data?.statusCode === 404) {
        yield put(actions.clearLocalStorage());
        return;
      } else {
        CatchBlockFunction(error);
      }
    }
  } else {
    yield put(actions.setLoading(false));
    yield put(actions.setIsLogin(false));
  }
}
export function* doUpdatePasswordRequest(action: { payload: { callback: any } }) {
  yield delay(500);
  const form: IPassword = yield select(selectUpdatePasswordForm);

  const isValid = updatePasswordValidation(form);
  if (!isValid) {
    return;
  }
  let data = {
    password: btoa(form?.password),
    confirmPassword: btoa(form?.confirmPassword)
  };

  yield put(actions.setButtonLoading(true));
  try {
    const response: AxiosResponse = yield call(patchType, `admin/user/update/password`, data);
    yield put(actions.setButtonLoading(false));
    if (response && !response.data) {
      yield put(
        openSnackbar({
          open: true,
          message: response.data.message,
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
      return;
    }
    yield put(
      openSnackbar({
        open: true,
        message: response.data.message,
        variant: 'alert',
        alert: {
          color: 'success'
        },
        close: true
      })
    );
    yield put(actions.setToken(response.data.data.accessToken));
    yield call(action?.payload?.callback(response.data.data.accessToken));
  } catch (error: any) {
    yield put(actions.setButtonLoading(false));
    CatchBlockFunction(error);
  }
}
export function* AuthRepoSaga() {
  yield takeLatest(actions.doLogin, doLoginRequest);
  yield takeLatest(actions.doGetProfile, doGetMeProfileRequest);
  yield takeLatest(actions.doUpdatePassword, doUpdatePasswordRequest);
}
