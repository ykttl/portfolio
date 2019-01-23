import React, { Component } from 'react';
import Project from './Project';
import { Grid, Row, Col } from 'react-bootstrap';
import '../style.css';
import Data from '../project-data';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container" id="portfolio">
        <p className="portfolio-heading">Portfolio</p>
        <Grid>
          <Row className="portfolio-row">
            {Data.map(project => (
              <Col xs={12} sm={6} className="portfolio-column">
                <Project project={project} />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Portfolio;
