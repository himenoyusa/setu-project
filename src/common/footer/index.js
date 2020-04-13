import React from 'react';
import { Footer, Link, Logo } from './style';

export default function footer() {
  return (
    <Footer>
      <div className="topBack">
        <a href="#app">返回顶部</a>
      </div>
      <Logo />
      <div>
        <span>|</span>
        <Link href="https://kanata.moe/">访问主页</Link>
        <span>|</span>
        <Link href="mailto:yusa_kanata@outlook.com">联系邮箱</Link>
        <span>|</span>
      </div>
      <div className="neet">It&apos;s the only NEET thing to do</div>
    </Footer>
  );
}
