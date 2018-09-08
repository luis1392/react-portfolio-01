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

    /* receive `eduList` array as props from App compnonent */
    const eduList = this.props.eduList
    return (
      <section>
        <h4>Education</h4>
        <div className="skills-list">

          { /*
              map over jobsList array and return an array of <Job/> components
              NOTE: you must pass values from each education object
                    to the <EduTitle> component as props...
            */
          }
          {this.renderEducationHistory(eduList)}

        </div>
      </section>
    )
  }
}

export default EducationHistory;
