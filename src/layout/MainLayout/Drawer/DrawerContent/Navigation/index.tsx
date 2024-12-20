import { useSelector } from 'react-redux';

// material-ui
import { Box, Typography } from '@mui/material';

// types
import { RootStateProps } from 'types/root';

// project import
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

import { initialState } from 'store/reducers/menu';
// import { selectUserData } from 'sections/auth/redux/selector';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  // const userData = useSelector(selectUserData);

  const menu = useSelector((state: RootStateProps) => {
    if (state) {
      return state.menu;
    } else {
      return initialState;
    }
  });
  const { drawerOpen } = menu;

  const navGroups = menuItem().items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: drawerOpen ? 2 : 0, '& > ul:first-of-type': { mt: 0 } }}>{navGroups}</Box>;
};

export default Navigation;
