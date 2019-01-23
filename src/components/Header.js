import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <a href="#portfolio" className="menu-item">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-item">
              CONTACT
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
