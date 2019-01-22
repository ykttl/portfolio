import React from 'react';

const Project = props => {
  return (
    <div className="content">
      <p className="project-name">{props.project.name}</p>
      <div className="screenshot-container">
        <img src={props.project.img} className="screenshot" />
      </div>
      <p className="project-skills">{props.project.skills}</p>
      <button className="project-link-btn">
        <a href={props.project.demo_link}>
          View Site <i class="fas fa-desktop" />
        </a>
      </button>
      <button className="project-link-btn">
        <a href={props.project.github}>
          GitHub <i class="fab fa-github" />
        </a>
      </button>
    </div>
  );
};

export default Project;
