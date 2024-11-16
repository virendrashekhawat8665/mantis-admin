import { Autocomplete, Chip, FormControl, TextField } from '@mui/material';
import React from 'react';

interface Props {
  label?: string;
  value: any;
  handleChange: any;
  sx?: any;
  disabled?: boolean;
  placeholder: string;
}

const CustomAutoComplete: React.FC<Props> = ({ label, value, handleChange, disabled, placeholder }) => {
  return (
    <>
      <FormControl fullWidth>
        <Autocomplete
          disabled={disabled}
          multiple
          freeSolo
          options={value}
          value={value}
          onChange={handleChange}
          renderTags={(value: string[], getTagProps) =>
            value.map((option, index) => <Chip label={option} {...getTagProps({ index })} key={option} />)
          }
          renderInput={(params) => (
            <TextField {...params} variant="outlined" placeholder={placeholder} label={label} multiline minRows={2} />
          )}
        />
      </FormControl>
    </>
  );
};

export default CustomAutoComplete;
