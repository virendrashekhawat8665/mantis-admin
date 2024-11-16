import { Grid, Stack, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import React from 'react';
import CustomButton from '../CustomButton';

type Props = {
  startDate: string | null;
  endDate: string | null;
  handleStartDateChange: any;
  handleEndDateChange: any;
  handleAdd: () => void;
  handleClear: () => void;
};

const Index: React.FC<Props> = ({ endDate, handleAdd, handleClear, handleEndDateChange, handleStartDateChange, startDate }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterMoment} fullWidth>
            <DesktopDatePicker
              disableFuture
              label="Start Date"
              inputFormat="MM/DD/yyyy"
              value={startDate}
              onChange={handleStartDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterMoment} fullWidth>
            <DesktopDatePicker
              disableFuture
              label="End Date"
              inputFormat="MM/DD/yyyy"
              value={endDate}
              onChange={handleEndDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <CustomButton loading={false} handleClick={handleAdd} title={'Search'} />
            <CustomButton loading={false} handleClick={handleClear} title={'Clear'} variant={'outlined'} />
          </Stack>
        </Grid>{' '}
      </Grid>
    </>
  );
};

export default Index;
