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
    instance("api/getthumbs.php?page=" + this.state.currentPage)
      .then(response => {
        this.setState({
          pictureList: response.data.thumbs
        });
      })
      .catch(error => {
        // alert(error);
      });
  }

  handleClick = item => {
    this.setState({
      currentPicture: item.picture_id
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

        <Single pictureid={currentPicture} />
      </div>
    );
  }
}
