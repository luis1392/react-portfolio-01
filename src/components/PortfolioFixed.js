import React, { Component } from 'react';


class PortfolioFixed extends Component {
  render() {
    const title = this.props.title
    const subtitle = this.props.subtitle
    const image = this.props.image
    return (
      <div className="portfolio-fixed">
            <img src={image}/>
            <h1>{title}</h1>
            <p>{subtitle}</p>
      </div>
    );
  }
}

export default PortfolioFixed;