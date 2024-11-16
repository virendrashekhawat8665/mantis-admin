import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'newTypes/RootState';
import { initialState } from './types/initialState';

const selectDomain = (state: RootState) => {
  if (state && state.dashboardState) {
    return state.dashboardState;
  } else {
    return initialState;
  }
};
export const selectDashboardFormData = createSelector([selectDomain], (state) => state.dashboardFormData);
export const selectLoading = createSelector([selectDomain], (state) => state.loading);
export const SelectDateFilter = createSelector([selectDomain], (state) => state.dateFilter);
export const selectStartDate = createSelector([selectDomain], (state) => state.startDate);
export const selectEndDate = createSelector([selectDomain], (state) => state.endDate);
