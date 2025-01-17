import React from 'react';
import { styled } from '@mui/material/styles';
import MuiTextField from '@mui/material/TextField';

import colors from '../consts/colors';

const StyledTextField = styled(MuiTextField)(({ inputrootprops }: any) => ({
  '& .MuiOutlinedInput-root': {
    height: 40,
    background: colors.nero,
    borderRadius: 50,
    fontSize: 18,
    color: colors.gray,
    fontWeight: 700,
    '& fieldset': {
      // border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
    ...inputrootprops,
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: 0,
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
  '& input[type=number]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
}));

const TextField: React.FC = React.forwardRef((props: any, ref: any) => {
  return (
    <StyledTextField
      id="outlined-basic"
      label={props.label || ''}
      InputLabelProps={{
        shrink: true,
        style: {
          color: 'white',
          fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
          fontWeight: 600,
          top: -10,
          fontSize: 20,
        },
      }}
      variant="outlined"
      inputRef={ref}
      {...props}
    />
  );
});

export default TextField;
