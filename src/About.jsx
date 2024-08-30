import "./About.css";
import Marquee from "react-fast-marquee";

function About() {
  const imageLinks = [
    "https://iili.io/dwy7kuV.jpg",
    "https://iili.io/dwy7OyQ.jpg",
    "https://iili.io/dwy7N8x.jpg",
    "https://iili.io/dwy7vwB.jpg",
    "https://iili.io/dwy7Un1.jpg",
    "https://iili.io/dwy7gMF.jpg",
    "https://iili.io/dwy7r6g.jpg",
    "https://iili.io/dwy76Fa.jpg",
    "https://iili.io/dwy7PcJ.jpg",
    "https://iili.io/dwy7L9R.jpg",
    "https://iili.io/dwy7i8v.jpg",
    "https://iili.io/dwy7Qup.jpg",
    "https://iili.io/dwy7ttI.jpg",
    "https://iili.io/dwy7bnt.jpg",
    "https://iili.io/dwy7mMX.jpg",
    "https://iili.io/dwy7pPn.jpg",
    "https://iili.io/dwyYJSf.jpg",
    "https://iili.io/dwyYHcG.jpg",
    "https://iili.io/dwyY3Al.jpg",
    "https://iili.io/dwyY294.jpg",
  ];

  return (
    <div className="about">
      <h3 className="aboutTitle">More about me:</h3>
      <h4>
        <b>Frontend Developer | Photographer | Visual Arts Enthusiast | </b>
        <br />
        I'm a frontend developer with a deep passion for visual arts and
        photography, dedicated to crafting visually compelling and user-friendly
        web applications. With hands-on experience and ongoing studies in
        computer science and software engineering, I blend technical expertise
        with a strong creative vision. My focus is on aesthetic design, seamless
        interaction, and optimizing user experiences to create impactful digital
        solutions. I continuously adapt to new technologies and strive for
        perfection in every detail of my work.
      </h4>

      <h4>
        <b>Photography:</b>
      </h4>
      <div className="photographyGallery">
        <Marquee
          gradientWidth={50}
          gradientColor="black"
          gradient
          pauseOnHover
          className="scrollerGallery"
        >
          {imageLinks.map((src, index) => (
            <img
              key={index}
              className="photographyImg"
              src={src}
              alt={`img-${index}`}
            />
          ))}
        </Marquee>
      </div>
      <h4>
        <b>My Skills:</b>
      </h4>
      <ul className="skillsList">
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
        <li>GIT</li>
        <li>GITHUB</li>
        <li>WEBPACK</li>
        <li>VITE</li>
        <li>PHOTOSHOP</li>
        <li>FIGMA</li>
      </ul>
    </div>
  );
}

export default About;
