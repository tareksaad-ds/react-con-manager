import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "Larry";
    return (
      <div className="App">
        <h1>The App Component</h1>
        <h4>Hello! {name} </h4>
        <h3>Tarek Saad</h3>
      </div>
    );
  }
}

export default App;
