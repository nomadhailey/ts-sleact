import useInput from '@hooks/useInputs';
import React, { useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, InputBox, StyledForm, StyledButton, LinkToLoginContainer, Error, Success } from './styles';

const SignUp = () => {
  const [values, handleChange] = useInput({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);
  // {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>} => ChangeEvent
  // {!nickname && <Error>닉네임을 입력해주세요.</Error>} => submitEvent
  // {signUpError && <Error>{signUpError}</Error>} => 서버로부터 받은 에러
  // {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>} => 서버로부터 받은 성공
  return (
    <Container>
      <h1>Sleact</h1>
      <StyledForm onSubmit={handleSubmit}>
        <InputBox>
          <label htmlFor="email">이메일 주소</label>
          <input id="email" name="email" onChange={handleChange} />
        </InputBox>
        <InputBox>
          <label htmlFor="nickname">닉네임</label>
          <input id="nickname" name="nickname" onChange={handleChange} />
        </InputBox>
        <InputBox>
          <label htmlFor="password">비밀번호</label>
          <input id="password" name="password" onChange={handleChange} />
        </InputBox>
        <InputBox>
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <input id="passwordCheck" name="passwordCheck" onChange={handleChange} />
        </InputBox>
        <StyledButton type="submit">회원가입</StyledButton>
      </StyledForm>
      <LinkToLoginContainer>
        <span>이미 회원이신가요?&nbsp;</span>
        <Link to="/login">로그인 하러가기</Link>
      </LinkToLoginContainer>
    </Container>
  );
};

export default SignUp;
