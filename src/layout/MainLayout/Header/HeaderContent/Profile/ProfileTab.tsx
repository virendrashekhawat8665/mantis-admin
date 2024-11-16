import { useState } from 'react';

// material-ui
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import { EditOutlined, LogoutOutlined } from '@ant-design/icons';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //
// import { dispatch } from 'store';
import { useNavigate } from 'react-router-dom';
// import { actions } from 'sections/auth/redux/slice';
// import { actions } from 'sections/apps/profiles/account/redux/slice';
const ProfileTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    setSelectedIndex(index);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  const navigate = useNavigate();
  const RoleUserEdit = (row: any) => {
    // dispatch(actions.userEdit(row));
    // navigate(`/offer/add-new-product/${id}`)
    navigate(`/apps/profiles/account/password`);
  };
  return (
    // <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
    //   <ListItemButton selected={selectedIndex === 0} onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 0)}>
    //     <ListItemIcon>
    //       <EditOutlined />
    //     </ListItemIcon>
    //     <ListItemText primary="Edit Profile" />
    //   </ListItemButton>
    //   <ListItemButton selected={selectedIndex === 1} onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 1)}>
    //     <ListItemIcon>
    //       <UserOutlined />
    //     </ListItemIcon>
    //     <ListItemText primary="View Profile" />
    //   </ListItemButton>

    //   <ListItemButton selected={selectedIndex === 3} onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 3)}>
    //     <ListItemIcon>
    //       <ProfileOutlined />
    //     </ListItemIcon>
    //     <ListItemText primary="Social Profile" />
    //   </ListItemButton>
    //   <ListItemButton selected={selectedIndex === 4} onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 4)}>
    //     <ListItemIcon>
    //       <WalletOutlined />
    //     </ListItemIcon>
    //     <ListItemText primary="Billing" />
    //   </ListItemButton>
    //   <ListItemButton selected={selectedIndex === 2} onClick={handleLogout}>
    //     <ListItemIcon>
    //       <LogoutOutlined />
    //     </ListItemIcon>
    //     <ListItemText primary="Logout"  />
    //   </ListItemButton>
    // </List>
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      <ListItemButton selected={selectedIndex === 0} onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 0)}>
        <ListItemIcon>
          <EditOutlined />
        </ListItemIcon>
        <ListItemText primary="Edit Password" onClick={RoleUserEdit} />
      </ListItemButton>
      {/* <ListItemButton selected={selectedIndex === 1} onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 1)}>
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="View Profile" />
      </ListItemButton> */}

      {/* <ListItemButton selected={selectedIndex === 3} onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 3)}>
        <ListItemIcon>
          <ProfileOutlined />
        </ListItemIcon>
        <ListItemText primary="Social Profile" />
      </ListItemButton> */}
      {/* <ListItemButton selected={selectedIndex === 4} onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 4)}>
        <ListItemIcon>
          <WalletOutlined />
        </ListItemIcon>
        <ListItemText primary="Billing" />
      </ListItemButton> */}
      <ListItemButton selected={selectedIndex === 2} onClick={handleLogout}>
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
};

export default ProfileTab;
