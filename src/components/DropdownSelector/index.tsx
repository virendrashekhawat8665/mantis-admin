import { FormControl, MenuItem, Select } from '@mui/material';

interface SelectDropdownProps {
  name: string;
  placeholder: string;
  value: any;
  onChange: any;
  className: string;
  data: any;
  //   enumData: any;
}

function SelectDropdown(props: SelectDropdownProps) {
  return (
    <>
      <FormControl fullWidth>
        <Select id="demo-simple-select" value={props.value} name={props.name} onChange={props.onChange}>
          <MenuItem value={''} disabled>
            {props.placeholder}
          </MenuItem>
          {props.data?.map((item: any) => (
            <MenuItem key={item.enum} value={item.enum}>
              {item.item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default SelectDropdown;
