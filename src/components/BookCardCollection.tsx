import React from 'react';
import { styled } from '@mui/material/styles';

import BookCard from './BookCard';
import { BookContext, BookProps } from '../providers/BookProvider';

const Container = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const BookCardCollection: React.FC = () => {
  const { filteredBooks } = React.useContext<BookProps>(BookContext);
  return (
    <Container>
      {filteredBooks?.map(book => (
        <BookCard key={book.id} data={book} />
      ))}
    </Container>
  );
};

export default BookCardCollection;
