import React, { Component } from 'react';
import Project from './Project';
import { Grid, Row, Col } from 'react-bootstrap';
import '../style.css';
import Data from '../project-data';

class Portfolio extends Component {
  render() {
    return (
      <Row className="portfolio-row">
        {Data.map(project => (
          <Col xs={12} sm={6} className="portfolio-column">
            <Project project={project} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default Portfolio;
