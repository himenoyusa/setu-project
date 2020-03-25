import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PictureSelector from './pictureSelector';

export default class UploadPicture extends Component {
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
      <>
        <Button id="18limit" type="danger" onClick={this.showModal}>
          新色图
        </Button>
        <Modal
          title="新上传"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <PictureSelector />
        </Modal>
      </>
    );
  }
}
