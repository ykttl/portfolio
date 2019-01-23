import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="flexbox">
          <div className="introduction-box">
            <h1>Hi! I'm Yuko, a front-end developer.</h1>
            <h3>I use: HTML, CSS, JS (React, Redux), Node.js, MongoDB</h3>
            <br />
            <h4 className="blue">try move mouse on this area! 😆 🌈</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

// icon
// <i class="icon devicon-mongodb-plain-wordmark " />
// <i class="icon devicon-react-original-wordmark " />
// <i class="icon devicon-html5-plain-wordmark " />
// <i class="icon devicon-css3-plain-wordmark " />
// <i class="icon devicon-javascript-plain " />
// <i className="icon node devicon-nodejs-plain-wordmark " />

// <h3 className="blue">My Skills: </h3>
// <h4 className="blue">HTML, CSS, JavaScript, React, Redux,</h4>
// <h4 className="blue
//Born and raised in Japan, live in Vancouver.