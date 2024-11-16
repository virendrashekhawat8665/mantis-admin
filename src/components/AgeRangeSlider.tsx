import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export interface AgeRangeProps {
    // value: any;
    handleChange: any;
    // name: string;
    minAge: any;
    maxAge: any;
}

function valuetext(value: number) {
  return `${value}°C`;
}

function AgeRangeSlider(props: AgeRangeProps) {
 
    const [value, setValue] = React.useState<number[]>([props.minAge, props.maxAge]);

    const _handleChange = (event: Event, newValue: any) => {
      setValue(newValue as number[]);
      // dispatch(
      //   actions.updateFormValue({
      //     key: "minAge",
      //     value: newValue[0],
      //   })
      // );
      // dispatch(
      //   actions.updateFormValue({
      //     key: "maxAge",
      //     value: newValue[1],
      //   })
      // );
      // dispatch(
      //   actions.updateFormValue({
      //     key: "pageNo",
      //     value: 1,
      //   })
      // );
      props.handleChange(newValue as number[]);
    };
  React.useEffect(() => {
    setValue([props.minAge, props.maxAge])
    return () => {}
  }, [props])
  
  return (
    <>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {props.minAge}
      <Slider
        getAriaLabel={() => 'age range'}
        value={value}
        onChange={_handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={66}
        sx={{mx: 2}}
      />
      {props.maxAge}
    </Box>
    </>
  )
}

export default AgeRangeSlider