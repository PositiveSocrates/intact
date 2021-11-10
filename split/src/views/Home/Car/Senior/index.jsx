import { createLinkSync } from 'fs-extra';
import React, { Component } from 'react';

import { NavLink, Link, Route, withRouter } from 'react-router-dom';


class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { index: 1 },
        { index: 2 },
        { index: 3 },
        { index: 4 },

      ],
      cont: 1,
    }
  }
  listFn(data) {
    return data.map((item, index) => (
      <li key={index}>
        {item.index}
      </ li>
    ))
  }
  render() {
    let { list } = this.state;
    return (
      <React.Fragment>
        {/* {this.listFn(list)} */}
        高级汽车销售
      </React.Fragment>
    )
  }
}
export default View;