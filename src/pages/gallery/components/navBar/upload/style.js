import styled from 'styled-components';

export const Picture = styled.input`
  margin: 10px auto 20px;
  display: block;
  border-radius: 3px;
  cursor: pointer;

  line-height: 30px;
  color: #fff;
  background: lightblue;
`;

export const Form = styled.div`
  text-align: center;
`;

export const Check = styled.span`
  margin-right: 30px;
`;

export const Button = styled.button`
  background-color: #1e90ff;
  color: white;
  outline: none;

  padding: 5px 20px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  border-width: 0;
  border-radius: 3px;
  cursor: pointer;

  -webkit-transition: all linear 0.3s;
  -moz-transition: all linear 0.3s;
  transition: all linear 0.2s;

  &:hover {
    background-color: #66aaff;
  }
`;
