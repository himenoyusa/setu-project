import React, { Component } from 'react';
import { Button, Dropdown, Menu, Icon } from 'antd';
import UploadPicture from "./UploadPicture";

export default class NavBar extends Component {


  onClick = ({ key }) => {
    alert(`Click on item ${key}`);
  };

  menu = (
    <Menu onClick={ this.onClick }>
      <Menu.Item key="1">默认</Menu.Item>
      <Menu.Item key="2">分数</Menu.Item>
      <Menu.Item key="3">时间</Menu.Item>
    </Menu>
  );

  render() {
    return (
      <div id="bar">
        <Dropdown overlay={ this.menu }>
          <Button type="primary">
            排序方式 <Icon type="down" />
          </Button>
        </Dropdown>
        <Button type="primary">普通版</Button>
        <Button type="danger">R18 版</Button>
        <UploadPicture />
      </div>
    )
  }
}