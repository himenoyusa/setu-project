import React, { PureComponent } from "react";
//import instance from '../instance';
import Moment from 'moment';
import PropTypes from "prop-types";
import { Modal, Tag } from 'antd';

export default class SinglePicture extends PureComponent {

  static propTypes = {
    picture: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  handleOK = () => {
    this.props.hideModal();
  }

  handleCancel = () => {
    this.props.hideModal();
  }


  render() {
    const {
      pic_info, pic_info: { } = {},
      tags, tags: [] = []
    } = this.props.picture;
    return (
      <Modal
        title={'投稿时间：' + Moment(Number(pic_info.create_time + '000')).format('YYYY-MM-DD') }
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p></p>
        <img
          className="card"
          style={{ maxWidth: 1000 }}
          src={pic_info.picture_dir}
          alt=""
        />
        <div>
          <h3>分数：{pic_info.total_score}</h3>
        </div>
        <div className="">
          {tags.map(tag => (
            <Tag color="blue">{tag.tag}</Tag>
          ))}
        </div>
      </Modal>
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