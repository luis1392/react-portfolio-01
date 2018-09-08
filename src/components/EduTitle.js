import React, {Component} from 'react'

class EduTitle extends Component {
  render() {
    const date = this.props.date
    const institute = this.props.institute
    const fieldOfStudy = this.props.fieldOfStudy
    return (
      <div className="degree">
       <h5 className="degree__institute">{institute} </h5>
       <p className="degree__field">{fieldOfStudy}</p>
       <p className="degree__dates">{date}</p>
     </div>
    );
  }
}

export default EduTitle
