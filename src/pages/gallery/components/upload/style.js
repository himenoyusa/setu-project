import styled from 'styled-components';

export const Button = styled.button`
  background-color: #1e90ff;
  color: white;
  outline: none;

  padding: 10px 30px 10px 30px;
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

export const Picture = styled.input`
  width: 100;
`;
