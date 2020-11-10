import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "./Menu";

class _MenuContainer extends Component {
  render() {
    return <Menu />;
  }
}

const MenuContainer = connect(null, {})(_MenuContainer);
export { MenuContainer };
