import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexDirection: 'column',
}));

const AddBookCardModalFields = () => {
  const { control } = useFormContext();

  return (
    <Container>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            fullWidth
            error={!field.value}
            id="title-field"
            label="Title"
            defaultValue=""
            helperText={!field.value ? 'The Title is required.' : null}
            variant="standard"
            {...field}
          />
        )}
      />
      <Controller
        name="authors"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            fullWidth
            error={!field.value}
            id="author-field"
            label="Author"
            defaultValue=""
            helperText={!field.value ? 'The Author is required.' : null}
            variant="standard"
            {...field}
          />
        )}
      />
      <Controller
        name="year"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            fullWidth
            error={!field.value}
            id="year-field"
            label="Year"
            placeholder="yyyy-mm-dd, yyyy"
            defaultValue=""
            helperText={!field.value ? 'The Year is required.' : null}
            variant="standard"
            {...field}
          />
        )}
      />
      <Controller
        name="img"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            fullWidth
            error={!field.value}
            id="img-field"
            label="Img URL"
            defaultValue=""
            helperText={!field.value ? 'The Img URL is required.' : null}
            variant="standard"
            {...field}
          />
        )}
      />
    </Container>
  );
};

export default AddBookCardModalFields;
