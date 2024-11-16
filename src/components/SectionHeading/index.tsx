import { Typography } from '@mui/material';

import React from 'react';
interface TextInputProps {
  title: string;
}

function index(props: TextInputProps) {
  return (
    <>
      <Typography sx={{ fontSize: '25px', fontWeight: 600, color: '#000' }}>{props.title}</Typography>
    </>
  );
}

export default index;
