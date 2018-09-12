import React, { Component } from "react";

class Summary extends Component {
  render() {
    return (
      <section>
        <h4>{this.props.summary}</h4>
        <p>{this.props.content}</p>
      </section>
    );
  }
}

export default Summary;
