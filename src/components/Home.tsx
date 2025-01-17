import React from 'react';
import { styled } from '@mui/material/styles';

import Header from './Header';
import CardCollection from './CardCollection';
import AddCardModal from './AddCardModal';
import { BookContext, BookProps } from '../providers/BookProvider';

const Container = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Home: React.FC = () => {
  const { shouldShowAddBookModal } = React.useContext<BookProps>(BookContext);
  return (
    <Container>
      <Header />
      <CardCollection />
      {shouldShowAddBookModal && <AddCardModal open={shouldShowAddBookModal} />}
    </Container>
  );
};

export default Home;
