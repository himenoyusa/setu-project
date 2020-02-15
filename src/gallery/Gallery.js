import React, { Component } from 'react';
import { Card } from 'antd';
import instance from '../axios';
import SinglePicture from './SinglePicture';
import NavBar from './navBar/NavBar';
import Paginate from './Paginate';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPictureId: -1,
      pictureList: [],
      currentPage: 1,
      visible: false,
    };
  }

  componentDidMount() {
    instance(`api/getthumbs.php?page=${this.state.currentPage}`)
      .then((response) => {
        this.setState({
          pictureList: response.data.thumbs,
        });
      })
      .catch((error) => {
        // alert(error);
      });
  }

  // 点击图片时获取图片信息，并通过 props 传递给 single 页面
  handleClick = (item) => {
    this.setState({
      currentPictureId: item.picture_id,
      visible: true,
    });
  };

  // 传递给子组件控制弹窗
  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  renderModal = () => {
    const { currentPictureId } = this.state;
    const { visible } = this.state;
    if (visible) {
      return <SinglePicture pictureId={currentPictureId} hideModal={this.hideModal} />;
    }
  };

  render() {
    const { pictureList = [] } = this.state;
    return (
      <>
        <NavBar />
        <div id="gallery">
          {pictureList.map((item) => (
            <div key={item.picture_id} onClick={() => this.handleClick(item)}>
              <Card
                style={{
                  width: 300,
                  height: 320,
                  margin: 10,
                }}
                bordered={false}
              >
                <img height="290" src={item.thumb_dir} alt={item.total_score} />
                <p>
                  评分：
                  {item.total_score}
                </p>
              </Card>
            </div>
          ))}
          <Paginate />
        </div>
        {this.renderModal()}
      </>
    );
  }
}
