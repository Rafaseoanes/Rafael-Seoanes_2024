import { useEffect, useState } from "react";

import profileImg from "./assets/profileImg.png";
import "./Hero.css";
import sign from "./assets/sign.png";

function Hero() {
  const [loadAnimationName, setLoadAnimationName] = useState("nameStart");
  const [loadAnimationTitle, setLoadAnimationTitle] = useState("titleStart");

  useEffect(() => {
    setTimeout(() => {
      setLoadAnimationName("name");
      setLoadAnimationTitle("title")
    }, "1000");

   
  });

  return (
    <>
      <div className="profileImgContainer">
        <div className="circle orangeCircle"></div>
        <div className="circle mintCircle"></div>
        <h1 className={loadAnimationName}>Rafael Seoanes</h1>
        {/* <img src={profileImg} className="profilePhoto" alt="Profile photo" /> */}
        <h2 className={loadAnimationTitle}>Frontend Developer</h2>
        {/* <img src={sign} className="signImg" alt="Name" /> */}
      </div>
    </>
  );
}

export default Hero;
