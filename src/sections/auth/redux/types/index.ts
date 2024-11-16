export interface ILogin {
  email: string;
  password: string;
}
export interface IPassword {
  password: string;
  confirmPassword: string;
}

export interface IUserData {
  _id: string;
  name: string;
  email: string;
  status: string;
  type: string;
}

export interface AuthState {
  loginForm: ILogin;
  userData: IUserData;
  updatePassword: IPassword;
  loading: boolean;
  token: string | null;
  isLogin: boolean;
  isToken: string | null;
  buttonLoading: boolean;
}

export type InitialAuthState = AuthState;
