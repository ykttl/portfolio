import React, { Component } from 'react';
import './styles/style.css';
import Canvas from 'react-p5-wrapper';
//import Canvas from "./Canvas";
import { Grid, Row, Col } from 'react-bootstrap';
import sketch from './sketch';
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  state = { sketch: sketch };
  render() {
    return (
      <div>
        <Canvas sketch={this.state.sketch} className="drawing" />
        <Header />
        <Landing />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
