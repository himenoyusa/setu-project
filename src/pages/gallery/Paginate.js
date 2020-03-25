import React, { Component } from 'react';
import { Pagination } from 'antd';

export default class paginate extends Component {
  // 调用父组件方法，翻页
  changePage = (page, pageSize) => {
    this.props.changePage(page, pageSize);
  };

  render() {
    return (
      <Pagination
        defaultCurrent={1}
        total={this.props.total}
        defaultPageSize={1}
        style={{ padding: 10 }}
        onChange={this.changePage}
      />
    );
  }
}
