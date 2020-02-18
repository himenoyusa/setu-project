import React, { Component } from 'react';
import { Button, Dropdown, Menu, Icon } from 'antd';
import UploadPicture from './UploadPicture';

export default class NavBar extends Component {
  menu = (
    <Menu>
      <Menu.Item onClick={() => this.onClick('default')}>默认</Menu.Item>
      <Menu.Item onClick={() => this.onClick('score')}>分数</Menu.Item>
      <Menu.Item onClick={() => this.onClick('time')}>时间</Menu.Item>
    </Menu>
  );

  onClick = (type) => {
    this.props.changeOrder(type);
  };

  render() {
    return (
      <div id="bar">
        <Dropdown overlay={this.menu}>
          <Button type="primary">
            排序方式
            <Icon type="down" />
          </Button>
        </Dropdown>
        <Button type="primary">普通版</Button>
        <Button type="danger">R18 版</Button>
        <UploadPicture />
      </div>
    );
  }
}
