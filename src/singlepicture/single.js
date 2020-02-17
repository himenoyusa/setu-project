import React, { PureComponent } from "react";
import instance from '../instance';
import PropTypes from "prop-types";

export default class SinglePicture extends PureComponent {
  static propTypes = {
    pictureid: PropTypes.object.isRequired
  };

  constructor(props)
  {
    super(props);
    this.state = {
      pictureInfo: [],
      tags: []
    }
  }

  getPicture()
  {
    instance('api/getpicture.php?pictureid=' + this.props.pictureid)
    .then(responce => {
      this.setState({
        pictureInfo: responce.data.pic_info,
        tags: responce.data.tags
      });
    })
    .catch(error => {

    });

  }

  //图片读取失败时，显示 404 图片
  renderPicture = () => {
    if (this.state.pictureInfo == []) {
      return (<img />);
    } else {
    
    return (
      <img
        className="card"
        style={{ width: 400, height: 400 }}
        src={ this.state.pictureInfo.picture_dir }
        alt=""
      />
    );
    }
  };

  render() {
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
