import { RootState } from 'newTypes/RootState';
import { initialState } from './types/initialState';
import { createSelector } from '@reduxjs/toolkit';

const selectDomain = (state: RootState) => {
  if (state) {
    if (state.authState) {
      return state.authState;
    } else {
      return initialState;
    }
  } else {
    return initialState;
  }
};
export const selectUserDataForm = createSelector([selectDomain], (state) => state.userData);
export const selectLoading = createSelector([selectDomain], (state) => state.loading);
export const SelectIsLogin = createSelector([selectDomain], (state) => state.isLogin);
export const SelectToken = createSelector([selectDomain], (state) => state.token);
export const selectLoginForm = createSelector([selectDomain], (state) => state.loginForm);
export const selectIsToken = createSelector([selectDomain], (state) => state.isToken);
export const selectButtonLoading = createSelector([selectDomain], (state) => state.buttonLoading);
export const selectUpdatePasswordForm = createSelector([selectDomain], (state) => state.updatePassword);
