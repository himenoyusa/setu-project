import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import { modalActions } from 'redux/modules/message';

class MsgBox extends PureComponent {
  hideModal = () => {
    this.props.hideMsg();
  };

  render() {
    const { message, visible } = this.props;
    return (
      <Modal
        title="提示"
        footer={null}
        visible={visible}
        onOk={this.hideModal}
        onCancel={this.hideModal}
      >
        <div>
          <h3>{message}</h3>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.modal.get('message'),
    visible: state.modal.get('visible'),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    hideMsg: () => {
      dispatch(modalActions.hideMsgAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MsgBox);
