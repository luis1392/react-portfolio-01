import React, {Component} from 'react'
import EduTitle from './EduTitle'

class EducationHistory extends Component {
  
  renderEducationHistory(eduList){
    const list = eduList.map(element => {
      return <EduTitle key={element.institute} institute={element.institute} fieldOfStudy={element.fieldOfStudy} dates={element.dates} />;
    });
    return list 
  }
  
  render() {
    const eduList = this.props.eduList
    return (
      <section>
        <h4>Education</h4>
        <div className="skills-list">
          {this.renderEducationHistory(eduList)}
        </div>
      </section>
    )
  }
}

export default EducationHistory;
