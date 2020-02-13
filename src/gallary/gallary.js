import React, { Component } from "react";
import instance from "../instance";
import Single from "../singlepicture/single";

export default class Gallary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture: {},
      pictureList: [],
      currentPage: 1
    };
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
    .then(responce => {
      this.setState({
        currentPicture: responce.data
      });
    })
    .catch(error => {
      //
    });
  };

  render() {
    const { currentPicture = {}, pictureList = [] } = this.state;

    return (
      <div id="gallary" className="d-flex flex-wrap justify-content-around">
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

        <Single picture={currentPicture} />
      </div>
    );
  }
}
