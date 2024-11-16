import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, InputAdornment, InputLabel, OutlinedInput, Stack } from '@mui/material';
import IconButton from 'components/@extended/IconButton';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { selectButtonLoading, selectLoginForm } from '../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/slice';
import CustomButton from 'components/Common/CustomButton';

const AuthLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useSelector(selectLoginForm);
  const loading = useSelector(selectButtonLoading);
  const [capsWarning, setCapsWarning] = React.useState(false);
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

  const handleSubmit = () => {
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
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <CustomButton loading={loading} handleClick={handleSubmit} title={'Login'} />
        </Grid>
      </Grid>
    </form>
  );
};

export default AuthLogin;
