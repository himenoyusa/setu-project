import React, { PureComponent } from 'react';
import { Button, Picture } from './style';
import instance from '../../../../utils/axios';
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
    this.setState({ r18: e.target.value });
  };

  handleSubmit = () => {
    const { newPicture, r18 } = this.state;
    // 获取缩略图
    const thumb = compressPicture(newPicture) || newPicture;
    console.log(thumb);

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
      .then()
      .catch();
  };

  render() {
    return (
      <form>
        <Picture type="file" name="newPicture" onChange={(e) => this.handleSelect(e)} />
        <span>
          <input type="checkbox" name="r18" onChange={(e) => this.handleR18(e)} />
          &nbsp;R18
        </span>
        <Button type="button" onClick={this.handleSubmit}>
          上传
        </Button>
        <canvas id="canvas" style={{ display: 'none' }}></canvas>
      </form>
    );
  }
}

export default UploadPicture;
