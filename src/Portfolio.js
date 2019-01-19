import React, { Component } from 'react';
import Data from './project-data';

class Portfolio extends Component {
  render() {
    return (
      <div>
        {Data.map(item => (
          <div>
            {' '}
            <p>{item.name}</p>
            <p>{item.skills}</p>
            <p>{item.description}</p>
            <img src={item.img} width="400px" />
          </div>
        ))}
      </div>
    );
  }
}

export default Portfolio;
