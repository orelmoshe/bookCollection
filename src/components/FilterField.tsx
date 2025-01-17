import React from 'react';
import { styled } from '@mui/material/styles';
import MUITextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import { BookContext, BookProps } from '../providers/BookProvider';
import colors from '../consts/colors';

const TextField = styled(MUITextField)({
  '& .MuiInputBase-root': {
    width: 200,
    fontSize: 18,
    color: colors.white,
    '&::before': {
      borderBottom: '1px solid white',
    },
    '&::after': {
      borderBottom: '1px solid white',
    },
    '&:hover': {
      borderBottom: '1px solid white',
    },
    '& .MuiAutocomplete-clearIndicator': {
      color: colors.white,
    },
    '& .MuiAutocomplete-popupIndicator': {
      color: colors.white,
    },
  },
});

const FilterField: React.FC = () => {
  const { books, setFilteredBooks } = React.useContext<BookProps>(BookContext);

  const changeHandler = (event: any) => {
    const value = event.target.value;
    const filteredBooks = books.filter(b => b?.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredBooks(filteredBooks);
  };
  
  return (
    <TextField
      placeholder="Filter by title"
      variant="standard"
      onChange={changeHandler}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: colors.white }} />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default FilterField;
