import React from "react";
import Gallery from "./gallery/Gallery";
import PictureBox from "./pictureBox/PictureBox";
import NavBar from "./navBar/NavBar";
import LoginBar from "./loginBar/LoginBar";
import Paginate from "./paginate/Paginate";

export default function App() {
  return (
    <div className="App">
      <LoginBar />

      <div id="content" className="container">
        <PictureBox />
        <NavBar />
        <Gallery />
        <Paginate />
      </div>

      <footer>
        <address>
          <a href="https://kanata.moe/">访问主页</a>
        </address>
        <span>
          <a href="mail:876203144@qq.com">联系邮箱</a>
        </span>
        <div>It's the only NEET thing to do</div>
      </footer>
    </div>
  );
}