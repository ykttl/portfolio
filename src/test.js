import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
//import P5Wrapper from "./P5Wrapper";
import sketch from "./p5-sketch";

class App extends Component {
  state = { sketch: sketch };

  render() {
    return (
      <div>
        <P5Wrapper
          sketch={this.state.sketch}
          style={{
            position: "fixed",

            top: 0,
            left: 0,
            "z-index": -99
          }}
        />

        <div
          style={{
            "z-index": 1,
            position: "absolute",
            left: "100px",
            top: "100px"
          }}
        >
          <h1>Hello! Im Yuko. Hire meeeee</h1>
          <button>test</button>
          <button>test</button>
          <button>test</button>
          <button>test</button>
        </div>
      </div>
    );
  }
}

export default App;
