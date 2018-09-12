import React, { Component } from "react";

class EduTitle extends Component {
  render() {
    return (
      <div className="degree">
        <h5 className="degree__institute">{this.props.institute} </h5>
        <p className="degree__field">{this.props.fieldOfStudy}</p>
        <p className="degree__dates">{this.props.date}</p>
      </div>
    );
  }
}

export default EduTitle;
