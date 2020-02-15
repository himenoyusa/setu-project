import React, { Component, Fragment } from 'react';
import { Modal, Button } from 'antd';

export default class UploadPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <Fragment>
        <Button
          id="18limit"
          type="danger"
          onClick={this.showModal}
        >
          新色图
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Fragment>

    );
  }
}