import { FormControl, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import {
  align,
  font,
  fontColor,
  fontSize,
  formatBlock,
  hiliteColor,
  horizontalRule,
  image,
  lineHeight,
  link,
  list,
  paragraphStyle,
  table,
  template,
  textStyle
} from 'suneditor/src/plugins';
import Label from '../Label';
import IsLoading from '../IsLoading';

interface CommonProps {
  label: string;
  name: string;
  value: any;
  onChange: (name: string, value: any) => void;
}
const SunEditorComponent: React.FC<CommonProps> = ({ label, name, onChange, value }) => {
  const [showIMage, setShowIMage] = React.useState(true);
  useEffect(() => {
    setShowIMage(true);
    setTimeout(() => {
      setShowIMage(false);
    }, 2000);

    return () => {};
  }, []);
  return (
    <>
      <Label title={label} />
      {showIMage ? (
        <IsLoading />
      ) : (
        <FormControl fullWidth>
          <SunEditor
            // onImageUploadBefore={onImageUploadBefore()}
            setOptions={{
              showPathLabel: false,
              minHeight: '200px',
              maxHeight: '200px',
              placeholder: 'Enter your text here!!!',
              plugins: [
                align,
                font,
                fontColor,
                fontSize,
                formatBlock,
                hiliteColor,
                horizontalRule,
                lineHeight,
                list,
                paragraphStyle,
                table,
                template,
                textStyle,
                image,
                link
              ],
              buttonList: [
                ['undo', 'redo'],
                ['font', 'fontSize', 'formatBlock'],
                ['paragraphStyle'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                ['fontColor', 'hiliteColor'],
                ['removeFormat'],
                [`codeView`],
                [`showBlocks`],
                '/',
                ['outdent', 'indent'],
                ['align', 'horizontalRule', 'list', 'lineHeight'],
                ['table', 'link']
              ],
              formats: ['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
              font: ['Arial']
            }}
            onChange={(value: any) => onChange(name, value)}
            defaultValue={value}
          />
          <Typography variant="caption" color={'secondary'}>
            Image size should be 50KB
          </Typography>
        </FormControl>
      )}
    </>
  );
};

export default SunEditorComponent;
