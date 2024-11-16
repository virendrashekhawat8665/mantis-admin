import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Box,
  CircularProgress
} from '@mui/material';

import useAuth from 'hooks/useAuth';

import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { selectLoading, selectLoginForm } from '../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/slice';

const AuthLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);
  const [capsWarning, setCapsWarning] = React.useState(false);

  const { isLoggedIn } = useAuth();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const onKeyDown = (keyEvent: any) => {
    if (keyEvent.getModifierState('CapsLock')) {
      setCapsWarning(true);
    } else {
      setCapsWarning(false);
    }
  };
  const form = useSelector(selectLoginForm);
  const loading = useSelector(selectLoading);

  const hendlelogin = () => {
    dispatch(
      actions.doLogin({
        callback: () => {
          navigate('/dashboard/default');
        }
      })
    );
  };
  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    dispatch(actions.updateFormValue({ key: name, value: value }));
    console.log(name, value);
  };
  return (
    <form noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email-login">Email Address</InputLabel>
            <OutlinedInput
              id="email"
              type="email"
              placeholder="Enter email address"
              fullWidth
              name="email"
              value={form.email}
              onChange={handleFieldChange}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="password-login">Password</InputLabel>
            <OutlinedInput
              fullWidth
              color={capsWarning ? 'warning' : 'primary'}
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleFieldChange}
              onKeyDown={onKeyDown}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    color="secondary"
                  >
                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Enter password"
            />
            {capsWarning && (
              <Typography variant="caption" sx={{ color: 'warning.main' }} id="warning-helper-text-password-login">
                Caps lock on!
              </Typography>
            )}
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ mt: -1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                  name="checked"
                  color="primary"
                  size="small"
                />
              }
              label={<Typography variant="h6">Keep me sign in</Typography>}
            />
            <Link variant="h6" component={RouterLink} to={isLoggedIn ? '/auth/forgot-password' : '/forgot-password'} color="text.primary">
              {/* Forgot Password? */}
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <AnimateButton>
            <Button fullWidth size="large" type="button" variant="contained" color="primary" onClick={hendlelogin}>
              {loading ? (
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress sx={{ color: '#fff', width: '15px !important', height: '15px !important', my: 0.5 }} />
                </Box>
              ) : (
                'Login'
              )}
            </Button>
          </AnimateButton>
        </Grid>
        {/* <Grid item xs={12}>
                <Divider>
                  <Typography variant="caption"> Login with</Typography>
                </Divider>
              </Grid>
              <Grid item xs={12}>
                <FirebaseSocial />
              </Grid> */}
      </Grid>
    </form>
  );
};

export default AuthLogin;
