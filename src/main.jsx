import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import About from "./About.jsx";
import Hero from "./hero.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
    <Hero />
    <About />
  </StrictMode>
);
