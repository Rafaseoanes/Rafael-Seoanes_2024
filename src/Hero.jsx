import { useEffect, useState } from "react";

import profileImg from "./assets/profileImg.png";
import "./Hero.css";
import sign from "./assets/sign.png";
import arrow from "./assets/arrow.png";

function Hero() {
  const [loadAnimationName, setLoadAnimationName] = useState("nameStart");
  const [loadAnimationTitle, setLoadAnimationTitle] = useState("titleStart");
  const [hideArrow, setHideArrow] = useState("hideArrow");

  useEffect(() => {
    setTimeout(() => {
      setLoadAnimationName("name");
      setLoadAnimationTitle("title");
    }, "1000");
  });
  setTimeout(() => {
    setHideArrow("arrow");
  }, "2000");

  return (
    <>
      <div className="profileImgContainer">
        {/* <h1 className={loadAnimationName}>Rafael Seoanes</h1> */}
        {/* <img src={profileImg} className="profilePhoto" alt="Profile photo" /> */}
        {/* <h2 className={loadAnimationTitle}>
          I'm Rafael Seoanes a frontend developer with a background in
          photography
        </h2> */}
        {/* <img src={sign} className="signImg" alt="Name" /> */}
        {/* <img src={arrow} className={hideArrow} alt="arrow" /> */}
        <h3>I'm Rafael Seoanes -</h3>
        <h3>frontend developer with a background in photography</h3>
        <br />
        <br />
        <div className="about">
          <h4>
            I'm a frontend developer with a deep passion for visual arts and
            photography, specializing in creating visually compelling,
            user-friendly web applications. Currently, I'm halfway through my
            bachelor's in computer science and software engineering, which,
            combined with hands-on experience, allows me to blend technical
            expertise with creative vision.
            <br />
            <br />
            I've completed a full-stack web development bootcamp, but my true
            interest lies in frontend development. I like to focus on aesthetic
            design, user experience, and seamless interaction, ensuring every
            detail aligns with the overall vision. My self-taught journey in
            software development has equipped me with a diverse skill set,
            enabling me to adapt to new technologies and continuously refine my
            craft. Whether crafting a pixel-perfect interface or optimizing user
            flows, I'm dedicated to delivering a cohesive and impactful digital
            experience.
            <br />
            <br />
            <b>Keep scrolling!</b>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Hero;
