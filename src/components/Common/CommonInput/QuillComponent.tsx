import { InputLabel } from '@mui/material';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface CommonProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
}
const QuillComponent: React.FC<CommonProps> = ({ label, name, onChange, value }) => {
  const handleChange = (value: string) => {
    onChange(name, value);
  };
  return (
    <>
      <InputLabel sx={{ mb: 1 }}>{label}</InputLabel>
      <ReactQuill value={value} onChange={handleChange} />
    </>
  );
};

export default QuillComponent;
