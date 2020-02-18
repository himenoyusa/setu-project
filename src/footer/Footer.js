import React from 'react';
import APlayer from 'react-aplayer';

export default function footer() {
  const audio = [
    {
      name: '永遠に咲く花',
      artist: 'AiRI',
      url: 'http://www.kanata.moe/musics/music1.mp3',
      cover: 'http://www.kanata.moe/musics/cover1.png',
    },
    {
      name: '光るなら',
      artist: 'Goose house',
      url: 'http://www.kanata.moe/musics/music2.mp3',
      cover: 'http://www.kanata.moe/musics/cover2.png',
    },
    {
      name: '星の舟',
      artist: 'Lia',
      url: 'http://www.kanata.moe/musics/music3.mp3',
      cover: 'http://www.kanata.moe/musics/cover3.png',
    },
  ];

  return (
    <>
      <APlayer audio={audio} listFolder="false" theme="#F57F17" preload="metadata" />
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
