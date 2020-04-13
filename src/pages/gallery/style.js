import styled from 'styled-components';

export const GalleryStyle = styled.div`
  margin: 10px auto 50px;
  padding-bottom: 48px;
  width: 972px;
  min-height: 1400px;
  text-align: center;
  background-color: rgb(250, 250, 250);

  & .aplayer {
    width: 98%;
    margin: 5px 1%;
    text-align: left;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 12px;
  background-color: #fff;

  & .card {
    position: relative;
    & img {
      width: 300px;
      height: 300px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      object-fit: contain;
    }

    & p {
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
      color: rgb(250, 250, 250);
      font-size: 24px;
      border-radius: 0 0 0 5px;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;
