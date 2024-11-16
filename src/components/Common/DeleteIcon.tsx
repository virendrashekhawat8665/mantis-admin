import { DeleteOutlined } from '@ant-design/icons';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import React from 'react';

interface CommonProps {
  handleDelete: (index: number) => void | undefined;
  index: number;
}

const DeleteIcon: React.FC<CommonProps> = ({ handleDelete, index }) => {
  const theme = useTheme();
  return (
    <>
      <Tooltip title="Delete">
        <IconButton onClick={() => handleDelete(index)} sx={{ border: '1px solid gray' }}>
          <DeleteOutlined twoToneColor={theme.palette.error.dark} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default DeleteIcon;
