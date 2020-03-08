import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  state = {
    startTime: null,
    elapsed: 0
  };

  handleStart = () => {
    this.setState({
      startTime: new Date(),
      elapsed: 0
    });
    this.interval = setInterval(this.timerTick, 1000);
  };

  handleStop = () => {
    this.setState(prev => {
      return { startTime: (prev.startTime = null) };
    });
    clearInterval(this.interval); // stop the ticking!
  };

  timerTick = () => {
    this.setState(prev => {
      return { elapsed: prev.elapsed + 1 };
    });
  };

  render() {
    let startTime;
    if (this.state.startTime) {
      startTime = this.state.startTime.toLocaleTimeString();
    } else {
      startTime = "Stopped";
    }

    return (
      <div className="Timer">
        <p>
          <label>Start Time:</label> {startTime}
        </p>
        <p>
          <label>Elapsed:</label> {this.state.elapsed}s{" "}
        </p>
        <div>
          {this.state.startTime === null ? (
            <button onClick={this.handleStart}>Start</button>
          ) : (
            <button onClick={this.handleStop}>Stop</button>
          )}
        </div>
      </div>
    );
  }
}

export default Timer;
