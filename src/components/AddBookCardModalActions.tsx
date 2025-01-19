import React from 'react';
import { useFormContext } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

import colors from '../consts/colors';
import { BookContext, BookProps } from '../providers/BookProvider';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: 20,
});

const Button = styled(MuiButton, {
  shouldForwardProp: (prop: any) => prop !== 'background',
})(({ background = colors.white }: { background?: string }) => ({
  padding: 5,
  background,
  boxShadow: '0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)',
  borderRadius: 2,
  color: colors.black,
  fontSize: 12,
}));

const AddBookCardModalActions: React.FC = () => {
  const { reset } = useFormContext();
  const { setSelectedBook, setShouldShowAddBookModal } = React.useContext<BookProps>(BookContext);

  const cancelHandler = () => {
    setSelectedBook(null);
    setShouldShowAddBookModal(false);
    reset();
  };
  return (
    <Container>
      <Button onClick={cancelHandler} sx={{ marginRight: 2 }}>
        Cancel
      </Button>
      <Button type="submit" sx={{ background: colors.darkYellow, color: colors.white }}>
        Save
      </Button>
    </Container>
  );
};

export default AddBookCardModalActions;
