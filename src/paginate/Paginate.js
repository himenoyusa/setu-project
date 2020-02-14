import React, { Component } from 'react';

export default class paginate extends Component {

  render() {
    return (
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a class="page-link" href="#">
            Previous
            </a>
        </li>
        <li className="page-item">
          <a class="page-link" href="#">
            1
            </a>
        </li>
        <li className="page-item">
          <a class="page-link" href="#">
            2
            </a>
        </li>
        <li className="page-item">
          <a class="page-link" href="#">
            3
            </a>
        </li>
        <li className="page-item">
          <a class="page-link" href="#">
            Next
            </a>
        </li>
      </ul>
    )
  }
}