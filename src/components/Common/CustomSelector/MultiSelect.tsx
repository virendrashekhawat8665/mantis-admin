import { FormControl, MenuItem, Select } from '@mui/material';

type Props = {
  value: any;
  onChange: any;
  name: string;
  data: any;
  sx?: any;
  disabled?: boolean;
};

const MultiSelect: React.FC<Props> = ({ value, onChange, name, data, sx, disabled }) => {
  return (
    <>
      <FormControl fullWidth sx={sx}>
        <Select
          disabled={disabled}
          labelId="demo-simple-select-label"
          multiple
          id="demo-simple-select"
          value={value}
          onChange={onChange}
          name={name}
        >
          {data?.map((data: any) => (
            <MenuItem key={data.id} value={data.id}>
              {data.item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default MultiSelect;
