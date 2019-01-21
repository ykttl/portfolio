import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <a href="#">ABOUT</a>
        <a href="#"> PORTFOLIO</a>
        <a href="#"> CONTACT</a>

        <h1>Hi! I'm Yuko, a self-taught web developer.</h1>
        <h3>Born and raised in Japan, live in Vancouver.</h3>
        <br />
        <br />
        <br />
        <h3>My Skills: </h3>
        <h2>
          {' '}
          HTML, CSS, JavaScript (React, Redux),
          <br />
          Node.js, MongoDB
        </h2>
      </div>
    );
  }
}

export default Header;

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
