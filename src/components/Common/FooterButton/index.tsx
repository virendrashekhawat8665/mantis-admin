import { Stack } from '@mui/material';
import React from 'react';
import CustomButton from '../CustomButton';

type Props = {
  handleCancel?: () => void | any;
  handleSubmit?: () => void | any;
  cancelHide?: boolean;
  loading?: boolean;
};

const Index: React.FC<Props> = ({ cancelHide, handleCancel, handleSubmit, loading }) => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="right" alignItems="center" sx={{ mt: 6 }}>
        {!cancelHide && <CustomButton loading={false} handleClick={handleCancel} title={'Cancel'} variant="outlined" mainSx={{ mx: 2 }} />}
        <CustomButton loading={loading} handleClick={handleSubmit} title={'Submit'} />
      </Stack>
    </>
  );
};

export default Index;
