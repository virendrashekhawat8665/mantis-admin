import { Pagination, Stack } from '@mui/material';
import { useStyles } from './style';

interface Props {
  newCount: number;
  pageNo: number;
  handleChange: any;
}

const Index: React.FC<Props> = ({ newCount, pageNo, handleChange }) => {
  const styles = useStyles();
  return (
    <div>
      {newCount >= 1 && (
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <Pagination
            variant="outlined"
            shape="rounded"
            className={styles.muiPaginationItem}
            count={newCount}
            page={pageNo}
            onChange={newCount === 1 ? undefined : handleChange}
          />
        </Stack>
      )}
    </div>
  );
};

export default Index;
