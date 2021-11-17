import React, { Component } from "react";
import { withRouter, NavLink, Switch, Redirect, Route } from "react-router-dom";

class View extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
        </Switch>
      </div>
    );
  }

}

export default withRouter(View);
