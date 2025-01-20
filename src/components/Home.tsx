import React from 'react';
import { styled } from '@mui/material/styles';

import Header from './Header';
import BookCardCollection from './BookCardCollection';
import AddBookCardModal from './AddBookCardModal';
import { BookContext, BookProps } from '../providers/BookProvider';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const Home: React.FC = () => {
  const { shouldShowAddBookModal } = React.useContext<BookProps>(BookContext);
  return (
    <Container>
      <Header />
      <BookCardCollection />
      {shouldShowAddBookModal && <AddBookCardModal open={shouldShowAddBookModal} />}
    </Container>
  );
};

export default Home;
