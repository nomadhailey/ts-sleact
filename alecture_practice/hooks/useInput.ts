import React, { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

type ReturnTypes<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T>(initialState: T): ReturnTypes<T> => {
  const [values, setValues] = useState(initialState);
  console.log('values', values);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      // const { email, nickname, password, passwordCheck } = values;
      // console.log('name', name);
      // if (name === 'passwordCheck') {
      //   if (password.value === '패스워드') console.log('패스워드다');
      // }
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values],
  );
  return [values, handleChange, setValues];
};

export default useInput;
