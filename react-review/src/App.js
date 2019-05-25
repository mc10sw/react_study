import React, { Component } from "react";
import Header from "./components/Header";

export default class App extends Component {
  state = {
    name: "kims",
    age: 20,
    address: "seoul"
  };

  render() {
    return (
      <div>
        [App.js]
        <Header
          name={this.state.name}
          age={this.state.age}
          address={this.state.address}
        />
      </div>
    );
  }
}
