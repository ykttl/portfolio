import React, { Component } from 'react';
import Project from './Project';
import { Grid, Row, Col } from 'react-bootstrap';
// import '../style.css';
import PortfolioData from '../portfolio-data';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container" id="portfolio">
        <p className="heading">Portfolio</p>
        <Grid>
          <Row className="portfolio-row">
            {PortfolioData.map(project => (
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
