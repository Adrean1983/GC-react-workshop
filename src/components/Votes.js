import React, { Component } from "react";
import "./Votes.css";

class Votes extends Component {
  state = {
    chocolate: 0,
    strawberry: 0,
    vanilla: 0
  };

  handleVote = flavor => {
    switch (flavor) {
      case "chocolate":
        this.setState(prev => {
          return { chocolate: prev.chocolate + 1 };
        });
        break;
      case "vanilla":
        this.setState(prev => {
          return { vanilla: prev.vanilla + 1 };
        });
        break;
      case "strawberry":
        this.setState(prev => {
          return { strawberry: prev.strawberry + 1 };
        });
        break;
      default:
        this.setState({
          chocolate: 0,
          strawberry: 0,
          vanilla: 0
        });
        break;
    }
  };

  calculatePercent = (votes, total) => {
    return ((votes / total) * 100).toFixed(2);
  };

  render() {
    const total = this.state.chocolate + this.state.vanilla + this.state.strawberry;
    let chocolatePercent = this.state.chocolate > 0 ? this.calculatePercent(this.state.chocolate, total) : 0;
    let vanillaPercent = this.state.vanilla > 0 ? this.calculatePercent(this.state.vanilla, total) : 0;
    let strawberryPercent = this.state.strawberry > 0 ? this.calculatePercent(this.state.strawberry, total) : 0;
    return (
      <div className="Votes">
        <p>
          <label>Chocolate: </label> {this.state.chocolate} ({chocolatePercent}%)
          <span style={{ backgroundColor: "brown", height: "10px", width: `${chocolatePercent}%` }}></span>
        </p>
        <p>
          <label>Vanilla: </label> {this.state.vanilla} ({vanillaPercent}%)
          <span style={{ backgroundColor: "white", height: "10px", width: `${vanillaPercent}%` }}></span>
        </p>

        <p>
          <label>Strawberry: </label> {this.state.strawberry} ({strawberryPercent}%)
          <span style={{ backgroundColor: "red", height: "10px", width: `${strawberryPercent}%` }}></span>
        </p>
        <div>
          <button onClick={() => this.handleVote("chocolate")}>Chocolate</button>
          <button onClick={() => this.handleVote("vanilla")}>Vanilla</button>
          <button onClick={() => this.handleVote("strawberry")}>Strawberry</button>
          <button onClick={this.handleVote}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Votes;
