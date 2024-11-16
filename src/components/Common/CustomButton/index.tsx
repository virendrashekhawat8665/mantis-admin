import { DownloadOutlined, RightOutlined } from '@ant-design/icons';
import { Box, Button, CircularProgress } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AnimateButton from 'components/@extended/AnimateButton';
import React from 'react';

interface Props {
  loading?: boolean;
  disabled?: boolean;
  handleClick: any;
  title: string;
  sx?: any;
  mainSx?: any;
  loadingSize?: number;
  type?: 'button' | 'submit' | 'reset' | undefined;
  iconColor?: boolean;
  variant?: 'contained' | 'dashed' | 'light' | 'outlined' | 'shadow' | 'text';
  isEndIcon?: boolean;
  isStartIcon?: boolean;
  addIcon?: boolean;
}

const Index: React.FC<Props> = ({
  loading,
  disabled,
  handleClick,
  title,
  sx,
  loadingSize,
  type,
  variant,
  mainSx,
  isStartIcon,
  isEndIcon,
  addIcon
}) => {
  return (
    <Box sx={mainSx}>
      <AnimateButton>
        <Button
          startIcon={isStartIcon ? <DownloadOutlined /> : ''}
          endIcon={addIcon ? <AddBoxIcon sx={{ height: 20, width: 20 }} /> : isEndIcon ? <RightOutlined /> : ''}
          variant={variant ? variant : 'contained'}
          fullWidth
          disabled={disabled ? disabled : loading}
          type={type ? type : 'button'}
          color="primary"
          onClick={handleClick}
          sx={sx}
        >
          {loading ? (
            <CircularProgress
              sx={{
                width: loadingSize ? `${loadingSize}px !important` : '25px !important',
                height: loadingSize ? `${loadingSize}px !important` : '25px !important',
                color: '#fff'
              }}
            />
          ) : (
            <>{title}</>
          )}
        </Button>
      </AnimateButton>
    </Box>
  );
};

export default Index;
