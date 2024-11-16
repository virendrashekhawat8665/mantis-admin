import {  Typography } from '@mui/material'
import React from 'react'
interface props {
    title: string;
  }
function index(props:props) {
  return (
    <div>
        
    <Typography sx={{ fontSize: '25px', fontWeight: 600, color: '#000' ,my: 2}}>{props.title}</Typography>
    </div>
  )
}

export default index