import { Button } from '@mui/material';
import React from 'react';
interface props {
  title: string;
  onClick: any;
  highligtColor: any;
}
function ShowButton(props: props) {
  return (
    <div>
      <Button variant="outlined" color={props.highligtColor ? 'primary' : 'secondary'} onClick={props.onClick} sx={{ mx: 2 }}>
        
        {props.title}
      </Button>
    </div>
  );
}

export default ShowButton;
