import React, { Component } from 'react';
import { Pagination } from 'antd';

export default class paginate extends Component {
  changePage = (page, pageSize) => {
    this.props.changePage(page, pageSize);
  };

  render() {
    return (
      <Pagination
        simple
        defaultCurrent={1}
        total={2}
        defaultPageSize={1}
        style={{ padding: 10 }}
        onChange={this.changePage}
      />
    );
  }
}
