import React, { Component } from 'react';
import { Upload, Icon, Modal, Checkbox } from 'antd';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default class PictureSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r18: false,
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  // 压缩图片后上传
  compressPicture = () => {};

  // 是否 r18
  handleCheckbox(e) {
    this.setState({
      r18: e.target.checked,
    });
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { r18 } = this.state;
    const action = 'http://localhost:3001/api/picture';
    return (
      <div className="clearfix">
        <Checkbox onChange={this.handleCheckbox}>R18</Checkbox>

        {/* TODO: 重写图片上传逻辑，压缩图片 */}
        <Upload
          action={action}
          accept=".jpg,.png,.gif"
          listType="picture-card"
          name="newPicture"
          data={{ r18 }}
          beforeUpload={this.compressPicture}
          multiple
          // fileList={fileList}
          // onPreview={this.handlePreview}
          // onChange={this.handleChange}
        >
          {fileList.length >= 20 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
