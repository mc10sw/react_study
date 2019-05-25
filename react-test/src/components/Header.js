import React, { Component } from "react";

export default class Header extends Component {
  state = {
    title: "제목"
  };
  render() {
    return (
      <div>
        Header 컴포넌트입니다.
        <br />
        {this.state.title}
        <button
          onClick={() => {
            this.setState({ title: "새 타이틀!" });
            console.log("test : ", this.state.title);
          }}
        >
          타이틀 갱신
        </button>
      </div>
    );
  }
}
