import React, { PureComponent } from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import { Modal, Tag, Spin } from 'antd';
import axios from '../axios';

export default class SinglePicture extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.getPictureData();
  }

  handleOK = () => {
    const { hideModal } = this.props;
    hideModal();
  };

  handleCancel = () => {
    const { hideModal } = this.props;
    hideModal();
  };

  getPictureData = () => {
    axios('api/getpicture.php?pictureid=' + this.props.pictureId)
      .then((response) => {
        this.setState(() => ({
          loading: false,
          picture: response.data,
        }));
      })
      .catch((error) => {
        //
      });
  };

  render() {
    const { loading } = this.state;
    // eslint-disable-next-line no-empty-pattern
    const { pic_info: { create_time, picture_dir, total_score } = {}, tags = [] } =
      this.state.picture || {};
    return (
      <Modal
        title={
          create_time
            ? `投稿时间：${Moment(Number(`${create_time}000`)).format('YYYY-MM-DD')}`
            : 'loading'
        }
        footer={null}
        width="95vw"
        visible
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Spin spinning={loading}>
          <p />
          <img className="card" style={{ width: '100%' }} src={picture_dir} alt="" />
          <div>
            <h3>
              分数：
              {total_score}
            </h3>
          </div>
          <div className="">
            {tags.map((tag) => (
              <Tag color="blue">{tag.tag}</Tag>
            ))}
          </div>
        </Spin>
      </Modal>
    );
  }
}

SinglePicture.propTypes = {
  pictureId: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
};
