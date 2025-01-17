import React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

import Logo from '../assets/images/Logo.png';
import FilterField from './FilterField';
import { BookContext, BookProps } from '../providers/BookProvider';

const Container = styled('div')({
  width: '100%',
  height: 85,
  background: '#1c2a48',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  boxShadow: `0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)`,
});

const LogoWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Img = styled('img')({
  width: 80,
  height: 70,
});

const LogoText = styled('div')({
  color: '#ffc107',
  fontSize: 26,
  fontWeight: 300,
});

const ActionsWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Button = styled(MuiButton)(() => ({
  padding: 10,
  background: '#ff7043',
  boxShadow: '0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)',
  borderRadius: 2,
  color: 'white',
  fontSize: 18,
  marginLeft: 20,
}));

const Header: React.FC = () => {
  const { setShouldShowAddBookModal } = React.useContext<BookProps>(BookContext);

  const clickHandler = () => setShouldShowAddBookModal(true);
  return (
    <Container>
      <LogoWrapper>
        <Img src={Logo} alt="Logo" />
        <LogoText>Books Collection</LogoText>
      </LogoWrapper>
      <ActionsWrapper>
        <FilterField />
        <Button onClick={clickHandler}>Add Book</Button>
      </ActionsWrapper>
    </Container>
  );
};

export default Header;
