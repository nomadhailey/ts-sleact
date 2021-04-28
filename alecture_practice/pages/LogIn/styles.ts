import styled from '@emotion/styled';

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 50px 0;
    font-size: 48px;
  }
`;

export const StyledForm = styled.form`
  margin: 0 auto;
  width: 400px;
  max-width: 400px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    font-size: 15px;
    font-weight: 700;
  }
  input {
    padding: 10px;
  }
`;
export const StyledButton = styled.button`
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: rgb(255, 255, 255);
  background-color: rgb(74, 21, 75);
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0px 16px 3px;
  transition: all 80ms linear 0s;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px;
`;

export const LinkContainer = styled.div`
  margin: 0 auto;
  width: 400px;
  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;

export const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
`;
