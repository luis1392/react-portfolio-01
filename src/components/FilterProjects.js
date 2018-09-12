import React, { Component } from "react";
import { projectData } from "../data/datasource";
import Project from "./Project";

class FilterProjects extends Component {
  state = {
    activeFilter: "all"
  };
  filterData = project => {
    if (this.state.activeFilter === "all") {
      return true;
    } else if (this.state.activeFilter === "solo") {
      return project.solo === true;
    } else {
      return project.solo === false;
    }
  };
  renderProjects = projectData => {
    const project = projectData
      .filter(project => this.filterData(project))
      .map(element => {
        return <Project key={element.projectName} project={element} />;
      });

    return project;
  };

  handleClickAll = () => {
    this.setState({
      activeFilter: "all"
    });
  };

  handleClickSolo = () => {
    this.setState({
      activeFilter: "solo"
    });
  };

  handleClickTeam = () => {
    this.setState({
      activeFilter: "team"
    });
  };
  render() {
    const projectSelectedClassVal = "project-type--selected";
    return (
      <section>
        <h4>Projects</h4>

        <div className="project-types-list">
          <span
            data-ptype="all"
            className={`project-type project-type--all ${
              this.state.activeFilter === "all" ? projectSelectedClassVal : ""
            }`}
            onClick={this.handleClickAll}
          >
            All
          </span>

          <span
            data-ptype="solo"
            className={`project-type project-type--solo ${
              this.state.activeFilter === "solo" ? projectSelectedClassVal : ""
            }`}
            onClick={this.handleClickSolo}
          >
            <i className="ion-person" />
            Solo
          </span>

          <span
            data-ptype="team"
            className={`project-type project-type--team ${
              this.state.activeFilter === "team" ? projectSelectedClassVal : ""
            }`}
            onClick={this.handleClickTeam}
          >
            <i className="ion-person-stalker" />
            Team
          </span>
        </div>

        <div className="projects-list">{this.renderProjects(projectData)}</div>
      </section>
    );
  }
}
export default FilterProjects;
