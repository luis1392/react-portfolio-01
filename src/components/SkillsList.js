import React, { Component } from "react";
import Skill from "./Skill";

class SkillsList extends Component {
  renderSkills(skills) {
    const list = skills.map(element => {
      return <Skill key={element} skill={element} />;
    });

    return list;
  }
  render() {
    const skills = this.props.skills;
    return (
      <section>
        <h4>Skills</h4>
        <div className="skills-list">{this.renderSkills(skills)}</div>
      </section>
    );
  }
}

export default SkillsList;
