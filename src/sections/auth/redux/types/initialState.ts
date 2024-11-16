import { AuthState } from '.';

export const initialState: AuthState = {
  loginForm: {
    email: '',
    password: ''
  },
  userData: {
    _id: '',
    name: '',
    email: '',
    status: '',
    type: ''
  },
  updatePassword: {
    password: '',
    confirmPassword: ''
  },
  loading: false,
  token: '',
  isLogin: false,
  isToken: null,
  buttonLoading: false
};
