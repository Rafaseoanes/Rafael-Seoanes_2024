import React from "react";
import Project from "./Project";
import "./Work.css";

function Work() {
  return (
    <div className="workSection">
      <div className="leftColumn">
        <h3 className="projectsTitle">Projects</h3>
        <Project />
        <Project />
        <Project />
      </div>
      <div className="rightColumn">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Work;
