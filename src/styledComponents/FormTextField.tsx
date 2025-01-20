import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  label: string;
  errorMsg: string;
}
const FormTextField: React.FC<Props> = ({ name, label, errorMsg }) => {
  const {
    control,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{ required: true }}
      render={({ field }) => (
        <TextField
          fullWidth
          error={!field.value && (touchedFields?.[name] || errors?.[name])}
          id={`${name}-field`}
          label={label}
          defaultValue=""
          helperText={!field.value && (touchedFields?.[name] || errors?.[name]) ? errorMsg : null}
          variant="standard"
          {...field}
        />
      )}
    />
  );
};

export default FormTextField;
