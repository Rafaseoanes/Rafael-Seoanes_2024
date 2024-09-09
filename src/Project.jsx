import React from "react";
import "./Project.css";

function Project({ img, title, description, githubLink, liveLink }) {
  return (
    <div className="project">
      <img className="projectImg" src={img} alt="" />
      <h3 className="projectTitle">{title}</h3>
      <h4 className="projectDescription">{description}</h4>

      <h5>
        <a href={githubLink} target="blank">
          Code
        </a>
      </h5>
      <h5>
        <a href={liveLink} target="blank">
          Live
        </a>
      </h5>
    </div>
  );
}

export default Project;
