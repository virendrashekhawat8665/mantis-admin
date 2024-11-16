import { useEffect } from 'react';

// types
import { GuardProps } from 'types/auth';
import { useDispatch } from 'react-redux';
import { actions } from 'sections/auth/redux/slice';
import { useNavigate } from 'react-router-dom';
// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }: GuardProps) => {
  const dispatch = useDispatch();
  const isLogin = localStorage.getItem('token');
  const navigate = useNavigate();
  const fetchMe = () => {
    dispatch(actions.doGetProfile({ token: localStorage.getItem('token') as string, callback() {} }));
  };
  useEffect(() => {
    fetchMe();
    return () => {};
  }, []);

  useEffect(() => {
    if (!isLogin) {
      navigate('/login', { replace: true });
    }
  }, []);

  return children;
};

export default AuthGuard;
