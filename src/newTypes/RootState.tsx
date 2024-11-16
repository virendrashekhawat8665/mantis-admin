import { DashboardState } from 'pages/dashboard/types';
import { AuthState } from 'sections/auth/redux/types';

export interface RootState {
  authState: AuthState;
  dashboardState: DashboardState;
}
