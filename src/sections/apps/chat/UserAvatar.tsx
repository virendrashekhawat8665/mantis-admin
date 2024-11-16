// material-ui
// import { Badge } from '@mui/material';

// project imports
// import AvatarStatus from './AvatarStatus';
// import { UserProfile } from 'types/user-profile';
import Avatar from 'components/@extended/Avatar';
import { path } from 'utilsNew/Api';

// assets
// const avatarImage = require.context(path(), true);

// ==============================|| CHAT USER AVATAR WITH STATUS ICON ||============================== //

interface UserAvatarProps {
  profilePic: string;
  child: string;
}

const UserAvatar = (props: UserAvatarProps) => (
  // <Badge
  //   overlap="circular"
  //   badgeContent={<AvatarStatus status={user.online_status!} />}
  //   anchorOrigin={{
  //     vertical: 'top',
  //     horizontal: 'right'
  //   }}
  //   sx={{ '& .MuiBox-root': { width: 6, height: 6 }, padding: 0, minWidth: 12, '& svg': { background: '#fff', borderRadius: '50%' } }}
  // >
    <Avatar alt={props.child} src={props.profilePic && path()+(`./${props.profilePic}`)} />
  // </Badge>
);

export default UserAvatar;
