import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type Props = {
  value: any;
  onChange: any;
  name: string;
  data: any;
  sx?: any;
  handleOnBlur?: any;
  disabled?: boolean;
  label: string;
  isCity?: boolean;
  isAPIData?: boolean;
};

const Index: React.FC<Props> = ({ value, onChange, name, data, sx, handleOnBlur, disabled, label, isCity, isAPIData }) => {
  return (
    <>
      <FormControl fullWidth sx={sx}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          label={label}
          disabled={disabled ? disabled : false}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
          onBlur={handleOnBlur}
          name={name}
        >
          {data?.map((data: any) => {
            return isAPIData ? (
              <MenuItem key={data?._id} value={data?._id}>
                {data?.title}
              </MenuItem>
            ) : isCity ? (
              <MenuItem key={data?._id} value={data?._id}>
                {data?.cityName}
              </MenuItem>
            ) : (
              <MenuItem key={data?.id} value={data?.id}>
                {data?.item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default Index;
