import { CameraOutlined, DeleteTwoTone, UploadOutlined } from '@ant-design/icons';
import {
  Box,
  Button,
  FormLabel,
  IconButton,
  InputLabel,
  LinearProgress,
  Stack,
  styled,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
// import { actions } from 'pages/product/slice';
// import { IProductImages } from 'pages/product/types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { path } from 'utilsNew/Api';

interface Props {
  handleUploadImage?: any;
  name?: string;
  fileData: [] | any[];
  title: string;
  handleDelete?: (id: string, index: number) => void;
}

const Index: React.FC<Props> = ({ fileData, handleUploadImage, name, title, handleDelete }) => {
  const theme = useTheme();

  const [uploadFiles, setUploadFiles] = useState<any[]>([]);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  const handleFileChange = async (evt: any) => {
    const file: File[] = evt.target.files;
    let mimeType = evt.target.files[0].type;
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
          await uploadFile(element.url, element.data, mimeType);
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
  async function uploadFile(s3SignedUrl: string, file: File, contentType: any): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const xhr = new XMLHttpRequest();

        xhr.open('PUT', s3SignedUrl, true);
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.setRequestHeader('x-amz-acl', 'public-read');
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
      <Stack>
        <InputLabel>{title}</InputLabel>
        <FormLabel
          htmlFor={name ? name : 'multiple'}
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
          id={name ? name : 'multiple'}
          onChange={handleFileChange}
          draggable="true"
          multiple
          style={{ visibility: 'hidden' }}
        />
        {uploadFiles.filter((x: any) => x.inprogress).length > 0 && (
          <Stack my={2}>
            <UploadingFile>{uploadFiles.filter((x: any) => x.inprogress)[0].name}</UploadingFile>
            <LinearProgress variant="determinate" value={progress} sx={linearProgressStyle} />
          </Stack>
        )}
      </Stack>
      <Stack direction="row" rowGap={2} flexWrap="wrap" gap={2}>
        {fileData?.map((ele, index) => {
          return (
            !ele?.isDeleted && (
              <Box position="relative" flexWrap="wrap">
                <img
                  src={`${path()}${ele?.image}`}
                  alt={ele?.image}
                  //@ts-ignore
                  style={imgStyle}
                />
                {ele?.image?.length > 0 && (
                  <Box>
                    {/* @ts-ignore */}
                    <Tooltip sx={iconStyle} title="Delete" onClick={() => handleDelete(ele?._id, index)}>
                      <IconButton>
                        <DeleteTwoTone twoToneColor={theme.palette.primary.main} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                )}
              </Box>
            )
          );
        })}
      </Stack>
    </>
  );
};

export default Index;
const iconStyle = { position: 'absolute', right: 0, bottom: 2 };
const imgStyle = { width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' };
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
