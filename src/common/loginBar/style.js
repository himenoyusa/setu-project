import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  padding: 10px 10px;
  width: 100%;
  height: 60px;
  background-color: rgb(250, 250, 250);

  & #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  & #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  & #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
`;

export const H3 = styled.div`
  float: left;
  width: 180px;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 2px solid palevioletred;
  font-size: 18px;
  text-align: center;
  color: palevioletred;
`;
