import React, { Component } from "react";

class PosNegNumber extends Component {
  render() {
    let numberColor;
    if (this.props.number > 0) {
      numberColor = "blue";
    } else if (this.props.number < 0) {
      numberColor = "red";
    } else {
      numberColor = "black";
    }
    return (
      <div>
        <span style={{ color: `${numberColor}` }}>{this.props.number}</span>
      </div>
    );
  }
}

export default PosNegNumber;
