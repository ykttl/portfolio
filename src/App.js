import React, { Component } from 'react';
import './styles/style.css';
import P5Wrapper from 'react-p5-wrapper';
//import P5Wrapper from "./P5Wrapper";
import { Grid, Row, Col } from 'react-bootstrap';
import sketch from './p5-sketch';
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  state = { sketch: sketch };
  render() {
    return (
      <div>
        <P5Wrapper sketch={this.state.sketch} className="drawing" />
        <Header />
        <Landing />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
