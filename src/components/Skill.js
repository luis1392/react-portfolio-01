import React, {Component} from 'react'

class Skill extends Component {
  render() {
     const skill = this.props.skill
    return (
      <span className="skills-list__single">
        {/* pass in skill string as props in <SkillsList/> component*/}
        {skill}
      </span>
    );
  }
}

export default Skill
