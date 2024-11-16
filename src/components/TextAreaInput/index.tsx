import { TextField } from '@mui/material';
import React from 'react';

interface TextInputProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value: any;
  onChange: any;
  className: string;
  rows: number;
}

function index(props: TextInputProps) {
  return (
    <>
      <TextField
        fullWidth
        multiline
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={props.className}
        rows={props.rows}
      />
    </>
  );
}

export default index;
