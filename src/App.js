import React, { Component } from 'react';
import PortfolioFixed from './componets/PortfolioFixed'
import PortfolioContent from './componets/PortfolioContent'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <PortfolioFixed />
        <PortfolioContent />
      </div>
    );
  }
}

export default App;
