import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h4 className="menuName">Rafael Seoanes</h4>
      <ul>
        {/* <li>Home</li> */}
        <li><a href="#projectsSection">Projects</a></li>
        <li><a href="#aboutSection">About</a></li>
        <li><a href="#contactSection">Contact</a></li>
      </ul>
    </div>
  );
}

export default Menu;
