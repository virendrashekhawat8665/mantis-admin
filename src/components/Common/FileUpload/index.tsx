import { CameraOutlined, UploadOutlined } from '@ant-design/icons';
import { Box, Button, FormLabel, Grid, IconButton, InputLabel, LinearProgress, Stack, styled, Typography, useTheme } from '@mui/material';
// import { actions } from 'pages/brands/slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { path } from 'utilsNew/Api';

interface Props {
  handleUploadImage?: any;
  name?: string;
  file: string;
  title: string;
}

const Index: React.FC<Props> = ({ file, handleUploadImage, name, title }) => {
  const theme = useTheme();

  const [uploadFiles, setUploadFiles] = useState<any[]>([]);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  const handleFileChange = async (evt: any) => {
    const file: File[] = evt.target.files;
    if (file && file?.length > 0) {
      const fileList = uploadFiles;

      for (let index = 0; index < file.length; index++) {
        const element = file[index];
        fileList.push({
          name: element.name,
          url: '',
          prefix: '',
          data: element,
          inprogress: false,
          completed: false
        });
      }
      setUploadFiles(fileList);
      for (let index = 0; index < fileList.length; index++) {
        const element = fileList[index];
        if (!element.completed && !element.inprogress) {
          const data = await getSignedUrl(element.name);
          fileList[index].url = data.url;
          fileList[index].prefix = data.prefix;
        }
      }
      setUploadFiles(fileList);
      for (let index = 0; index < fileList.length; index++) {
        const element = fileList[index];
        if (!element.completed && !element.inprogress) {
          fileList[index].inprogress = true;
          setUploadFiles(fileList);
          setProgress(0);
          await uploadFile(element.url, element.data);
          setProgress(0);
          fileList[index].completed = true;
          fileList[index].inprogress = false;
          setUploadFiles(fileList);

          handleUploadImage(fileList[index].prefix);
        }
      }
    }
  };
  async function getSignedUrl(fileName: string): Promise<{ url: string; prefix: string }> {
    return new Promise((resolve, reject) => {
      try {
        // dispatch(
        //   actions.getSignedUrl({
        //     fileName: fileName,
        //     callback: (url: string, prefix: string) => {
        //       console.log('sss', { url, prefix });
        //       resolve({ url, prefix });
        //     }
        //   })
        // );
      } catch (error) {
        console.error('Error:', error);
        reject(error);
      }
    });
  }
  async function uploadFile(s3SignedUrl: string, file: File): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const xhr = new XMLHttpRequest();

        xhr.open('PUT', s3SignedUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/octet-stream');
        xhr.upload.onprogress = (evt) => {
          console.log('onprogress');

          if (evt.lengthComputable) {
            console.log('onprogress1');
            var percentComplete = (evt.loaded / evt.total) * 100;
            setProgress(percentComplete);
          }
        };
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('File uploaded successfully');
              resolve();
            } else {
              console.error('Failed to upload file to S3');
              reject(new Error('Failed to upload file to S3'));
            }
          }
        };

        xhr.send(file);
      } catch (error) {
        console.error('Error:', error);
        reject(error);
      }
    });
  }
  return (
    <>
      <Grid container direction="row" >
        <InputLabel id={name ? name : 'title'}>{title}</InputLabel>
        <Grid item xs={12}>
          <FormLabel
            htmlFor={name ? name : 'singleFile'}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <Button variant="outlined" color="primary" startIcon={<UploadOutlined />} sx={{ mt: 1, textTransform: 'none' }}>
              Click to Upload
            </Button>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .75)' : 'rgba(0,0,0,.65)',
                width: '100%',
                height: '100%',
                opacity: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Stack spacing={0.5} alignItems="center">
                <CameraOutlined style={{ color: theme.palette.secondary.lighter, fontSize: '2rem' }} />
                <Typography sx={{ color: 'secondary.lighter' }}>Upload</Typography>
              </Stack>
            </Box>
          </FormLabel>
          <input
            name="image"
            placeholder="Image"
            type="file"
            accept=".jpg,.png,.jpeg"
            id={name ? name : 'singleFile'}
            onChange={handleFileChange}
            draggable="true"
            style={{ visibility: 'hidden' }}
          />
          {uploadFiles.filter((x: any) => x.inprogress).length > 0 && (
            <Box>
              <UploadingFile>{uploadFiles.filter((x: any) => x.inprogress)[0].name}</UploadingFile>
              <LinearProgress variant="determinate" value={progress} sx={linearProgressStyle} />
            </Box>
          )}
          <Grid item xs={6} md={4} lg={1.5} mt={3} sx={{ position: 'relative' }}>
            <>
              {file.length > 0 && (
                <>
                  {file.includes('.pdf') ? (
                    <IconButton
                      color="primary"
                      sx={imgStyle}
                      onClick={() => {
                        window.open(path() + file);
                      }}
                    >
                      <img
                        src={`${path()}${file}`}
                        alt={file}
                        //@ts-ignore
                        style={imgStyle}
                      />
                    </IconButton>
                  ) : (
                    <img
                      src={`${path()}${file}`}
                      alt={file}
                      //@ts-ignore
                      style={imgStyle}
                    />
                  )}
                </>
              )}
            </>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
const imgStyle = { width: '100%', height: '75px', objectFit: 'cover', borderRadius: '5px' };
const UploadingFile = styled(Box)(({}) => ({
  fontSize: 12,
  fontWeight: 400,
  color: '#000',
  padding: '5px 7.8px',
  border: '0.5px solid #E3E3E3',
  borderRadius: 5
}));
const linearProgressStyle = {
  marginTop: '-2.5px',
  borderRadius: '4px',
  color: '#1068ED',
  backgroundColor: 'transparent',
  '& .MuiLinearProgress-bar': {
    borderRadius: '4px'
  }
};
