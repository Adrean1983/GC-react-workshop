import React, { Component } from "react";
import "./TimeLog.css";
import { diffInSeconds, formatDiffInSeconds } from "../../timeUtil";
import TimeEntry from "./TimeEntry";
import TimeForm from "./TimeForm";

class TimeLog extends Component {
  state = {
    entries: [
      { start: new Date("1995-12-17T03:24:00"), end: new Date("1995-12-17T04:12:19") },
      { start: new Date("1995-12-17T10:44:23"), end: new Date("1995-12-17T13:01:07") }
    ]
  };

  handleDelete = i => {
    this.setState(prev => {
      const newList = this.state.entries.slice(0);
      newList.splice(i, 1);
      return { entries: newList };
    });
  };

  handleAddEntry = entry => {
    this.setState(prev => {
      let newList = prev.entries.slice(0);
      newList.push(entry);
      return { entries: newList };
    });
  };

  // handleAdd = () => {
  //   this.setState(prev => {
  //     const newList = this.state.entries.splice(0);
  //     const newItem = {
  //       start: new Date(),
  //       end: new Date()
  //     };
  //     return { entries: [...newList, newItem] };
  //   });
  // };

  render() {
    const total = this.state.entries.reduce((sum, entry) => sum + diffInSeconds(entry.end, entry.start), 0);

    return (
      <div className="TimeLog">
        <h2>Time Log</h2>
        <TimeForm onAdd={this.handleAddEntry} />
        <div className="TimeLog__headings TimeLog__row">
          <span>Amount</span>
          <span>Start</span>
          <span>End</span>
        </div>
        {this.state.entries.map((data, i) => (
          <TimeEntry start={data.start} end={data.end} key={data.start} onDelete={() => this.handleDelete(i)} />
        ))}

        <div className="TimeLog__totals TimeLog__row">
          <span>
            {formatDiffInSeconds(total)} <span className="TimeLog__label">Total</span>
          </span>
        </div>
      </div>
    );
  }
}

export default TimeLog;
