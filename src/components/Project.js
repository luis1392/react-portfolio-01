import React, { Component } from "react";

class Project extends Component {
  render() {
    const theProjectName = this.props.project.projectName; // pass projectName value as props
    const soloProjectClassName = "project--solo";
    const teamProjectClassName = "project--team";

    return (
      <div
        className={`project ${
          this.props.project.solo ? soloProjectClassName : teamProjectClassName
        }`}
      >
        <span className="project__title">{theProjectName}</span>
      </div>
    );
  }
}

export default Project;
