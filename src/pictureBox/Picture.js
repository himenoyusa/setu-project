import React, { PureComponent } from 'react';
import Moment from 'moment';
import { isEmpty } from 'lodash';
import { Modal, Tag, Spin } from 'antd';
import store from '../store';

export default class Picture extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      visible: false,
      pictureData: {},
    };
    store.subscribe(this.display);
  }

  // 点击隐藏弹窗
  hideModal = () => {
    store.dispatch({
      type: 'hideModal',
    });
    this.setState({
      loading: true,
      visible: false,
    });
  };

  // store 状态变化时，显示弹窗
  display = () => {
    // 数据加载完毕后再取消 loading 状态
    if (!isEmpty(store.getState().pictureData)) {
      this.setState({
        loading: false,
      });
    }
    this.setState({
      visible: true,
      pictureData: store.getState().pictureData,
    });
    this.render();
  };

  render() {
    const { loading, visible } = this.state;
    // eslint-disable-next-line no-empty-pattern
    const { pic_info: { create_time, picture_dir, total_score } = {}, tags = [] } =
      this.state.pictureData || {};
    return (
      <Modal
        title={
          create_time
            ? `投稿时间：${Moment(Number(`${create_time}000`)).format('YYYY-MM-DD')}`
            : 'loading'
        }
        footer={null}
        width="95vw"
        visible={visible}
        onOk={this.hideModal}
        onCancel={this.hideModal}
      >
        <Spin spinning={loading}>
          <div style={{ textAlign: 'center' }}>
            <img className="card" style={{ maxWidth: '100%' }} src={picture_dir} alt="" />
          </div>
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
