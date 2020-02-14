import React, { Fragment, Component } from 'react';
import Login from "./Login";

export default class LoginBar extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div>
            <button
              className="btn btn-primary btn-sm"
              data-toggle="modal"
              data-target="#login"
            >
            登陆
            </button>
          </div>
        </header>
        <Login />
      </Fragment>
    );
  }
}