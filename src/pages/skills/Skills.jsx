import React, { useState } from 'react';
import { SkillsContainer } from "./Skills.style.js";

const Skills = ({ lang }) => {
  const [activeSkill, setActiveSkill] = useState(1);

  // Middle dasturchi uchun texnologiyalar va foizlar
  const skillsData = {
    1: {
      title: { uz: "Frontend Developer", en: "Frontend Developer", ru: "Frontend Разработчик" },
      techs: [
        { name: "React", level: "90%" },
        { name: "Next.js", level: "85%" },
        { name: "TypeScript", level: "80%" },
        { name: "JavaScript (ES6+)", level: "95%" },
        { name: "Redux Toolkit", level: "85%" },
        { name: "Styled Components", level: "90%" },
        { name: "Tailwind CSS", level: "95%" },
        { name: "Vite", level: "90%" },
        { name: "HTML5 / CSS3", level: "100%" },
      ]
    },
    2: {
      title: { uz: "Backend Developer", en: "Backend Developer", ru: "Backend Разработчик" },
      techs: [
        { name: "Supabase", level: "75%" },
        { name: "Node.js", level: "65%" },
        { name: "REST API", level: "90%" },
        { name: "PostgreSQL", level: "70%" },
        { name: "Firebase", level: "80%" },
        { name: "Python", level: "60%" },
      ]
    },
    3: {
      title: { uz: "UI/UX Designer", en: "UI/UX Designer", ru: "UI/UX Дизайнер" },
      techs: [
        { name: "Figma", level: "85%" },
        { name: "Adobe XD", level: "70%" },
        { name: "Responsive Design", level: "95%" },
        { name: "Bento Grids", level: "90%" },
      ]
    },
    4: {
      title: { uz: "Web Optimization", en: "Web Optimization", ru: "Оптимизация" },
      techs: [
        { name: "SEO", level: "80%" },
        { name: "Lighthouse Score", level: "90%" },
        { name: "Web Vitals", level: "85%" },
        { name: "Image Optimization", level: "95%" },
      ]
    },
    5: {
      title: { uz: "Soft Skills", en: "Soft Skills", ru: "Soft Skills" },
      techs: [
        { name: "Teamwork", level: "100%" },
        { name: "Communication", level: "90%" },
        { name: "Problem Solving", level: "95%" },
        { name: "Time Management", level: "90%" },
      ]
    }
  };

  return (
    <div id="skills" className='skills' data-aos="fade-up">
      <div className="max-width">
        <SkillsContainer>
          <h1 className="skills-title">
            {lang === 'uz' ? 'Mening ko‘nikmalarim' : lang === 'ru' ? 'Мои навыки' : 'My Skills'}
          </h1>

          <div className="skills-menu display-flex">
            {Object.keys(skillsData).map((id) => (
              <h1
                key={id}
                className={activeSkill === Number(id) ? "active" : ""}
                onClick={() => setActiveSkill(Number(id))}
              >
                {skillsData[id].title[lang] || skillsData[id].title.en}
              </h1>
            ))}
          </div>

          <div className="skills-content">
            <div className="skills-date-content">
              {skillsData[activeSkill].techs.map((skill, index) => (
                <div className="texnologies" key={index}>
                  <div className="tech-info">
                    <h2>{skill.name}</h2>
                    <span>{skill.level}</span>
                  </div>
                  <div className="a">
                    <div className="b" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SkillsContainer>
      </div>
    </div>
  );
};

export default Skills;