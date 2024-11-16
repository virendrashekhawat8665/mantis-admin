export interface IDashboard {
  plotsForSaleCount: number;
  previousPlotsForSaleCount: number;
  totalIncome: number;
  previousTotalIncome: number;
  pendingOrderCount: number;
  previousPendingOrderCount: number;
  completedOrderCount: number;
  previousCompletedOrderCount: number;
}
export enum DateFilterTypeEnum {
  ALL = 0,
  TODAY = 1,
  WEEK = 7,
  MONTH = 30,
  YEAR = 365
}

export interface DashboardState {
  dashboardFormData: IDashboard;
  loading: boolean;
  dateFilter: DateFilterTypeEnum;
  endDate: string | null;
  startDate: string | null;
}

export type InitialState = DashboardState;
