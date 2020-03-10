import React, { Component } from "react";
import Grade from "./Grade";
import "./GradeForm.css";

class GradeForm extends Component {
  state = {
    label: "",
    score: 0,
    total: 20,
    passingPercent: 60,
    grades: []
  };

  handleLabel = e => {
    this.setState({ label: e.target.value });
  };

  handleScore = e => {
    this.setState({ score: e.target.value });
  };

  handleTotal = e => {
    this.setState({ total: e.target.value });
  };

  getPercentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  }

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      label: this.state.label,
      score: this.state.score,
      total: this.state.total,
      passing: this.getPercentage(this.state.score, this.state.total) >= this.state.passingPercent
    };
    this.setState(prev => {
      return { grades: [...prev.grades, newItem] };
    });
  };

  render() {
    return (
      <div className="GradeForm">
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Label </label>
            <input type="text" value={this.state.label} onChange={this.handleLabel} placeholder="Place quiz name here..." />
          </p>
          <p>
            <label>Score </label>
            <input type="text" value={this.state.score} onChange={this.handleScore} placeholder="Place a score..." />
          </p>
          <p>
            <label>Max Score </label>
            <input type="number" value={this.state.total} onChange={this.handleTotal} />
          </p>
          <button type="submit">Add</button>
        </form>
        {this.state.grades.map((data, index) => (
          <Grade key={index} label={data.label} score={data.score} total={data.total} passing={data.passing} />
        ))}
        {/* <p>
            <label>Score </label>
            <input onChange={this.handleScore} type="range" min="0" max={this.state.total} defaultValue="0" />
            <span>
              {" "}
              {this.state.score} of {this.state.total}
            </span>
          </p> */}
      </div>
    );
  }
}

export default GradeForm;
