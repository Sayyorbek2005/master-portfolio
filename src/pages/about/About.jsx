import { AboutContainer } from "./About.style";
import AboutImg from "../../assets/m.jpg";
// ? icons
import { FaArrowRightLong } from "react-icons/fa6";

const About = ({ lang }) => {
  // Ko'p tilli matnlar jamlanmasi
  const content = {
    uz: {
      title: "Men haqimda",
      subtitle: "Kirish",
      description: "Men zamonaviy veb-ilovalarni yaratishga ixtisoslashgan Full-Stack Dasturchiman, UI/UX, dizayn va to‘liq funksionallik, jumladan frontend va backend, SSL, domenlar, hosting va SEO ga alohida e’tibor qarataman. Va saytlarni frontend arxitekturasini tuzish, saytlarni turlixil qurilmalarga moslashtirib beraman.",
      experience: "Yillik tajribam",
      projects: "Real loyihalarim",
      students: "O'quvchilarim",
      btn: "CV yuklab olish"
    },
    en: {
      title: "About Me",
      subtitle: "My introduction",
      description: "I am a Full-Stack Developer specializing in creating modern web applications, focusing on UI/UX, design, and full functionality including frontend, backend, SSL, domains, hosting, and SEO. I also architect frontend structures and ensure cross-device responsiveness.",
      experience: "Years of experience",
      projects: "Real projects",
      students: "Students",
      btn: "Download CV"
    },
    ru: {
      title: "Обо мне",
      subtitle: "Введение",
      description: "Я Full-Stack разработчик, специализирующийся на создании современных веб-приложений, уделяя особое внимание UI/UX, дизайну и полной функциональности, включая frontend и backend, SSL, домены, хостинг и SEO.",
      experience: "Лет опыта",
      projects: "Реальных проектов",
      students: "Учеников",
      btn: "Скачать CV"
    }
  };

  // Hozirgi tanlangan til matnlari (agar lang xato bo'lsa, 'en' default bo'ladi)
  const t = content[lang] || content.en;

  return (
    <div id="about" className="about">
      <div className="max-width">
        <AboutContainer>
          <div className="title">
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>

          <div className="about-content display-flex">
            <div className="about-left" data-aos="fade-right">
              <img src={AboutImg} alt="My profile" />
            </div>

            <div className="about-right" data-aos="fade-left">
              <p className="description">
                {t.description}
              </p>

              <div className="right-box-bar">
                <div className="stat-box">
                  <h2>4+</h2>
                  <p>{t.experience}</p>
                </div>
                <div className="stat-box">
                  <h2>15+</h2>
                  <p>{t.projects}</p>
                </div>
                <div className="stat-box">
                  <h2>50+</h2>
                  <p>{t.students}</p>
                </div>
              </div>

              <button className="btn display-flex">
                {t.btn} <FaArrowRightLong />
              </button>
            </div>
          </div>
        </AboutContainer>
      </div>
    </div>
  );
};

export default About;