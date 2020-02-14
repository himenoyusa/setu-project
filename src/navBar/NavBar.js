import React, { Component } from 'react';
import UploadPicture from "./UploadPicture";

export default class NavBar extends Component
{
    render () {
        return (
        <div id="bar">
          <div className="dropdown">
            <a
              className="btn btn-primary btn-sm dropdown-toggle"
              href="#root"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              排序方式
            </a>
            <button id="18limit" className="btn btn-danger btn-sm">
              R18 版
            </button>
            <button id="18limit" className="btn btn-success btn-sm">
              普通版
            </button>
            <UploadPicture />
          </div>
        </div>
        )
    }
}