import React, { Component, Fragment } from "react";
import instance from "../instance";
import _ from 'lodash';
import OrderType from "./OrderType";
import SinglePicture from "./SinglePicture";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture: {},
      pictureList: [],
      currentPage: 1
    };
    this.handleClick.bind(this);
  }

  componentDidMount() {
    instance("api/getthumbs.php?page="+this.state.currentPage)
      .then(response => {
        this.setState({
          pictureList: response.data.thumbs
        });
      })
      .catch(error => {
        // alert(error);
      });
  }

  //点击图片时获取图片信息，并通过 props 传递给 single 页面
  handleClick = item => {
    instance('api/getpicture.php?pictureid=' + item.picture_id)
    .then(response => {
      this.setState({
        currentPicture: response.data
      });
    })
    .catch(error => {
      //
    });
  };

  //预先渲染默认弹窗，点击触发时更新弹窗数据
  renderSinglePicture ()
  {
    const { currentPicture } = this.state;
    if (!_.isEmpty(this.state.currentPicture)) {
      return (<SinglePicture picture={ currentPicture } />);
    } else {
      return <SinglePicture />;
    }
    
  }

  render() {
    const { pictureList = [] } = this.state;

    return (
      <Fragment>
      <div id="gallery" className="d-flex flex-wrap justify-content-around">
        {pictureList.map(item => (
          <div onClick={() => this.handleClick(item)}>
            <img
              className="card"
              src={item.thumb_dir}
              data-toggle="modal"
              data-target="#single"
              alt={item.total_score}
            />
            <span className="tag">{item.total_score}</span>
          </div>
        ))}
        { this.renderSinglePicture() }
      </div>
      <OrderType />
      </Fragment>
    );
  }
}
