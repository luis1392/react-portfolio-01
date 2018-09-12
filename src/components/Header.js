import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <h2>{this.props.title}</h2>
      </header>
    );
  }
}
export default Header;
