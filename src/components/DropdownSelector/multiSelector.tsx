import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
interface MultiSeclotorComponentProps {
  handleFieldChange: any;
  dropdownData: any;
  label: any;
  searchValue: any;
}
export default function CheckboxesTags(props: MultiSeclotorComponentProps) {
  const [selectedArray, setSetselectedArray] = useState<Array<any>>([]);
  const handleClick = (e: any, selected: any) => {
    if (!selected) {
      setSetselectedArray([...selectedArray, e]);
    }
  };
  useEffect(() => {
    props.handleFieldChange(selectedArray);
  }, [selectedArray]);
  return (
    <Autocomplete
      multiple
      options={props.dropdownData}
      disableCloseOnSelect
      getOptionLabel={(option: any) => option.englishTitle}
      renderOption={(props, option, { selected }) => (
        <li {...props} style={{ display: 'flex', alignItems: 'baseline', fontSize: 14, cursor: 'pointer' }}>
          <Checkbox style={{ marginRight: 8 }} checked={selected} onClick={() => handleClick(option._id, selected)} />
          {option.englishTitle}
        </li>
      )}
      sx={{
        background: 'white',
        borderRadius: 4,
        zIndex: 3
      }}
      limitTags={2}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={selectedArray.length == 0 ? props.label : ''}
          size="medium"
          sx={{
            // height: 32,
            borderRadius: '4px !important',
            zIndex: 3,
            backgroundColor: '#fff',
            position: 'relative'
          }}
        />
      )}
    />
  );
}
