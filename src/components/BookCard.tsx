import React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

import colors from '../consts/colors';
import { Book } from '../consts/types';
import { BookContext, BookProps } from '../providers/BookProvider';

const Container = styled('div')({
  width: 190,
  height: 290,
  position: 'relative',
  margin: 10,
  overflow: 'hidden',
  border: `'1px solid ${colors.black}'`,
});

const Img = styled('img')({
  height: '100%',
  width: '100%',
  position: 'absolute',
  zIndex: 1,
});

const InfoWrapper = styled('div')({
  height: '100%',
  width: '100%',
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: 'rgba(0, 0, 0, 0.7)',
  padding: 20,
  cursor: 'pointer',
  zIndex: 2,
});

const TextWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const Text = styled('div')({
  color: colors.white,
  textAlign: 'center',
  marginBottom: 8,
  fontWeight: 300,
  fontSize: 16,
});

const Actions = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Button = styled(MuiButton, {
  shouldForwardProp: (prop: any) => prop !== 'background',
})(({ background = colors.grayLight }: { background?: string }) => ({
  padding: 5,
  borderRadius: 2,
  background,
  boxShadow: colors.buttonBoxShadow,
  color: colors.white,
  fontSize: 12,
}));

interface Props {
  data: Book;
}
const BookCard: React.FC<Props> = ({ data }) => {
  const { books, setBooks, setSelectedBook, setShouldShowAddBookModal } = React.useContext<BookProps>(BookContext);
  const [shouldShowInfo, setShouldShowInfo] = React.useState<boolean>(false);

  const editHandler = () => {
    setSelectedBook(data);
    setShouldShowAddBookModal(true);
  };

  const deleteHandler = () => {
    const filteredBooks = books.filter(b => b.id !== data.id);
    setBooks(filteredBooks);
  };

  const mouseEnterHandler = () => setShouldShowInfo(true);

  const mouseLeaveHandler = () => setShouldShowInfo(false);

  return (
    <Container onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <Img src={data.img} alt="BookImg" />
      {shouldShowInfo && (
        <InfoWrapper>
          <TextWrapper>
            <Text sx={{ fontWeight: 700 }}>{data.title}</Text>
            <Text sx={{ fontStyle: 'italic' }}>{data.authors}</Text>
            <Text>{data.year}</Text>
          </TextWrapper>

          <Actions>
            <Button onClick={editHandler}>Edit</Button>
            <Button onClick={deleteHandler} background={colors.red}>
              Delete
            </Button>
          </Actions>
        </InfoWrapper>
      )}
    </Container>
  );
};

export default BookCard;
