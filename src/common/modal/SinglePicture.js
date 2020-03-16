import React, { PureComponent } from 'react';
import Moment from 'moment';
import { Tag, Spin, Slider, Button } from 'antd';
import { connect } from 'react-redux';
import { modalActions } from '../../redux/modules/message';
import { StyledModal } from './style';

class SinglePicture extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // loading 状态
    };
  }

  hide = () => {
    this.props.hideModal();
    this.setState({
      loading: false,
    });
  };

  render() {
    const { loading } = this.state;
    const { picture_info: { create_time, picture_dir, total_score } = {}, tags = [] } =
      this.props.pictureData || {};
    return (
      <StyledModal
        title={
          create_time
            ? `投稿时间：${Moment(Number(`${create_time}000`)).format('YYYY-MM-DD')}`
            : 'loading'
        }
        footer={null}
        width="95vw"
        visible={this.props.visible}
        onOk={this.hide}
        onCancel={this.hide}
      >
        <Spin spinning={loading}>
          <div style={{ textAlign: 'center' }}>
            <img
              className="card"
              style={{ maxHeight: '80vh', maxWidth: '100%' }}
              src={picture_dir}
              alt=""
            />
          </div>
          <div className="">
            {tags.map((tag) => (
              <Tag key={tag.tag_id} color="blue">
                {tag.tag}
              </Tag>
            ))}
          </div>
          <div>
            <h3>
              当前分数：
              {total_score}
            </h3>
            <Slider defaultValue={total_score} />
            <Button type="primary">评分</Button>
          </div>
        </Spin>
      </StyledModal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visible: state.modal.get('visible'),
    pictureData: state.modal.get('pictureData'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => {
      dispatch(modalActions.hideModalAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePicture);
