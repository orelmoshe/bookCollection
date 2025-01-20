import React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

import colors from '../consts/colors';
import FilterField from './FilterField';
import Logo from '../assets/images/Logo.png';
import { BookContext, BookProps } from '../providers/BookProvider';

const Container = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  height: 85,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  background: colors.blueDark,
  zIndex: 3,
  boxShadow: `0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)`,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 150,
  },
}));

const LogoWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Img = styled('img')({
  width: 80,
  height: 70,
});

const LogoText = styled('div')({
  color: colors.gold,
  fontSize: 26,
  fontWeight: 300,
});

const ActionsWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Button = styled(MuiButton)(() => ({
  color: colors.white,
  padding: 10,
  fontSize: 18,
  marginLeft: 20,
  borderRadius: 2,
  background: colors.orange,
  boxShadow: colors.buttonBoxShadow,
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
