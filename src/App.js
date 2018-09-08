import React, { Component } from 'react';
import PortfolioFixed from './components/PortfolioFixed'
import PortfolioContent from './components/PortfolioContent'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <PortfolioFixed title='María Santiago' subtitle='Developer | Mother' image='https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg'/>
        <PortfolioContent />
      </div>
    );
  }
}

export default App;
