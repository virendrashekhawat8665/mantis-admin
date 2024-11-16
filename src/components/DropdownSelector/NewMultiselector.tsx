import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
// import { useSelector } from 'react-redux';
// import { selectForm } from 'pages/meal/redux/selector';
// import { SelectMealIngredients } from 'pages/mealsIingredient/redux/selector';
import { ListItemText } from '@mui/material';
// import { actions } from 'pages/meal/redux/slice';
import { useEffect } from 'react';

interface props {
  value: any;
  handleChange: any;
  data: any;
}

const ITEM_HEIGHT = 45;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  };
}

export default function MultipleSelectChip(props: props) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  console.log(setPersonName);
  
  // const form = useSelector(selectForm);
  // const mealIngredients = useSelector(SelectMealIngredients);
  // const dispatch = useDispatch();
  // const handleChange = (event: SelectChangeEvent<typeof personName>) => {
  //   const {
  //     target: { value }
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value
  //   );
  //   props?.handleChange();
  //   // dispatch(actions.setIngredients(typeof value === 'string' ? value.split(',') : value));
  //   // console.log(personName, form.mealIngredients, 'sdsadas');
  // };
  var filteredObjects: any = [];
  if (props?.value) {
    filteredObjects = props?.data.filter((obj: any) => props?.value.includes(obj._id));
  }
  useEffect(() => {
    console.log(filteredObjects, props?.value, 'filteredObjects');
    return () => {};
  }, [props?.value, filteredObjects, props?.data]);
  return (
    <div>
      <FormControl sx={{ m: 1, width: '100%', margin: 0 }}>
        <Select
          multiple
          value={props?.value}
          onChange={props?.handleChange}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {filteredObjects?.map((value: any) => (
                <Chip key={value?._id} label={value?.englishTitle} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props?.data?.map((name: any) => (
            <MenuItem key={name._id} value={name._id} style={getStyles(name?.englishTitle, personName, theme)}>
              {/* <Checkbox checked={personName.indexOf(name._id) > -1} /> */}
              <ListItemText primary={name?.englishTitle} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
