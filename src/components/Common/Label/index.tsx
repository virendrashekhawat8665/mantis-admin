import { InputLabel } from '@mui/material';
import React from 'react';
type Props = {
  title: string;
};

const Index: React.FC<Props> = ({ title }) => {
  return <InputLabel sx={labelStyle}>{title}</InputLabel>;
};

export default Index;
const labelStyle = {
  marginBottom: 1,
  fontSize: 16,
  color: '#000'
};
