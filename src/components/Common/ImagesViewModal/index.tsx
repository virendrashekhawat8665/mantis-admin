import { Grid } from '@mui/material';
import React from 'react';
import { path } from 'utilsNew/Api';
import ModalTemplate from '../ModalTemplate/Index';

interface Props {
  data: string[];
  show: boolean;
  onHide: any;
  title: string;
}

const Index: React.FC<Props> = ({ data, onHide, show, title }) => {
  return (
    <div>
      <ModalTemplate open={show} title={title} handleClose={onHide}>
        <Grid container spacing={2}>
          {data?.map((ele: string, index: number) => {
            return (
              <Grid item xs={6} md={4} lg={3} key={index} mt={2}>
                <img
                  src={`${path()}${ele}`}
                  alt={ele}
                  //@ts-ignore
                  style={imgStyle}
                />
              </Grid>
            );
          })}
        </Grid>
      </ModalTemplate>
    </div>
  );
};

export default Index;
const imgStyle = { width: '100%', height: '100px', objectFit: 'cover', borderRadius: '5px' };
