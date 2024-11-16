import { Button, Grid, InputLabel, Stack, Typography } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
// import { selectSettingForm } from 'pages/Catalouge/redux/selector';
// import { actions } from 'pages/Catalouge/redux/slice';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

function Index() {
  // const dispatch = useDispatch();
  // const from = useSelector(selectSettingForm);
  // useEffect(() => {
  //   dispatch(actions.doGetSetting())
  //   return () => {};
  // }, []);
  // const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = evt.target;
  //   dispatch(actions.updateSettingFormValue({ key: name, value: value }));
  //   console.log(name, value);
  // };
  // const handleClick = () => {
  //   dispatch(
  //     actions.doSaveSetting({
  //       callback: () => {
  //         dispatch(actions.doGetSetting())
  //       }
  //     })
  //   );
  // };
  return (
    <>
      <Typography variant="h3">Settings</Typography>
      <br />
      <Typography variant="h5">Settings Update</Typography>
      <br />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputLabel>Android Version</InputLabel>
          {/* <TextField fullWidth placeholder="Android Version" name="android" value={from.android} onChange={handleFieldChange} /> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>Subscription Discount</InputLabel>
          {/* <TextField fullWidth placeholder="Subscription Discount" name="suscribe_discount" value={from.suscribe_discount} onChange={handleFieldChange} /> */}
        </Grid>

        <Grid item xs={12} sm={12}>
          <Stack direction="row">
            <AnimateButton>
              <Button variant="contained" type="button">
                Submit
              </Button>
            </AnimateButton>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
