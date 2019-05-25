import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import axios from "axios";

export default class App extends Component {
  /*
  state = {
    user: null,
    age: null
  };
  constructor(props) {
    super(props);
    axios({
      url: "http://localhost:3001",
      result: {
        name: "kims",
        age: 30
      },
      // method : get(거의안씀), post, delete, patch, put...
      method: "get",
      headers: {
        secure: "iwefjiew81230rf"
      }
      // success
    })
      .then(result => {
        console.log(result);
        this.setState(result.data);
        // failed
      })
      .catch(e => {
        console.error(e);
      });
      */

  state = {
    users: [
      { name: "a", age: "1" },
      { name: "b", age: "2" },
      { name: "c", age: "3" },
      { name: "d", age: "4" }
    ]
  };

  render() {
    return (
      /*
      <div>
        이름:{this.state.user}, 나이:{this.state.age}
      </div>
      */
      <div>
        <ol>
          {this.state.users.map((data, index) => {
            return (
              <li key={index}>
                이름: {data.name}, 나이: {data.age}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
