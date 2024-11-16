import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface CommonProps {
  data: [] | any;
  //   value: any;
  //   placeHolder: string;
  //   onChange: any;
}

const CountrySelect: React.FC<CommonProps> = ({ data }) => {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={data}
      autoHighlight
      getOptionLabel={(option: any) => option._id}
      renderOption={(props, option) => {
        const { ...optionProps } = props;
        return (
          <Box key={option._id} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...optionProps}>
            {option.cityName}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          //@ts-ignore
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: 'new-password' // disable autocomplete and autofill
            }
          }}
        />
      )}
    />
  );
};

export default CountrySelect;
