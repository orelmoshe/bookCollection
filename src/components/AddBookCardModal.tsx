import React from 'react';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import { FormProvider, useForm } from 'react-hook-form';

import colors from '../consts/colors';
import { generateUniqId } from '../utils/utils';
import AddBookCardModalFields from './AddBookCardModalFields';
import AddBookCardModalActions from './AddBookCardModalActions';
import { BookContext, BookProps } from '../providers/BookProvider';

const Container = styled('div')(({ theme }) => ({
  minWidth: 250,
  minHeight: 350,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: 24,
  borderRadius: 2,
  background: colors.white,
  boxShadow: colors.modalBoxShadow,
  [theme.breakpoints.up('sm')]: {
    minWidth: 400,
  },
  [theme.breakpoints.up('md')]: {
    minWidth: 500,
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: 700,
  },
}));

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const TitleText = styled('div')(() => ({
  color: colors.grayDark,
  textAlign: 'center',
  fontSize: 22,
  fontWeight: 300,
}));

const defualtBookImg = 'https://image.ibb.co/eA7QJ9/book_Cover.png';
interface Props {
  open: boolean;
  onClose?: () => void;
}
const AddBookCardModal: React.FC<Props> = ({ open, onClose = () => {} }) => {
  const { selectedBook, setSelectedBook, books, setBooks, setShouldShowAddBookModal } = React.useContext<BookProps>(BookContext);

  const methods = useForm({
    defaultValues: {
      title: selectedBook?.title || '',
      authors: selectedBook?.authors || '',
      year: selectedBook?.year || null,
      img: selectedBook?.img || defualtBookImg,
    },
  });

  const isEdit = !!selectedBook;

  const onSubmit = async (data: any) => {
    try {
      if (isEdit) {
        const newBooks = books.map(b => (b.id === selectedBook.id ? { ...selectedBook, ...data } : b));
        setBooks(newBooks);
      } else {
        const newBook = {
          id: generateUniqId(),
          ...data,
        };
        setBooks(prev => prev.concat(newBook));
      }
    } catch (e) {
      console.log('Failed when try to sumbit form, Error: ', e);
    } finally {
      methods.reset();
      setShouldShowAddBookModal(false);
      setSelectedBook(null);
    }
  };

  const titleText = `${isEdit ? 'Edit' : 'Add New'} Book`;
  return (
    <Modal open={open} onClose={onClose}>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Container>
            <TitleText>{titleText}</TitleText>
            <AddBookCardModalFields />
            <AddBookCardModalActions />
          </Container>
        </Form>
      </FormProvider>
    </Modal>
  );
};

export default AddBookCardModal;
