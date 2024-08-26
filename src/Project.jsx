import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="project">
      <img
        className="projectImg"
        src="https://cdn.dribbble.com/userupload/16161034/file/original-c116fc45335f98838eb21cf1e5fec598.jpg"
        alt=""
      />
      <h3 className="projectTitle">Elegant</h3>
      <h4 className="projectDescription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aliquid
        tempore asperiores vel perspiciatis a odio inventore facilis totam enim
        earum{" "}
      </h4>

      <h5>
        <a href="">Code</a>
      </h5>
      <h5>
        <a href="">Live</a>
      </h5>
    </div>
  );
}

export default Project;
