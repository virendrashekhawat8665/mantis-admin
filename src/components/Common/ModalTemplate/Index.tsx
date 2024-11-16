import { Box, IconButton, Modal, Typography, styled } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface Props {
  title: string;
  open: any;
  handleClose: any;
  children?: any;
  size?: string;
  iconShow?: boolean;
  width?: any;
  className?: any;
}

const ModalTemplate: React.FC<Props> = (props) => {
  return (
    <>
      {props.title.length > 0 && (
        <Box>
          <Modal open={props?.open}>
            <ModalBox
              className={props?.className}
              sx={props?.size == 'small' ? { width: 480 } : props?.width ? { width: props?.width ? props?.width : 'initial' } : undefined}
            >
              <TitleBox >
                <TitleTypo>{props?.title}</TitleTypo>
                <IconButton sx={{ p: 0, minHeight: 'auto' }} onClick={props?.handleClose}>
                  <HighlightOffIcon style={{ width: 28, height: 28 }} />
                </IconButton>
              </TitleBox>
              {props?.children}
            </ModalBox>
          </Modal>
        </Box>
      )}
    </>
  );
};

export default ModalTemplate;

const TitleBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 0,
  paddingBottom: 24
});
const TitleTypo = styled(Typography)({
  fontSize: 20,
  fontWeight: 500,
  color: '#000',
  lineHeight: '24.2px',
  overflowWrap: 'anywhere'
});
const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  backgroundColor: '#fff',
  boxShadow: '0px 12px 24px 0px rgba(0, 0, 0, 0.25)',
  padding: 40,
  borderRadius: 12,
  outline: 0,

  [theme.breakpoints.down('sm')]: {
    width: '90%',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, -100%)',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    padding: '24px 20px'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '70%',
    padding: '24px 20px'
  }
}));
