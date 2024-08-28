import profileImg from "./assets/profileImg.png";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="profileImgContainer">
        <h3>
          <span> I'm Rafael Seoanes -</span>
        </h3>
        <h3>
          <span> frontend developer with a background in photography</span>
        </h3>
        <br />
        <br />
        <div className="about">
          <h4>
            <span>
              I'm a frontend developer with a deep passion for visual arts and
              photography, specializing in creating visually compelling,
              user-friendly web applications. Currently, I'm halfway through my
              bachelor's in computer science and software engineering, which,
              combined with hands-on experience, allows me to blend technical
              expertise with creative vision.
              <br />
              <br />
              I've completed a full-stack web development bootcamp, but my true
              interest lies in frontend development. I like to focus on
              aesthetic design, user experience, and seamless interaction,
              ensuring every detail aligns with the overall vision. My
              self-taught journey in software development has equipped me with a
              diverse skill set, enabling me to adapt to new technologies and
              continuously refine my craft. Whether crafting a pixel-perfect
              interface or optimizing user flows, I'm dedicated to delivering a
              cohesive and impactful digital experience.
              <br />
              <br />
              <b>Keep scrolling!</b>
            </span>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Hero;
