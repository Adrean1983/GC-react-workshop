import React, { Component } from "react";

class Grade extends Component {
  render() {
    return (
      <div className="Grade">
        <h3>Grade</h3>
        <p>
          <label> Title:</label> {this.props.title}
        </p>
        <p>
          <label> Score:</label> {Math.round((this.props.score / this.props.total) * 100)}%
        </p>
        <p>
          <label> Passing:</label> {this.props.passing ? "yes" : "no"}
        </p>
      </div>
    );
  }
}

export default Grade;
