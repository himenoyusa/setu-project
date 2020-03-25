import React, { Component } from 'react';
import { Button, Dropdown, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import UploadPicture from './UploadPicture';
import { Bar } from './style';

class NavBar extends Component {
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

  isLogin = () => {
    if (this.props.isLogin) {
      return (
        <>
          <Button type={this.props.onR ? 'danger' : 'primary'} onClick={() => this.change()}>
            切换
            {this.props.onR ? 'R18 版' : '普通版'}
          </Button>
          <UploadPicture />
        </>
      );
    }
    return null;
  };

  change() {
    this.props.changeR();
  }

  render() {
    return (
      <Bar>
        <Dropdown overlay={this.menu}>
          <Button type="primary">
            排序方式
            <Icon type="down" />
          </Button>
        </Dropdown>
        {this.isLogin()}
      </Bar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.get('isLogin'),
  };
};

export default connect(mapStateToProps)(NavBar);
