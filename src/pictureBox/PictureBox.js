import React, { Component } from 'react';
import { Carousel } from 'antd';
import axios from '../axios';

export default class PictureBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    // i为轮播图片数量
    const pid = [1, 2, 3];
    for (let i = 1; i <= 3; i++) {
      axios(`api/getpicture.php?pictureid=${pid[i - 1]}`)
        .then((response) => {
          this.setState({
            pictures: [...this.state.pictures, response.data.pic_info],
          });
        })
        .catch((error) => {
          //
        });
    }
  }

  render() {
    const { pictures = {} } = this.state;
    return (
      <div id="pictureBox">
        <Carousel effect="fade" dotPosition="top" autoplay>
          {pictures.map((picture) => (
            <div key="picture_id">
              <img src={picture.picture_dir} alt={picture.total_score} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
