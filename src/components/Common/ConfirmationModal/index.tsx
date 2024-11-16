import { Box, Grid, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import CustomButton from '../CustomButton';
import ModalTemplate from '../ModalTemplate/Index';
interface props {
  title: string;
  content: string;
  handleDelete: any;
  show: boolean;
  loading: boolean;
  onClose: any;
}
const Index: React.FC<props> = ({ title, content, handleDelete, onClose, loading, show }) => {
  return (
    <>
      <ModalTemplate open={show} title={title} handleClose={onClose}>
        <HeadingTypo>{content}</HeadingTypo>
        <Box sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <CustomButton loading={loading} handleClick={handleDelete} title={'Submit'} />
              <CustomButton loading={false} handleClick={onClose} title={'Cancel'} variant="outlined" mainSx={{ ml: 10 }} />
            </Stack>
          </Grid>
        </Box>
      </ModalTemplate>
    </>
  );
};

export default Index;

const HeadingTypo = styled(Typography)({
  fontSize: 20,
  fontWeight: 400,
  lineHeight: '16.94px',
  color: '#000'
});
