import useInput from '@hooks/useInputs';
import axios from 'axios';
import React, { FormEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, InputBox, StyledForm, StyledButton, LinkContainer, Error, Success } from './styles';

const Login = () => {
  const [values, handleChange] = useInput({
    email: '',
    password: '',
  });
  const { email, password } = values;
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrorMsg('');
      axios
        .post('/api/users/login', {
          email,
          password,
        })
        .then((response) => console.log('response', response))
        .catch((error) => {
          console.log('error.response.data', error.response.data);
          setErrorMsg(error.response.data);
        });
    },
    [email, password],
  );

  return (
    <Container>
      <h1>Sleact</h1>
      <StyledForm onSubmit={handleSubmit}>
        <InputBox>
          <label htmlFor="email">이메일 주소</label>
          <input id="email" name="email" onChange={handleChange} />
        </InputBox>
        <InputBox>
          <label htmlFor="password">비밀번호</label>
          <input id="password" name="password" onChange={handleChange} />
        </InputBox>
        <Error>{errorMsg}</Error>
        <StyledButton type="submit">로그인</StyledButton>
      </StyledForm>
      <LinkContainer>
        <span>아직 회원이 아니신가요?&nbsp;</span>
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </Container>
  );
};

export default Login;
