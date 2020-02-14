import React, { PureComponent } from "react";
//import instance from '../instance';
import Moment from 'moment';
import PropTypes from "prop-types";

class SinglePicture extends PureComponent
{

  static propTypes = {
    picture: PropTypes.object.isRequired
  };

  constructor(props)
  {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      pic_info, pic_info: {} = {},
      tags, tags: [] = []
    } = this.props.picture;
    return (
      <div
        className="modal fade"
        id="single"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                投稿时间：{ Moment(Number(pic_info.create_time + '000')).format('YYYY-MM-DD') }
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
            <div className="modal-body">
              <img
                className="card"
                style={{ maxWidth: 1000 }}
                src={ pic_info.picture_dir }
                alt=""
              />
            </div>
            <div>
              <h3>分数：{ pic_info.total_score }</h3>
            </div>
            <div>
              { tags.map(tag => (tag.tag)) }
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

//图片未点击时，先渲染空弹窗
SinglePicture.defaultProps = {
  picture: {
    pic_info: {},
    tags: []
  }
};

export default SinglePicture;