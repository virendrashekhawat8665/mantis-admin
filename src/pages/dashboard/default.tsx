import { Button, ButtonGroup, Grid } from '@mui/material';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import CustomSnackbar from 'components/Common/CustomSnackbar';
import DateFilter from 'components/Common/DateFilter';
import IsLoading from 'components/Common/IsLoading';
import MainCard from 'components/MainCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDashboardFormData, SelectDateFilter, selectEndDate, selectLoading, selectStartDate } from './selector';
import { actions } from './slice';
import { DateFilterTypeEnum } from './types';

const DashboardDefault = () => {
  const dispatch = useDispatch();
  const dateFilter = useSelector(SelectDateFilter);
  const data = useSelector(selectDashboardFormData);
  const loading = useSelector(selectLoading);
  const startDate = useSelector(selectStartDate);
  const endDate = useSelector(selectEndDate);

  const handleClickDay = (status: any) => {
    dispatch(actions.setDateFilter(status));
  };
  useEffect(() => {
    dispatch(actions.doGetDashboardData());
    return () => {};
  }, [dateFilter]);
  const handleChange = (newValue: any) => {
    dispatch(actions.setStartDate(newValue));
  };
  const handleEndDateChange = (newValue: any) => {
    dispatch(actions.setEndDate(newValue));
  };
  const handleDate = () => {
    if (startDate === '') {
      CustomSnackbar('please enter start date', 'error');
      return;
    }
    if (endDate === '') {
      CustomSnackbar('please enter end date', 'error');

      return;
    }
    dispatch(actions.doGetDashboardData());
  };
  const handleClearDate = () => {
    dispatch(actions.setEndDate(null));
    dispatch(actions.setStartDate(null));
    dispatch(actions.doGetDashboardData());
  };
  return (
    <>
      <MainCard title="Dashboard">
        {loading ? (
          <IsLoading />
        ) : (
          <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid container rowSpacing={4.5} columnSpacing={2.75} mt={2} mx={2}>
              <Grid item xs={12} md={2} lg={3}></Grid>
              <Grid item xs={12} md={4} lg={4}>
                <ButtonGroup>
                  <Button
                    variant={dateFilter == DateFilterTypeEnum?.ALL ? 'contained' : 'outlined'}
                    onClick={() => handleClickDay(DateFilterTypeEnum?.ALL)}
                  >
                    All
                  </Button>
                  <Button
                    variant={dateFilter == DateFilterTypeEnum?.TODAY ? 'contained' : 'outlined'}
                    onClick={() => handleClickDay(DateFilterTypeEnum?.TODAY)}
                  >
                    Today
                  </Button>
                  <Button
                    variant={dateFilter == DateFilterTypeEnum?.WEEK ? 'contained' : 'outlined'}
                    onClick={() => handleClickDay(DateFilterTypeEnum?.WEEK)}
                  >
                    Weeks
                  </Button>
                  <Button
                    variant={dateFilter == DateFilterTypeEnum?.MONTH ? 'contained' : 'outlined'}
                    onClick={() => handleClickDay(DateFilterTypeEnum?.MONTH)}
                  >
                    Months
                  </Button>
                  <Button
                    variant={dateFilter == DateFilterTypeEnum?.YEAR ? 'contained' : 'outlined'}
                    onClick={() => handleClickDay(DateFilterTypeEnum?.YEAR)}
                  >
                    Year
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid item xs={12} md={6} lg={5}>
                <DateFilter
                  startDate={startDate}
                  endDate={endDate}
                  handleStartDateChange={handleChange}
                  handleEndDateChange={handleEndDateChange}
                  handleAdd={() => handleDate()}
                  handleClear={handleClearDate}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <AnalyticEcommerce title="Revenue" count={data?.totalIncome} isLoss color="warning" extra={''} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <AnalyticEcommerce title="Order Pending" count={data?.pendingOrderCount} isLoss color="warning" extra={''} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <AnalyticEcommerce title="Order Completed" count={data?.completedOrderCount} isLoss color="warning" extra={''} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <AnalyticEcommerce title="Plots for Sale" count={data?.plotsForSaleCount} isLoss color="warning" extra={''} />
            </Grid>
            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
          </Grid>
        )}
      </MainCard>
    </>
  );
};

export default DashboardDefault;
