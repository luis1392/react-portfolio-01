import React, { Component } from "react";

class PortfolioFixed extends Component {
  render() {
    return (
      <div className="portfolio-fixed">
        <img src={this.props.image} />
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

export default PortfolioFixed;
