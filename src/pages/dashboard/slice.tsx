import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../utilsNew/@reduxjs/toolkit';
import { DateFilterTypeEnum, IDashboard } from './types';
import { initialState } from './types/initialState';

export const useClinicSlice = createSlice({
  name: 'dashboardState',
  initialState,
  reducers: {
    doGetDashboardData: (state) => {
      state.loading = true;
    },
    setDashboardData: (state, action: PayloadAction<IDashboard>) => {
      state.dashboardFormData = action.payload;
    },
    setDateFilter: (state, action: PayloadAction<DateFilterTypeEnum>) => {
      state.dateFilter = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string | null>) => {
      state.endDate = action.payload;
    },
    setStartDate: (state, action: PayloadAction<string | null>) => {
      state.startDate = action.payload;
    }
  }
});

export const { reducer, actions, name: sliceKey } = useClinicSlice;
