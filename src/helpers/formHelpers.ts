import { SelectChangeEvent } from '@mui/material/Select';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export const handleChange = <T>(
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>, 
  setValues: Dispatch<SetStateAction<T>>
): void => {
  const { name, value } = e.target;
  setValues((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};
