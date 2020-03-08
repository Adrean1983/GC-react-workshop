import React, { Component } from "react";
import "./Weather.css";
import WeatherImage from "./WeatherImage";

class Weather extends Component {
  render() {
    let conditionsColor;
    let backgroundSun = {
      backgroundColor: "yellow"
    };
    let backgroundRainy = {
      backgroundColor: "blue"
    };
    let backgroundCloudy = {
      backgroundColor: "#E0E0E0"
    };

    if (this.props.conditions === "Cloudy") {
      conditionsColor = backgroundCloudy;
    } else if (this.props.conditions === "Rainy") {
      conditionsColor = backgroundRainy;
    } else {
      conditionsColor = backgroundSun;
    }

    return (
      <div className="Weather" style={conditionsColor}>
        <p>
          <WeatherImage conditions={this.props.conditions} />
          {this.props.conditions}
        </p>
        <p>
          <strong>High</strong> {this.props.highF} ({convertToCelsius(this.props.highF)}) <strong>Low </strong>
          {this.props.lowF} ({convertToCelsius(this.props.lowF)})
        </p>
      </div>
    );
  }
}

function convertToCelsius(tempF) {
  return Math.round(((tempF - 32) * 5) / 9);
}

export default Weather;
