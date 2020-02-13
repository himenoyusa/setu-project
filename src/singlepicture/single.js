import React, { PureComponent } from "react";
import instance from '../instance';
import Moment from 'moment';
import PropTypes from "prop-types";

export default class SinglePicture extends PureComponent {
  static propTypes = {
    picture: PropTypes.object.isRequired
  };

  /*renderPicture = () => {
    
//    const { picture: { picture_dir = "../favicon.png" } = {} } = this.props;

    return (
      
    );
  };*/

  render() {
    const {
      pic_info, pic_info: {
        picture_id,
        picture_dir,
        create_time
      } = {},
      tags, tags: [] = []
    } = this.props.picture;
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
                { Moment(1512334566).format('YYYY-MM-DD') }
                { console.log(this.props.picture) }
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
                src={ picture_dir }
                alt=""
              />
            </div>
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
