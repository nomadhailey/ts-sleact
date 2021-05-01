import useInput from '@hooks/useInputs';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FormEvent, useCallback, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import useSWR from 'swr';
import { Container, InputBox, StyledForm, StyledButton, LinkContainer, Error, Success } from './styles';

const Login = () => {
  const [values, handleChange] = useInput({
    email: '',
    password: '',
  });
  const { email, password } = values;
  const [errorMsg, setErrorMsg] = useState('');
  // revalidate 함수 : swr을 내가 원할 때 호출 => 로그인 성공 시 호출(network탭에서 'users'가 호출되는 것으로 확인 가능)
  // revalidate vs. mutate
  // revalidate : 서버로 요청 다시 보내서 데이터를 가져옴
  // mutate : 서버에 요청 안 보내고 데이터를 수정
  const { data, error, revalidate, mutate } = useSWR('/api/users', fetcher);
  console.log('data', data);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrorMsg('');
      axios
        .post(
          '/api/users/login',
          {
            email,
            password,
          },
          {
            withCredentials: true,
          },
        )
        .then((response) => {
          // revalidate(); // response.data에 이미 내 정보가 들어있는데 revalidate을 다시 호출해서 서버로부터 내 정보를 다시 가져올 필요 없음 => 따라서 revalidate이 아닌 mutate를 호출
          mutate(response.data, false); // 두번째 인자 : shouldRevalidate => optimistic UI
          console.log('response', response);
        })
        .catch((error) => {
          console.log('error.response.data', error.response.data);
          setErrorMsg(error.response.data);
        });
    },
    [email, password],
  );

  if (data) {
    return <Redirect to="/workspace/channel" />;
  }
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
