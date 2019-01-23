import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div md="auto">
          <div className="landing-container">
            <h1>Hi! I'm Yuko, a front-end developer.</h1>
            <h3>Born and raised in Japan, live in Vancouver.</h3>
          </div>
          <div className="landing-container">
            <h3>My Skills: </h3>
            <h3>
              HTML, CSS, JavaScript (React, Redux),
              <br />
              Node.js, MongoDB
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

// <button
// style={{
//   width: '300px',
//   height: '50px',
//   background: 'black',
//   color: 'white'
// }}
// >
// My Project
// </button>
