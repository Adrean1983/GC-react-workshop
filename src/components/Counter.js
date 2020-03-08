import React, { Component } from "react";
import "./Counter.css";
import PosNegNumber from "./PosNegNumber";

class Counter extends Component {
  state = {
    count: 14
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleUp = () => {
    this.setState(prev => {
      return { count: prev.count + 1 };
    });
  };
  handleCount = diff => {
    this.setState(prev => {
      return { count: prev.count + diff };
    });
  };

  render() {
    // let countColor;
    // if (this.state.count < 0) {
    //   countColor = <p className="Negative">{this.state.count}</p>;
    // } else {
    //   countColor = <p>{this.state.count}</p>;
    // }
    return (
      <div className="Counter">
        {/* {countColor} */}
        <PosNegNumber number={this.state.count} />
        <div>
          <button onClick={() => this.handleCount(-1)}>Down</button>
          {this.state.count !== 0 && <button onClick={this.handleReset}>Reset</button>}
          <button onClick={this.handleUp}>Up</button>
        </div>
      </div>
    );
  }
}

export default Counter;
