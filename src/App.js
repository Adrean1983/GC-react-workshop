import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Votes from "./components/Votes";
import Contact from "./components/Contact";
import Grade from "./components/Grade";
import Weather from "./components/Weather";

function App() {
  let person = {
    name: "Detroit",
    age: 200
  };

  let gr = {
    title: "Quiz",
    score: 9,
    total: 10
  };

  return (
    <div className="App">
      <Counter />
      <Weather conditions="Cloudy" highF={100} lowF={50} />
      <Weather conditions="Sunny" highF={100} lowF={50} />
      <Grade total={gr.total} score={gr.score} passing={gr.score > 6} title="Worksheet" />
      <Grade total={10} score={7} passing={false} title="Worksheet" />
      <Contact name="David" age={7} />
      <Contact name="Adrean" age={10} />
      <Contact name={person.name} age={person.age} />
      <Timer />
      <Votes />
    </div>
  );
}

export default App;
