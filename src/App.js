import React from 'react';
import 'antd/dist/antd.css';
import Gallery from './gallery/Gallery';
import PictureBox from './pictureBox/PictureBox';
import LoginBar from './loginBar/LoginBar';

export default function App() {
  return (
    <>
      <LoginBar />
      <PictureBox />
      <Gallery />

      <footer>
        <div>
          <a href="https://kanata.moe/">访问主页</a>
        </div>
        <div>
          <a href="mail:876203144@qq.com">联系邮箱</a>
        </div>
        <div>It&apos;s the only NEET thing to do</div>
      </footer>
    </>
  );
}
