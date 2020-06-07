import styled from 'styled-components';
import bg from 'images/bg.jpg';

export const Content = styled.div`
  margin: 24px auto 50px;
  width: 972px;
  background-image: url(${bg});
`;

export const PictureWrapper = styled.div`
  @media screen and (orientation: landscape) {
    min-height: 480px;
    max-height: 100vh;
  }
  @media screen and (orientation: portrait) {
    min-height: 55vh;
    max-height: 100vh;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  & img {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    object-fit: contain;
  }
`;

export const Block = styled.div`
  padding: 32px 16px 50px;
  color: rgb(173, 173, 173);
  background-color: rgb(250, 250, 250);

  & .titleWrapper {
    margin-bottom: 8px;
    color: rgb(31, 31, 31);
    font-size: 20px;
    line-height: 24px;
  }

  & .totalScore {
    padding: 1px 20px;
    border: 1px solid #f50;
    border-radius: 4px;
    background-color: rgba(255, 240, 240, 0.7);
    color: #f50;
  }

  & .tagStyle {
    margin-right: 12px;
    display: inline;
    font-size: 14px;
    color: rgb(61, 118, 153);
  }

  & .newScore {
    padding-top: 10px;
    text-align: center;
    & .slider {
      display: inline-block;
      margin: 5px 20px;
      width: 80%;
    }
  }

  & .foot {
    margin-top: 16px;
  }
`;
