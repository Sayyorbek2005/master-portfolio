import { AboutContainer } from "./About.style";
import AboutImg from "../../assets/m.jpg";
// ? icons
import { FaArrowRightLong } from "react-icons/fa6";


const About = ({ lang }) => {
  return (
    <div id="about" className="about">
      <div className="max-width">
        <AboutContainer>
          <div className="title">
            <h1>About Me</h1>
            <p>My introduction</p>
          </div>

          <div className="about-content display-flex">
            <div className="about-left" data-aos="fade-right">
              <img src={AboutImg} alt="My profile" />
            </div>

            <div className="about-right"  data-aos="fade-left">
              <p className="description">
               Men zamonaviy veb-ilovalarni yaratishga ixtisoslashgan Full-Stack Dasturchiman, UI/UX, dizayn va to‘liq funksionallik, jumladan frontend va backend, SSL, domenlar, hosting va SEO ga alohida e’tibor qarataman. va saytlarni frontend arxitekturasini tuzish, saytlarni turlixil qurilmalarga moslashtirib beraman. 
              </p>

              <div className="right-box-bar">
                <div className="stat-box">
                  <h2>4+</h2>
                  <p>Yillik tajribam</p>
                </div>
                <div className="stat-box">
                  <h2>15+</h2>
                  <p>Real loyihalarim</p>
                </div>
                <div className="stat-box">
                  <h2>50+</h2>
                  <p>O'quvchilarim</p>
                </div>
              </div>

              <button className="btn display-flex">Download CV <FaArrowRightLong />
              </button>
            </div>
          </div>
        </AboutContainer>
      </div>
    </div>
  );
};

export default About;
