import React from 'react';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="flexbox">
        <div className="introduction-container">
          <p className="x-large bold mobile-l">
            Hi! I'm Yuko, a front-end developer.
          </p>
          <p className="medium mobile-m">
            I use: HTML, CSS, JS (React, Redux), Node.js, MongoDB
          </p>
          <br />
          <p className="medium bold blue-green mobile-m">
            try move mouse on this area! 😆 🌈
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
