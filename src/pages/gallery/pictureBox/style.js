import styled from 'styled-components';

export const Box = styled.div`
  max-width: 100%;
  min-height: 480px;
  height: 90vmin;
  overflow: hidden;
  background-color: rgb(250, 250, 250);

  & img {
    margin: 0 auto;
    height: 90vmin;
  }
`;
