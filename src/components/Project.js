import React from 'react';

const Project = props => {
  return (
    <div className="project-container">
      <p className="large bold dark-blue">{props.project.name}</p>

      <img src={props.project.img} className="screenshot" />

      <p className="small dark-blue project-skills">{props.project.skills}</p>
      {props.project.demo_link !== 'N/A' && (
        <button className="project-link-btn">
          <a href={props.project.demo_link}>
            View Site <i class="fas fa-desktop" />
          </a>
        </button>
      )}

      <button className="project-link-btn">
        <a href={props.project.github}>
          GitHub <i class="fab fa-github" />
        </a>
      </button>
    </div>
  );
};

export default Project;
