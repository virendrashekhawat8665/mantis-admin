import { Box, CircularProgress, useTheme } from '@mui/material';

type Props = {
  sx?: any;
  height?: string;
  weight?: string;
  color?: string;
};

function Index({ sx, height, weight, color }: Props) {
  const theme = useTheme();
  return (
    <div>
      <Box sx={[IsLoadingBox, sx]}>
        <CircularProgress
          sx={{
            width: height ? height : '25px !important',
            height: weight ? weight : '25px !important',
            color: color ? color : theme.palette.primary.dark
          }}
        />
      </Box>
    </div>
  );
}

export default Index;
const IsLoadingBox = {
  display: 'flex',
  justifyContent: 'center',
  // minHeight: '200px',
  textAlign: 'center',
  alignItems: 'center'
};
