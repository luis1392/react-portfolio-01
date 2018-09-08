
import React, {Component} from 'react'

class Job extends Component {
  render() {
    //console.log(this.props);
    const title = this.props.job.title
    const company = this.props.job.company
    const description = this.props.job.description
    const start = this.props.job.years.start
    const end = this.props.job.years.end
    return (
      <div className="job">
    <div className="job__years">
      <h6 className="job__end">{end}</h6>
      <h6 className="job__start">{start}</h6>
    </div>
    <h5 className="job__title">{title}</h5>
    <h5 className="job__company">{company}</h5>
    <p className="job__description">{description}</p>
  </div>
    );
  }
}

export default Job
