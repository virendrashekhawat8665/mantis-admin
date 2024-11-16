import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { Button, Grid, InputLabel, Stack, TextField } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
// import { selectPromptForm } from 'pages/Catalouge/redux/selector';
// import { actions } from 'pages/Catalouge/redux/slice';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

interface Props {
  id?: string;
}

const SelectForms = (props: Props) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const form = useSelector(selectPromptForm);
  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    // dispatch(actions.updateStoryPromptFormValue({ key: name, value: value }));
    console.log(name, value);
  };
  // const handleClick = () => {
  //   console.log("update check",props.id);
    
  //   if (props.id) {
  //     dispatch(
  //       actions.doUpdateStoryPrompt({
  //         callback: () => {
  //           dispatch(actions.clearPromptForm());
  //           navigate(-1);
  //         }
  //       })
  //     );
  //   } else {
  //     dispatch(
  //       actions.NewStoryPromptAdded({
  //         callback: () => {
  //           dispatch(actions.clearPromptForm());
  //           navigate(-1);
  //         }
  //       })
  //     );
  //   }
  // };
  // useEffect(() => {
  //   if (props.id) {
  //     dispatch(actions.getPromptDataForEdit(props.id));
  //     console.log('prompts', props.id);
  //   }

  //   return () => {};
  // }, [props.id]);

  return (
    <MainCard title="Story Prompt">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="age">Story Prompt</InputLabel>
              <TextField
                fullWidth
                id="title"
                name="title"
                placeholder="Enter Story Prompt"
                // value={form.title}
                onChange={handleFieldChange}
              
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button variant="contained" type="button" onClick={undefined}>
                  Submit
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default SelectForms;
