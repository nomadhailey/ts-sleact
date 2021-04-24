import React, { useCallback, useState } from 'react';

const userInput = () => {
  const [values, setValues] = useState({});
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }, []);
  return [values, handleChange, setValues];
};

export default userInput;
