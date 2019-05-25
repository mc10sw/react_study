import React, { Component } from "react";
import Footer from "./Footer";

export default class Header extends Component {
  state = {
    name: this.props.anyung,
    age: 29,
    gender: "남"
  };
  change = name => {
    this.setState({ name: name });
  };
  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={e => {}}>이름바꾸기</button>
        <Footer name={this.state.name} change={this.change} />
      </div>
    );
  }
}
