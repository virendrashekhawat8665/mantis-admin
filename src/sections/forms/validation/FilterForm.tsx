// import { useDispatch } from 'react-redux';

import {
  Button,
  Grid,
  InputLabel,
  Stack,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // IconButton,
  // Tooltip,
  Paper,
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent
} from '@mui/material';
// import { DeleteTwoTone } from '@ant-design/icons';
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
// import { actions } from 'pages/Filter/redux/slice';
// import { useNavigate } from 'react-router-dom';
// import { SelectFrom } from 'pages/Filter/redux/selector';
import { useTheme } from '@mui/material/styles';

const SelectForms = () => {
  // const theme = useTheme();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const form = useSelector(SelectFrom);
  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    // dispatch(actions.updateFormValue({ key: name, value: value }));
    console.log(name, value);
  };
  // const handleClick = () => {
  //   if (form.id) {
  //     dispatch(
  //       actions.doStudentUpdate({
  //         callback: () => {
  //           dispatch(actions.clearFrom());
  //           navigate('/filter/filterlist');
  //         }
  //       })
  //     );
  //   } else {
  //     dispatch(
  //       actions.doAdd({
  //         callback: () => {
  //           dispatch(actions.clearFrom());
  //           navigate('/filter/filterlist');
  //         }
  //       })
  //     );
  //   }
  // };
  const handleSelectChange = (evt: SelectChangeEvent<any>) => {
    const { name, value } = evt.target;
    // dispatch(actions.updateFormValue({ key: name, value: value }));
    console.log(name, value);
  };
  const handleAddItemClick = () => {
    // dispatch(actions.addItemList({ title: form.itemTitle }));
  };
  // const handelDeleteItem = (index: number) => {
  //   // dispatch(actions.deleteItemList(index));
  // };
  return (
    <MainCard title="Filter">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} mb={1}>
            <Stack spacing={1}>
              <InputLabel htmlFor="age">Filter</InputLabel>
              <TextField fullWidth id="title" name="title" placeholder="Enter Filter" value={undefined} onChange={handleFieldChange} />
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} mb={1}>
            <Stack spacing={1}>
              <InputLabel>Is Active</InputLabel>
              <FormControl sx={{ minWidth: '100%' }}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="status"
                  // value={form.status.toString()}
                  // defaultValue={undefined}
                  label="Is Active"
                  onChange={handleSelectChange}
                >
                  <MenuItem value={''}>
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value={'true'} key={'status'}>
                    Active
                  </MenuItem>
                  <MenuItem value={'false'} key={'status'}>
                    InActive
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={6} sm={4} mb={1}>
              <Stack direction="row" display="flex" justifyContent="center">
                <TextField
                  fullWidth
                  id="itemTitle"
                  name="itemTitle"
                  placeholder="Enter Title"
                  // value={form.itemTitle}
                  onChange={handleFieldChange}
                  style={{ marginRight: 50 }}
                />
                <AnimateButton>
                  <Button variant="contained" fullWidth type="button" onClick={handleAddItemClick}>
                    Add
                  </Button>
                </AnimateButton>
              </Stack>
            </Grid>

            <MainCard content={false} title="Points">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" sx={{ pr: 13 }}>
                        Title
                      </TableCell>
                      <TableCell align="left">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {form.items.map((item, index) => {
                      return (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell align="left">{item.title}</TableCell>
                          <TableCell align="left">
                            <Tooltip title="Delete">
                              <IconButton
                                color="error"
                                onClick={() => {
                                  handelDeleteItem(index);
                                }}
                              >
                                <DeleteTwoTone twoToneColor={theme.palette.error.main} />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      );
                    })} */}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* <ReactTable columns={columns} data={form.type == 1 ? storyList : storyCommunityList} /> */}
            </MainCard>
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button variant="contained" type="button">
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
