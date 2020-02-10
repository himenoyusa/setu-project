import React from 'react';
//import logo from './favicon.png';
import './App.css';
import Picturebox from './picturebox/picturebox';
import Gallary from './gallary/gallary';
import Login from './login/login';
import Single from './singlepicture/single';

function App() {
  return (
    <div className="App">
      <header>
          <div>
              <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#login">登陆</button>
          </div>
      </header>
      <Login />
      <Single />

      <div id="content" className="container">
        <Picturebox />
          <div id="bar">
              <div className="dropdown">
                <a className="btn btn-primary btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                排序方式
                </a>
                <button id="18limit" className="btn btn-danger btn-sm">R18 版</button>
                <button id="18limit" className="btn btn-success btn-sm">普通版</button>
                <button id="18limit" className="btn btn-warning btn-sm">新色图</button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item">默认</a>
                  <a className="dropdown-item">时间</a>
                  <a className="dropdown-item">评分</a>
                </div>
              </div>
              
          </div>
        <Gallary />
       
          <ul className="pagination justify-content-center">
            <li className="page-item"><a class="page-link" href="#">Previous</a></li>
            <li className="page-item"><a class="page-link" href="#">1</a></li>
            <li className="page-item"><a class="page-link" href="#">2</a></li>
            <li className="page-item"><a class="page-link" href="#">3</a></li>
            <li className="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        
      </div>

      <footer>
        <address><a href="https://kanata.moe/">访问主页</a></address>
        <span><a href="mail:876203144@qq.com">联系邮箱</a></span>
        <div>this is the only neet things to do</div>
      </footer>
    </div>
  );
}

export default App;
