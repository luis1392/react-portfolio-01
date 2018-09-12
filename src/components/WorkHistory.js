import React, { Component } from "react";
import Job from "./Job";

class WorkHistory extends Component {
  renderJob(jobsList) {
    const list = jobsList.map(element => {
      return <Job key={element.title} job={element} />;
    });

    return list;
  }

  render() {
    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">{this.renderJob(this.props.jobsList)}</div>
      </section>
    );
  }
}

export default WorkHistory;
