import React, { Component } from 'react';
import { Carousel } from 'antd';
import instance from '../axios';
import store from '../store';
import Picture from './Picture';

export default class PictureBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // i为轮播图片数量
    const pid = [1, 2, 3];
    for (let i = 1; i <= 3; i += 1) {
      instance(`api/getpicture.php?pictureid=${pid[i - 1]}`)
        .then((response) => {
          this.setState((prevState) => ({
            pictures: [...prevState.pictures, response.data],
          }));
        })
        .catch((error) => {
          //
        });
    }
  }

  handleClick = (picture) => {
    store.dispatch({
      type: 'showModal',
      pictureData: picture,
    });
  };

  render() {
    const { pictures } = this.state;
    return (
      <div id="pictureBox">
        <Carousel effect="fade" dotPosition="top" autoplay>
          {pictures.map((picture) => (
            <div key="picture_id" onClick={() => this.handleClick(picture)}>
              <img src={picture.pic_info.picture_dir} alt={picture.pic_info.total_score} />
            </div>
          ))}
        </Carousel>
        <Picture />
      </div>
    );
  }
}
