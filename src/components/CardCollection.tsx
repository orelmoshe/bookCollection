import React from 'react';
import { styled } from '@mui/material/styles';

import Card from './Card';
import { BookContext, BookProps } from '../providers/BookProvider';

const Container = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const CardCollection: React.FC = () => {
  const { filteredBooks } = React.useContext<BookProps>(BookContext);
  return (
    <Container>
      {filteredBooks?.map(book => (
        <Card key={book.id} data={book} />
      ))}
    </Container>
  );
};

export default CardCollection;
