import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';

import colors from '../consts/colors';
import { BookContext, BookProps } from '../providers/BookProvider';
import AddCardModalFields from './AddCardModalFields';
import AddCardModalActions from './AddCardModalActions';
import { generateUniqId } from '../utils/utils';

const Container = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: colors.white,
  boxShadow: '0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)',
  borderRadius: 2,
  padding: 24,
  minWidth: 250,
  minHeight: 350,
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
  height: '100%',
  width: '-webkit-fill-available',
  display: 'flex',
  flexDirection: 'column',
}));

const TitleText = styled('div')(() => ({
  color: '#4f4f4f',
  fontSize: 22,
  fontWeight: 300,
  textAlign: 'center',
}));

interface Props {
  open: boolean;
  onClose?: () => void;
}
const AddCardModal: React.FC<Props> = ({ open, onClose = () => {} }) => {
  const { selectedBook, setSelectedBook, books, setBooks, setShouldShowAddBookModal } = React.useContext<BookProps>(BookContext);

  const methods = useForm({
    defaultValues: {
      title: selectedBook?.title || '',
      authors: selectedBook?.authors || '',
      year: selectedBook?.year || null,
      img: selectedBook?.img || 'https://image.ibb.co/eA7QJ9/book_Cover.png',
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
      console.log('Failed', e);
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
            <AddCardModalFields />
            <AddCardModalActions />
          </Container>
        </Form>
      </FormProvider>
    </Modal>
  );
};

export default AddCardModal;
