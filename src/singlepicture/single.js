import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";

export default class SinglePicture extends Component {
  propTypes = {
    picture: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      picture_info: {
        create_by: null,
        picture_dir: null,
        picture_id: null,
        error: 0
      }
    };
  }

  componentDidMount() {
    // Axios.get("http://localhost/api/getpicture.php?pictureid=1")
    //   .then(response => {
    //     this.setState({
    //       picture_info: response.data
    //     });
    //   })
    //   .catch(() => {
    //     this.setState({ error: 1 });
    //   });
  }

  //图片读取失败时，显示 404 图片
  renderPicture() {
    const { picture: { picture_dir = "../404.png" } = {} } = this.props;
    console.log("picture_dir", picture_dir);

    // if (this.state.error == 1) {
    //   return <img className="card" src={require("../../src/404.png")} alt="" />;
    // } else {
    return (
      <img
        className="card"
        style={{ width: 400, height: 400 }}
        src={picture_dir}
        alt=""
      />
    );
    // }
  }

  render() {
    console.log("render");
    return (
      <div
        className="modal fade"
        id="single"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                示例图片
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{this.renderPicture()}</div>

            <div>
              <h3>评分：7.5</h3>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
