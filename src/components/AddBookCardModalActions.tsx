import React from 'react';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useFormContext } from 'react-hook-form';

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
  boxShadow: colors.buttonBoxShadow,
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
      <Button type="submit" background={colors.darkYellow} sx={{ color: colors.white }}>
        Save
      </Button>
    </Container>
  );
};

export default AddBookCardModalActions;
