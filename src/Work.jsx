import { useInView } from "react-intersection-observer";
import Project from "./Project";
import "./Work.css";

function Work() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className="workSection" id="projectsSection">
      <div className={inView ? "leftColumn  animate" : "leftColumn"}>
        <h3 className="projectsTitle">Projects</h3>
        <Project
          img={"https://i.imgur.com/FF3DZXC.png"}
          title={"PokeApp"}
          description={
            "Application that uses the Pokémon API to gather Pokémon information. Created with React, Vite, and Tailwind CSS."
          }
          githubLink={"https://github.com/Rafaseoanes/PokeApp/"}
          liveLink={"https://rafaseoanes.github.io/PokeApp/"}
        />

        <Project
          img={"https://i.imgur.com/AhZLD5e.png"}
          title={"Restaurant Page"}
          description={
            "Basic landing page that takes advantage of ES6 Modules. Created with Webpack, vanilla Javascipt, and vanilla CSS."
          }
          githubLink={"https://github.com/Rafaseoanes/Odin_Restaurant-Page/"}
          liveLink={"https://rafaseoanes.github.io/Odin_Restaurant-Page/"}
        />
      </div>
      <div className={inView ? "rightColumn  animate" : "rightColumn"}>
        <Project
          img={"https://i.imgur.com/rLvzBjC.jpeg"}
          title={"Tv Search App"}
          description={
            "Tv search app created using ReactJS. Consumption of the tvmaze API."
          }
          githubLink={"https://github.com/Rafaseoanes/Tv-shows-search"}
          liveLink={"https://rafaseoanes.github.io/Odin_Rock-Paper-Scissors/"}
        />

        <Project
          img={"https://i.imgur.com/GP5l5Ft.png"}
          title={"Weather App"}
          description={
            "Minimalist application that uses the Visual Crossing Weather API to gather weather information. Created with vanilla Javascript, Vite, and vanilla CSS."
          }
          githubLink={"https://github.com/Rafaseoanes/Odin_Weather-App/"}
          liveLink={"https://rafaseoanes.github.io/Odin_Weather-App/"}
        />

        <h4 className="githubLink">
          {" "}
          <a
            href="https://github.com/Rafaseoanes"
            target="_blank"
            rel="noopener noreferrer"
          >
            CHECK MORE PROJECTS 👈🏾
          </a>
        </h4>
      </div>
    </div>
  );
}

export default Work;
