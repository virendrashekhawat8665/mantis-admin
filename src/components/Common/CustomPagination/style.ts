import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  muiPaginationItem: {
    '& .MuiPaginationItem-root': {
      backgroundColor: '#bade97 !important',
      color: '#000 !important',
      borderRadius: '50% !important',
      maxWidth: '32px !important',
      border: 0,
      margin: '0px 6px'
    },
    '& .MuiPaginationItem-root.Mui-selected': {
      backgroundColor: '#52c41a !important',
      color: '#000 !important'
    },
    '& .MuiPagination-ul li:first-child button': {
      color: '#000 !important',
      fontSize: '20px',
      fontWeight: '400 !important'
    },
    '& .MuiPagination-ul li:last-child button': {
      color: '#000 !important',
      fontSize: '20px',
      fontWeight: '400 !important',
      borderRadius: '50% !important'
    }
  }
});
