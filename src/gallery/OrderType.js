import React, { Component } from 'react';

export default class OrderType extends Component {
  render() {
    return (
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item">默认</a>
        <a className="dropdown-item">时间</a>
        <a className="dropdown-item">评分</a>
      </div>
    );
  }
}