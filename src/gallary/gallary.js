import React, { Component } from "react";
import Axios from "axios";
import Single from "../singlepicture/single";

export default class Gallary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yusa: 1,
      currentPicture: {}
    };
  }

  componentDidMount() {
    Axios("api/getcount.php")
      .then(response => {
        this.setState({ yusa: response.data.name });
      })
      .catch(error => {
        // alert(error);
      });

    this.setState({
      pictureList: [
        {
          id: 1,
          picture_dir: "../favicon.png"
        },
        {
          id: 2,
          picture_dir: require("../404.png")
        }
      ]
    });
  }

  handleClick = item => {
    this.setState({
      currentPicture: item
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
              src={item.picture_dir}
              data-toggle="modal"
              data-target="#single"
              alt="1"
            />
            <span className="tag">{this.state.yusa}</span>
          </div>
        ))}

        <Single picture={currentPicture} />
      </div>
    );
  }
}
