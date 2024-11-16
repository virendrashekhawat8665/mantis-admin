import { useEffect, useRef } from 'react';
import { useTheme, styled, Theme } from '@mui/material/styles';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
// import { History as HistoryProps } from 'types/chat';
// import { UserProfile } from 'types/user-profile';
import ChatHistory from 'sections/apps/chat/ChatHistory';
import UserAvatar from 'sections/apps/chat/UserAvatar';
// import UserDetails from 'sections/apps/chat/UserDetails';

// import { getUser, getUserChats, insertChat } from 'store/reducers/chat';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import SimpleBar from 'components/third-party/SimpleBar';
// import { openSnackbar } from 'store/reducers/snackbar';
import { SendOutlined } from '@ant-design/icons';


const drawerWidth = 320;

const Main = styled('main', { shouldForwardProp: (prop: string) => prop !== 'open' })(
  ({ theme, open }: { theme: Theme; open: boolean }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter
    }),
    marginLeft: `-${drawerWidth}px`,
    [theme.breakpoints.down('lg')]: {
      paddingLeft: 0,
      marginLeft: 0
    },
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shorter
      }),
      marginLeft: 0
    })
  })
);
const Chat = () => {
  // const params: any = useParams();
  const theme = useTheme();
  // const dispatch = useDispatch();
  // const chatList = useSelector(selectChatList);
  // const chatForm = useSelector(selectChatForm);
  // const form = useSelector(selectSendChatData);
  // const userData = useSelector(selectUserData);
  const textInput = useRef(null);
  const handleOnSend = () => {
    // dispatch(
    //   actions.doSendChat({
    //     callback: () => {
    //       dispatch(actions.clearForm());
    //       dispatch(
    //         actions.doGetChatList({
    //           userId: params.id,
    //           childId: params.mid,
    //           callback: () => {}
    //         })
    //       );
    //       dispatch(actions.doGetUserData());
    //     }
    //   })
    // );
  };

  const handleFieldSelectChange = (evt: any) => {
    // const { name, value } = evt.target;
    // dispatch(actions.updateSendFormValue({ key: name, value: value }));
    // dispatch(actions.updateSendFormValue({ key: "userId", value: params.id }));
    // dispatch(actions.updateSendFormValue({ key: "childId", value: params.mid }));
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLDivElement> | undefined) => {
    if (event?.key !== 'Enter') {
      return;
    }
    handleOnSend();
  };

  useEffect(() => {
    // dispatch(
    //   actions.doGetChatList({
    //     userId: params.id,
    //     childId: params.mid,
    //     callback: () => {}
    //   })
    // );
    return () => {};
  }, []);
  useEffect(() => {
    // dispatch(actions.doGetUserData());
    return () => {};
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Main theme={theme} open={false} style={{ marginLeft: 0 }}>
        <Grid container>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => {
                window.close();
              }}
              sx={{ mb: 2 }}
            >
              Back
            </Button>
            <MainCard
              content={false}
              sx={{
                bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50',
                pt: 2,
                pl: 2
                // borderRadius: emailDetails ? '0' : '0 4px 4px 0'
              }}
            >
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sx={{ bgcolor: theme.palette.background.paper, pr: 2, pb: 2, borderBottom: `1px solid ${theme.palette.divider}` }}
                >
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <UserAvatar profilePic={'asdd'} child={'chatForm?.child'} />
                        <Stack>
                          <Typography variant="subtitle1">{'userData?.name'}</Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <SimpleBar
                    sx={{
                      overflowX: 'hidden',
                      height: 'calc(100vh - 410px)',
                      minHeight: 420
                    }}
                  >
                    <Box sx={{ pl: 1, pr: 3 }}>
                      <ChatHistory theme={theme} data={[]} />
                    </Box>
                  </SimpleBar>
                </Grid>
                <Grid item xs={12} sx={{ mt: 3, bgcolor: theme.palette.background.paper, borderTop: `1px solid ${theme.palette.divider}` }}>
                  <Stack direction="row">
                    <TextField
                      inputRef={textInput}
                      fullWidth
                      multiline
                      name="message"
                      placeholder="Your Message..."
                      value={'form?.message'}
                      onChange={handleFieldSelectChange}
                      onKeyPress={handleEnter}
                      variant="standard"
                      sx={{
                        pr: 2,
                        '& .MuiInput-root:before': { borderBottomColor: theme.palette.divider }
                      }}
                    />
                    <IconButton color="primary" onClick={handleOnSend} size="large" sx={{ mr: 1.5 }}>
                      <SendOutlined />
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          {/* {emailDetails && !matchDownMD && (
            <Grid item xs={12} md={4} xl={3}>
              <UserDetails user={user} onClose={handleUserChange} />
            </Grid>
          )}
          {matchDownMD && (
            <Dialog onClose={handleUserChange} open={false} scroll="body">
              <UserDetails user={user} />
            </Dialog>
          )} */}
        </Grid>
      </Main>
    </Box>
  );
};

export default Chat;
