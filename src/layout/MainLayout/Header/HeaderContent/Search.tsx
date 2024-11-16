// material-ui
import { Box } from '@mui/material';

// assets
// import { SearchOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => (
  <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
    <Box sx={{ display: 'flex', justifyContent: 'start' }}>
      {/* <OutlinedInput
      size="small"
      id="header-search"
      startAdornment={
        <InputAdornment position="start" sx={{ mr: -0.5 }}>
          <SearchOutlined />
        </InputAdornment>
      }
      aria-describedby="header-search-text"
      inputProps={{
        'aria-label': 'weight'
      }}
      placeholder="Ctrl + K"
    /> */}
      {/* <Box sx={{ border:"2px solid #D3D3D3 " , px:2 , py:1 , display:"flex"}}>

    <Box>
      <InputAdornment position="start" sx={{ mt: 1.3 }}>
        <b>
          <ReloadOutlined spin={spin}  onClick={handlechnage} twoToneColor="#eb2f96"/>
        </b>
      </InputAdornment>
    </Box>
    <Box>

    <b>{WalletData}</b>
    </Box>
    
  </Box> */}
    </Box>
  </Box>
);

export default Search;
