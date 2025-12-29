import { AboutContainer } from "./About.style";
import AboutImg from "../../assets/m.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="max-width">
        <AboutContainer>
          <div className="title">
            <h1>About Me</h1>
            <p>My introduction</p>
          </div>

          <div className="about-content">
            <div className="about-left">
              <img src={AboutImg} alt="My profile" />
            </div>

            <div className="about-right">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vero nisi velit harum quibusdam similique non sed nihil aspernatur corporis!
              </p>

              <div className="right-box-bar">
                <div className="stat-box">
                  <h2>+80</h2>
                  <p>Lorem, ipsum.</p>
                </div>
                <div className="stat-box">
                  <h2>+80</h2>
                  <p>Lorem, ipsum.</p>
                </div>
                <div className="stat-box">
                  <h2>+80</h2>
                  <p>Lorem, ipsum.</p>
                </div>
              </div>

              <button className="btn">Download CV</button>
            </div>
          </div>
        </AboutContainer>
      </div>
    </div>
  );
};

export default About;
