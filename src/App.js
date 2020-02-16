import React from 'react';
import 'antd/dist/antd.css';
import Gallery from './gallery/Gallery';
import PictureBox from './pictureBox/PictureBox';
import LoginBar from './loginBar/LoginBar';
import Footer from './footer/Footer';

export default function App() {
  return (
    <>
      <LoginBar />
      <PictureBox />
      <Gallery />
      {Footer()}
    </>
  );
}
