import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
      <Row className="justify-content-md-center landing">
        <Col md="auto">
          <div className="landing-container">
            <h1>Hi! I'm Yuko, a self-taught web developer.</h1>
            <h3>Born and raised in Japan, live in Vancouver.</h3>
          </div>
          <div>
            <h3>My Skills: </h3>
            <h2>
              HTML, CSS, JavaScript (React, Redux),
              <br />
              Node.js, MongoDB
            </h2>
          </div>
        </Col>
      </Row>
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
