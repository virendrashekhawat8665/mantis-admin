import { DashboardState, DateFilterTypeEnum } from '.';

export const initialState: DashboardState = {
  loading: false,
  dashboardFormData: {
    plotsForSaleCount: 0,
    previousPlotsForSaleCount: 0,
    totalIncome: 0,
    previousTotalIncome: 0,
    pendingOrderCount: 0,
    previousPendingOrderCount: 0,
    completedOrderCount: 0,
    previousCompletedOrderCount: 0
  },
  dateFilter: DateFilterTypeEnum.ALL,
  endDate: null,
  startDate: null
};
