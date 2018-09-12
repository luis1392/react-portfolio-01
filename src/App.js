import React, { Component } from "react";
import PortfolioFixed from "./components/PortfolioFixed";
import PortfolioContent from "./components/PortfolioContent";
import SkillsList from "./components/SkillsList";
import EducationHistory from "./components/EducationHistory";
import WorkHistory from "./components/WorkHistory";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <PortfolioFixed
          title="María Santiago"
          subtitle="Developer | Mother"
          image="https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg"
        />
        <PortfolioContent
          skills={this.props.skills}
          eduList={this.props.eduList}
          jobsList={this.props.jobsList}
        />
      </div>
    );
  }
}

export default App;
