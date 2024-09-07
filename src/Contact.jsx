import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contactSection" id="contactSection">
      <div></div>

      <div className="mail">
        <h3>Let's work together</h3>
        <h3>
          <a href="mailto:rafaseoanes9@gmail.com">rafaseoanes9@gmail.com</a>
        </h3>
      </div>

      <ul className="socialsLinks">
        <li>
          <a href="https://www.instagram.com/rafaseoanes/" target="blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="www.linkedin.com/in/rafael-seoanes" target="blank">
            Linkedin
          </a>
        </li>
        <li>
          <a href="mailto:rafaseoanes9@gmail.com">Mail</a>
        </li>
        <li>
          <a href="https://github.com/Rafaseoanes" target="blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://x.com" target="blank">
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
