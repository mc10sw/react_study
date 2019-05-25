import React, { Component } from "react";
import Footer from "./Footer";

export default class Header extends Component {
  state = {
    name: "",
    age: 0,
    address: ""
  };

  render() {
    return (
      <div>
        [Header]
        <br />
        name : {this.state.name}
        <br />
        age : {this.state.age}
        <br />
        address : {this.state.address}
        <br />
        <button
          onClick={() => {
            this.setState({
              name: this.props.name,
              age: this.props.age,
              address: this.props.address
            });
          }}
        >
          App.js에서 받은 데이터로 state 갱신
        </button>
        <Footer />
      </div>
    );
  }
}
