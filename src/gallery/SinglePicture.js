import React, { PureComponent } from 'react';
// import instance from '../instance';
import Moment from 'moment';
import PropTypes from 'prop-types';
import { Modal, Tag } from 'antd';

export default class SinglePicture extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOK = () => {
    const { hideModal } = this.props;
    hideModal();
  };

  handleCancel = () => {
    const { hideModal } = this.props;
    hideModal();
  };

  render() {
    const { pic_info, pic_info: {} = {}, tags, tags: [] = [] } = this.props.picture;
    return (
      <Modal
        title={'投稿时间：' + Moment(Number(pic_info.create_time + '000')).format('YYYY-MM-DD')}
        footer={null}
        width={'95vw'}
        visible
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <img className="card" style={{ width: '100%' }} src={pic_info.picture_dir} alt="" />
        <h3>分数：{pic_info.total_score}</h3>
        <div className="">
          {tags.map((tag) => (
            <Tag color="blue">{tag.tag}</Tag>
          ))}
        </div>
      </Modal>
    );
  }
}

SinglePicture.propTypes = {
  picture: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
};
