import { useInView } from "react-intersection-observer";
import Project from "./Project";
import "./Work.css";

function Work() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className="workSection">
      <div className={inView ? "leftColumn  animate" : "leftColumn"}>
        <h3 className="projectsTitle">Projects</h3>
        <Project />
        <Project />
        <Project />
      </div>
      <div className={inView ? "rightColumn  animate" : "rightColumn"}>
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Work;
