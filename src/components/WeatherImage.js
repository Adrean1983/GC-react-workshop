import React, { Component } from "react";
import sunImg from "../image/weather-sun.svg";
import cloudsImg from "../image/weather-clouds.svg";
import rainImg from "../image/weather-rain.svg";

export class WeatherImage extends Component {
  render() {
    let src = sunImg;
    if (this.props.conditions.toLowerCase().includes("rain")) {
      src = rainImg;
    } else if (this.props.conditions.toLowerCase().includes("cloudy")) {
      src = cloudsImg;
    }
    return <img src={src} alt={this.props.conditions} />;
  }
}

export default WeatherImage;
