import React, { Component } from 'react';
import PortfolioFixed from './components/PortfolioFixed'
import PortfolioContent from './components/PortfolioContent'
import SkillsList from './components/SkillsList'
import EducationHistory from './components/EducationHistory'
import WorkHistory from './components/WorkHistory'


class App extends Component {
  render() {
    const skills  = this.props.skills
    const eduList = this.props.eduList
    const jobsList = this.props.jobsList
    return (
      <div className="app-container">
        {/* <PortfolioFixed title='María Santiago' subtitle='Developer | Mother' image='https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg'/>
        <PortfolioContent /> */}
        <SkillsList skills = {skills} />
        <EducationHistory eduList = {eduList} />
        <WorkHistory jobsList = {jobsList} />
      </div>
    );
  }
}

export default App;
