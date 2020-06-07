import React, { PureComponent } from 'react';
import { message } from 'antd';
import instance from 'utils/axios';
import { Button, Picture, Check, Form } from './style';
import compressPicture from './compressPicture';

class UploadPicture extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newPicture: null,
      r18: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleR18 = this.handleR18.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (e) => {
    this.setState({ newPicture: e.target.files[0] });
  };

  handleR18 = (e) => {
    const r18 = e.target.checked;
    this.setState({ r18 });
    return null;
  };

  handleSubmit = async () => {
    message.warning('正在上传…');
    const { newPicture, r18 } = this.state;
    if (newPicture === null) {
      message.warning('请先选择图片');
      return null;
    }
    // 获取缩略图，压缩失败则直接使用原图
    const thumb = (await compressPicture(newPicture)) || newPicture;
    // 发送 ajax 上传
    const forms = new FormData();
    const configs = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };
    forms.append('newPicture', newPicture);
    forms.append('thumb', thumb);
    forms.append('r18', r18);

    instance
      .post(this.props.action, forms, configs)
      .then((response) => {
        if (response.data.errorCode === 2001) {
          message.success('上传成功');
        } else {
          message.error('上传失败，请先登录');
        }
      })
      .catch(() => {
        message.error('服务器错误，上传失败');
      });
    return null;
  };

  render() {
    return (
      <Form>
        <Picture type="file" name="newPicture" onChange={(e) => this.handleSelect(e)} />
        <Check>
          <input type="checkbox" name="r18" onChange={(e) => this.handleR18(e)} />
          &nbsp;R18
        </Check>
        <Button type="button" onClick={this.handleSubmit}>
          上传
        </Button>
        <canvas id="canvas" style={{ display: 'none' }}></canvas>
      </Form>
    );
  }
}

export default UploadPicture;
