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
        
        <h1 className={loadAnimationName}>Rafael Seoanes</h1>
        {/* <img src={profileImg} className="profilePhoto" alt="Profile photo" /> */}
        <h2 className={loadAnimationTitle}>Frontend Developer</h2>
        {/* <img src={sign} className="signImg" alt="Name" /> */}
        {/* <img src={arrow} className={hideArrow} alt="arrow" /> */}
      </div>
    </>
  );
}

export default Hero;
