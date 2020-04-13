import React, { Component } from 'react';
import { Upload, Icon, Modal, Button, Checkbox } from 'antd';

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
      visaCode: '',
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
    const { visaCode, r18 } = this.state;
    const action = 'https://www.kanata.moe/api/uploadPicture.php';
    return (
      <div className="clearfix">
        <Checkbox onChange={this.handleCheckbox}>R18</Checkbox>

        <Upload
          action={action}
          accept=".jpg,.png,.gif"
          listType="picture-card"
          name="picture"
          data={{ visaCode, r18 }}
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
        <Upload
          beforeUpload={this.addVisa}
          data={{ visaCode, r18 }}
          name="picture"
          action={action}
          directory
        >
          <Button>
            <Icon type="upload" />
            上传文件夹
          </Button>
        </Upload>
      </div>
    );
  }
}
