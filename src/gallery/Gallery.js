import React, { Component } from 'react';
import { Card } from 'antd';
import instance from '../axios';
import NavBar from './navBar/NavBar';
import Paginate from './Paginate';
import store from '../store';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureList: [],
      currentPage: 1,
      orderType: 'default',
    };
    this.changeOrder = this.changeOrder.bind(this);
    this.changePage = this.changePage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // 获取缩略图
    this.getThumb();
  }

  getThumb = () => {
    instance(`api/getthumbs.php?page=${this.state.currentPage}&orderType=${this.state.orderType}`)
      .then((response) => {
        this.setState({
          pictureList: response.data.thumbs,
        });
      })
      .catch((error) => {});
  };

  // 点击图片时获取图片信息，并通过 store 传递给 picture 弹窗页面
  handleClick = (item) => {
    // 预先渲染 picture 页面，loading 状态
    store.dispatch({
      type: 'showModal',
      pictureData: {},
    });
    instance('api/getpicture.php', { params: { pictureid: item.picture_id } })
      .then((response) => {
        store.dispatch({
          type: 'showModal',
          pictureData: response.data,
        });
      })
      .catch(() => {
        //
      });
  };

  // 更改排序
  changeOrder = (type) => {
    // 排序方式有变动时，更新 state 并重新获取缩略图
    if (this.state.orderType !== type) {
      this.setState({ orderType: type }, () => this.getThumb());
    }
  };

  // 翻页
  changePage = (page, pageSize) => {
    if (this.state.currentPage !== page) {
      this.setState({ currentPage: page }, () => this.getThumb());
    }
  };

  render() {
    const { pictureList = [] } = this.state;
    return (
      <>
        <NavBar changeOrder={this.changeOrder} />
        <div id="gallery">
          {pictureList.map((picture) => (
            <div key={picture.picture_id} onClick={() => this.handleClick(picture)}>
              <Card
                style={{
                  width: 300,
                  height: 320,
                  margin: 10,
                }}
                bordered={false}
              >
                <img height="290" src={picture.thumb_dir} alt={picture.total_score} />
                <p>
                  评分：
                  {picture.total_score}
                </p>
              </Card>
            </div>
          ))}
          <Paginate changePage={this.changePage} />
        </div>
      </>
    );
  }
}
