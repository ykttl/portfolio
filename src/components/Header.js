import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div style={{ margin: '10px' }} className="header">
        <a href="#">ABOUT</a>
        <a href="#"> PORTFOLIO</a>
        <a href="#"> CONTACT</a>
      </div>
    );
  }
}

export default Header;
