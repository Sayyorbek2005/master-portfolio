import React, { useState } from 'react'
import { SkillsContainer } from "./Skills.style.js";


const Skills = ({ lang }) => {

  const [activeSkill, setActiveSkill] = useState(1);

  return (
    <div className='skills'>
      <div className="max-width">
        <SkillsContainer>
          <h1 className="skills-title">My Skills</h1>

          <div className="skills-content display-flex">

            <div>
              <h1
                className={activeSkill === 1 ? "active" : ""}
                onClick={() => setActiveSkill(1)}
              >
                Frontend developer
              </h1>
              {activeSkill === 1 && (
                <div className="skills-date-content">

                <div className="texnologies">
                  <h2>HTML</h2>
                  <div>
                    <div className="a a-1">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                <div className="texnologies">
                  <h2>CSS</h2>
                  <div>
                    <div className="a a-2">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>

                <div className="texnologies">
                  <h2>Bootstrap</h2>
                  <div>
                    <div className="a a-4">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                <div className="texnologies">
                  <h2>SCSS</h2>
                  <div>
                    <div className="a a-5">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                <div className="texnologies">
                  <h2>Style Component</h2>
                  <div>
                    <div className="a a-3">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                <br />
                <div className="texnologies">
                  <h2>JavaScript</h2>
                  <div>
                    <div className="a a-6">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                <div className="texnologies">
                  <h2>React</h2>
                  <div>
                    <div className="a a-8">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                <div className="texnologies">
                  <h2>Vite</h2>
                  <div>
                    <div className="a a-9">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                <div className="texnologies">
                  <h2>Next.js</h2>
                  <div>
                    <div className="a a-7"> 
                      
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                <br />
                <div className="texnologies">
                  <h2>Redux Toolkit</h2>
                  <div>
                    <div className="a a-11">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                <div className="texnologies">
                  <h2>TypeScript</h2>
                  <div>
                    <div className="a a-10">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                <div className="texnologies">
                  <h2>Vue.js</h2>
                  <div>
                    <div className="a a-12">
                      <div className="b"></div>
                    </div>

                  </div>

                </div>

                 <div className="texnologies">
                  <h2>Git bash</h2>
                  <div>
                    <div className="a a-12">
                      <div className="b"></div>
                    </div>

                  </div>

                </div>

                 <div className="texnologies">
                  <h2>GitHub</h2>
                  <div>
                    <div className="a a-12">
                      <div className="b"></div>
                    </div>

                  </div>

                </div>

                 <div className="texnologies">
                  <h2>Node Js</h2>
                  <div>
                    <div className="a a-12">
                      <div className="b"></div>
                    </div>

                  </div>

                </div>



                 </div>
              )}
            </div>

            <div>
              <h1
                className={activeSkill === 2 ? "active" : ""}
                onClick={() => setActiveSkill(2)}
              >
                Backend developer
              </h1>
              {activeSkill === 2 && (
                <div className="skills-date-content">

                   <div className="texnologies">
                  <h2>Python</h2>
                  <div>
                    <div className="a a-5">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                 <div className="texnologies">
                  <h2>C++</h2>
                  <div>
                    <div className="a a-5">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                
                <div className="texnologies">
                  <h2>DataProvider</h2>
                  <div>
                    <div className="a a-5">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                  <div className="texnologies">
                  <h2>Telegram bot</h2>
                  <div>
                    <div className="a a-5">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>

                <div className="texnologies">
                  <h2>Working with APIs</h2>
                  <div>
                    <div className="a a-5">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>

                </div>
              )}
            </div>

            <div>
              <h1
                className={activeSkill === 3 ? "active" : ""}
                onClick={() => setActiveSkill(3)}
              >
                UI/UX designer
              </h1>
              {activeSkill === 3 && (
                  <div className="skills-date-content">

               
                <div className="texnologies">
                  <h2>Folder Structure</h2>
                  <div>
                    <div className="a a-5">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                <div className="texnologies">
                  <h2>Pixso</h2>
                  <div>
                    <div className="a a-3">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                
                <div className="texnologies">
                  <h2>Figma</h2>
                  <div>
                    <div className="a a-6">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>    



                 </div>
              )}
            </div>

            <div>
              <h1
                className={activeSkill === 4 ? "active" : ""}
                onClick={() => setActiveSkill(4)}
              >
                Web optimization
              </h1>
              {activeSkill === 4 && (
                 <div className="skills-date-content">

               
                <div className="texnologies">
                  <h2>SSL</h2>
                  <div>
                    <div className="a a-5">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                <div className="texnologies">
                  <h2>Domen</h2>
                  <div>
                    <div className="a a-3">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                
                <div className="texnologies">
                  <h2>Hosting</h2>
                  <div>
                    <div className="a a-6">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>    
                 <div className="texnologies">
                  <h2>SEO</h2>
                  <div>
                    <div className="a a-6">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>    



                 </div>
              )}
            </div>

            <div>
              <h1
                className={activeSkill === 5 ? "active" : ""}
                onClick={() => setActiveSkill(5)}
              >
                Soft Skills
              </h1>
              {activeSkill === 5 && (
      <div className="skills-date-content">

               
                <div className="texnologies">
                  <h2>Communication</h2>
                  <div>
                    <div className="a a-5">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                <div className="texnologies">
                  <h2>Teamwork</h2>
                  <div>
                    <div className="a a-3">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>
                
                <div className="texnologies">
                  <h2>Creativity</h2>
                  <div>
                    <div className="a a-6">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>    
                 <div className="texnologies">
                  <h2>Time Management</h2>
                  <div>
                    <div className="a a-6">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>    

                 <div className="texnologies">
                  <h2>Problem Solving</h2>
                  <div>
                    <div className="a a-6">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>     <div className="texnologies">
                  <h2>Critical Thinking</h2>
                  <div>
                    <div className="a a-6">
                      <div className="b"></div>
                    </div>

                  </div>
                </div>    



                 </div>
              )}
            </div>

          </div>
        </SkillsContainer>
      </div>
    </div>
  );
};

export default Skills;
