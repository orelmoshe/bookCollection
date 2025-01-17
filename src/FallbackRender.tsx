import React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import MuiTypography from '@mui/material/Typography';

const Container = styled('div')(() => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Button = styled(MuiButton)(() => ({
  minWidth: 110,
  height: 40,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  background: '#42a5f5',
  boxShadow: '6px 6px 13px 0 rgba(0,0,0,0.25)',
  borderRadius: 5,
  textTransform: 'none',
  padding: 10,
  '&:hover': {
    background: '#42a5f5',
  },
}));

const ButtonText = styled(MuiTypography)(() => ({
  fontSize: 16,
  color: 'white',
  fontWeight: 400,
}));

const ErrorText = styled(MuiTypography)(() => ({
  fontSize: 14,
  color: 'red',
  fontWeight: 400,
  fontFamily: 'monospace',
  whiteSpaceCollapse: 'preserve',
  textWrap: 'nowrap',
  margin: '1em 0',
}));

interface Props {
  error: any;
}

const FallbackRender: React.FC<Props> = ({ error }) => {
  const refreshPage = () => window.location.reload();
  const OopsImg = `${process.env.PUBLIC_URL}/assets/images/oops.png`;

  return (
    <Container>
      <img src={OopsImg} alt="Oops" />
      <ErrorText>{error?.message}</ErrorText>
      <Button variant="contained" onClick={refreshPage}>
        <ButtonText>Refresh</ButtonText>
      </Button>
    </Container>
  );
};

export default FallbackRender;
