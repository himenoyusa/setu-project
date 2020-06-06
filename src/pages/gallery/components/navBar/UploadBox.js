import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import UploadPicture from './upload/UploadPicture';

export default class UploadBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button id="18limit" type="danger" onClick={this.showModal}>
          新色图
        </Button>
        <Modal
          title="新上传"
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <UploadPicture action="http://localhost:3001/api/picture" />
        </Modal>
      </>
    );
  }
}
