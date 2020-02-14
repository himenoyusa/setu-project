import React, { Component } from 'react';

export default class UploadPicture extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  handleClick = () => {
    alert('请先登录！');
  }

  render() {
    return (
      <button
        id="18limit"
        className="btn btn-warning btn-sm"
        onClick={this.handleClick}
      >
        新色图
      </button>
    );
  }
}