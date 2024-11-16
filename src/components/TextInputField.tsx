import { TextField } from '@mui/material';
import React, { useEffect, useRef } from 'react';

interface TextInputProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value: any;
  onChange: any;
  className: string;
  disabled: boolean;
  rows?: number;
}

function TextInputField(props: TextInputProps) {
  // fix mouse scroll
  const textFieldRef = useRef(null);
  const preventNegativeValues = (e: any) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
  useEffect(() => {
    const handleWheel = (e: any) => {
      e.preventDefault();
    };
    //@ts-ignore
    textFieldRef.current?.addEventListener('wheel', handleWheel);

    return () => {
      //@ts-ignore
      textFieldRef.current?.removeEventListener('wheel', handleWheel);
    };
  }, []);
  useEffect(() => {
    window.addEventListener('wheel', function (event: any) {
      event.currentTarget.blur();

      //@ts-ignore
      if (window.document.activeElement.type === 'number') {
        event.preventDefault();
        event.target.blur();
      }
    });
    window.addEventListener('keydown', function (event: any) {
      event.currentTarget.blur();

      if (event.keyCode === 40) {
        event.preventDefault();
        event.target.blur();
      }
    });
    window.addEventListener('mousewheel', function (event: any) {
      //@ts-ignore
      if (window.document.activeElement.type === 'number') {
        event.preventDefault();
        event.target.blur();
      }
    });
  }, []);
  return (
    <>
      <TextField
        fullWidth
        multiline
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
        className={props.className}
        onWheel={(e: any) => e.target.blur()}
        onKeyDown={props.type == 'number' ? preventNegativeValues : undefined}
        rows={props.rows}
      />
    </>
  );
}

export default TextInputField;
