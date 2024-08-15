import profileImg from "./assets/profileImg.png";
import "./Hero.css"


function Hero() {
  return (
    <>
      <div className="profileImgContainer">
        <img src={profileImg} className="profilePhoto" alt="Profile photo" />
      </div>
    </>
  );
}

export default Hero;
