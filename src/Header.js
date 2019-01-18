import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Hello! Im Yuko Kanaki Mazurek. </h1>
        <h2>
          I am currently looking for opportunities where I can contribute as a
          fontend developer.
        </h2>
        <button
          style={{
            width: "300px",
            height: "50px",
            background: "black",
            color: "white"
          }}
        >
          My Project
        </button>
      </div>
    );
  }
}

export default Header;
