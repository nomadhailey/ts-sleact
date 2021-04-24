import React from 'react';
import { Link } from 'react-router-dom';
import { Container, InputBox, StyledForm, StyledButton, LinkToLoginContainer } from './styles';

const SignUp = () => {
  return (
    <Container>
      <h1>Sleact</h1>
      <StyledForm>
        <InputBox>
          <label htmlFor="email">이메일 주소</label>
          <input id="email" name="email" />
        </InputBox>
        <InputBox>
          <label htmlFor="nickname">닉네임</label>
          <input id="nickname" name="nickname" />
        </InputBox>
        <InputBox>
          <label htmlFor="password">비밀번호</label>
          <input id="password" name="password" />
        </InputBox>
        <InputBox>
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <input id="passwordCheck" name="passwordCheck" />
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
