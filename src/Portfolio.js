import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './style.css';
import Data from './project-data';

class Portfolio extends Component {
  render() {
    return (
      <Grid className="portfolio-container">
        <h1>Portfolio</h1>
        <Row className="show-grid">
          {Data.map(item => (
            <Col xs={12} sm={6} className="column">
              <h1>{item.name}</h1>
              <img src={item.img} className="screenshot" />
              <p>{item.description}</p>

              <h4 className="skills">{item.skills}</h4>

              <button className="project-link-btn">
                <a href={item.demo_link}>View Site</a>
              </button>
              <button className="project-link-btn">
                <a href={item.github}>GitHub</a>
              </button>
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }
}

export default Portfolio;
