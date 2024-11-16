import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Box, Grid, InputAdornment, InputLabel, List, ListItem, ListItemText, OutlinedInput, Stack, Typography } from '@mui/material';
import IconButton from 'components/@extended/IconButton';
import FooterButton from 'components/Common/FooterButton';
import MainCard from 'components/MainCard';
import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectButtonLoading, selectUpdatePasswordForm } from 'sections/auth/redux/selector';
import { actions } from 'sections/auth/redux/slice';

const TabPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useSelector(selectUpdatePasswordForm);
  const loading = useSelector(selectButtonLoading);

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    dispatch(actions.updatePasswordFormValue({ key: name, value: value }));
  };
  const handleSubmit = () => {
    dispatch(
      actions.doUpdatePassword({
        callback: (token: string) => {
          dispatch(actions.clearPasswordFrom());
          dispatch(actions.doGetProfile({ token: token, callback() {} }));
        }
      })
    );
  };
  const handleBack = () => {
    dispatch(actions.clearPasswordFrom());
    navigate('/dashboard/default');
  };
  return (
    <MainCard title="Change Password">
      <form noValidate>
        <Grid container spacing={3}>
          <Grid item container spacing={3} xs={12} sm={6}>
            <Grid item xs={12}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="password-password">New Password</InputLabel>
                <OutlinedInput
                  id="password"
                  placeholder="Enter password"
                  type={showNewPassword ? 'text' : 'password'}
                  value={form.password}
                  name="password"
                  onChange={handleFieldChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowNewPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                        color="secondary"
                      >
                        {showNewPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                      </IconButton>
                    </InputAdornment>
                  }
                  inputProps={{}}
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="password-confirm">Confirm Password</InputLabel>
                <OutlinedInput
                  id="password-confirm"
                  placeholder="Enter Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={form.confirmPassword}
                  name="confirmPassword"
                  onChange={handleFieldChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                        color="secondary"
                      >
                        {showConfirmPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                      </IconButton>
                    </InputAdornment>
                  }
                  inputProps={{}}
                />
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: { xs: 0, sm: 2, md: 4, lg: 5 } }}>
              <Typography variant="h5">New Password must contain:</Typography>
              <List sx={{ p: 0, mt: 1 }}>
                <ListItem divider>
                  <ListItemText primary="At least 8 characters" />
                </ListItem>
                <ListItem divider>
                  <ListItemText primary="At least 1 lower letter (a-z)" />
                </ListItem>
                <ListItem divider>
                  <ListItemText primary="At least 1 uppercase letter (A-Z)" />
                </ListItem>
                <ListItem divider>
                  <ListItemText primary="At least 1 number (0-9)" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="At least 1 special characters" />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <FooterButton handleCancel={handleBack} handleSubmit={handleSubmit} loading={loading} />
        </Grid>
      </form>
    </MainCard>
  );
};

export default TabPassword;
