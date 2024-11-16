import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from './types/initialState';
import { IUserData } from './types';
import { set } from 'lodash';

export const useClinicSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setButtonLoading: (state, action: PayloadAction<boolean>) => {
      state.buttonLoading = action.payload;
    },
    setIsToken: (state, action: PayloadAction<string | null>) => {
      state.isToken = action.payload;
    },
    updateFormValue: (state, action: PayloadAction<{ key: string; value: any }>) => {
      set(state, `loginForm.${action.payload.key}`, action.payload.value);
    },
    updatePasswordFormValue: (state, action: PayloadAction<{ key: string; value: any }>) => {
      set(state, `updatePassword.${action.payload.key}`, action.payload.value);
    },
    clearLoginFrom: (state) => {
      state.loginForm.email = '';
      state.loginForm.password = '';
    },
    clearPasswordFrom: (state) => {
      state.updatePassword.password = '';
      state.updatePassword.confirmPassword = '';
    },
    doLogin: (state, action: PayloadAction<{ callback: (token: string) => void }>) => {},
    doUpdatePassword: (state, action: PayloadAction<{ callback: (token: string) => void }>) => {},
    doLogOut: (state) => {
      localStorage.clear();
    },
    clearLocalStorage: (state) => {
      localStorage.clear();
    },

    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },

    doGetProfile: (
      state,
      action: PayloadAction<{
        token: string;
        callback: () => void;
      }>
    ) => {},

    setProfileData: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload;
    },

    doLogout: (state) => {
      localStorage.removeItem('token');
      
    }
  }
});

export const { reducer, actions, name: sliceKey } = useClinicSlice;
