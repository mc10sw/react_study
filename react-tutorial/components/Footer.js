import React, { Component } from "react";
import Main from "./Main";

export default class Footer extends Component {
  state = {
    name: "EEEE",
    age: 29,
    gender: "남"
  };
  render() {
    console.log("Footer");
    return (
      <div>
        <Main data2={this.props.data} />
        <button
          onClick={() => {
            this.props.change("Hello");
          }}
        >
          change name
        </button>
        {this.props.name}
      </div>
    );
  }
}
