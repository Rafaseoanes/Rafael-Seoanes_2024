import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import About from "./About.jsx";
import Hero from "./hero.jsx";
import Menu from "./Menu.jsx";
import Work from "./Work.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="circle orangeCircle"></div>
    <div className="circle mintCircle"></div>
    <div className="content">
      <Menu />
      <Hero />
      <Work />
      <About />
    </div>
  </StrictMode>
);
