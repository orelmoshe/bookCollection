import React from 'react';
import { styled } from '@mui/material/styles';
import FormTextField from '../styledComponents/FormTextField';

const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexDirection: 'column',
}));

const AddBookCardModalFields = () => {
  return (
    <Container>
      <FormTextField name="title" label="Title" errorMsg="The Title is required." />
      <FormTextField name="authors" label="Authors" errorMsg="The Authors is required." />
      <FormTextField name="year" label="Year" errorMsg="The Year is required." />
      <FormTextField name="img" label="Img URL" errorMsg="The Img URL is required." />
    </Container>
  );
};

export default AddBookCardModalFields;
