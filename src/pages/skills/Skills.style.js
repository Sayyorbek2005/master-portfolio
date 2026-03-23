import styled from "styled-components";

export const SkillsContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 100px 20px;

  .skills-title {
    text-align: center;
    margin-bottom: 50px;
    font-size: clamp(28px, 5vw, 40px);
    color: var(--primary-color);
  }

  .skills-menu {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-bottom: 40px;

    h1 {
      font-size: 18px;
      cursor: pointer;
      color: var(--black);
      transition: 0.3s;
      opacity: 0.6;
      
      &:hover, &.active {
        opacity: 1;
        color: var(--primary-color);
        transform: translateY(-5px);
        text-decoration: underline;
      }
    }
  }

  .skills-date-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    .texnologies {
      background: var(--white);
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0px 4px 15px rgba(0,0,0,0.05);
      transition: 0.3s;

      &:hover {
        transform: scale(1.03);
        box-shadow: 0px 8px 20px rgba(0,0,0,0.1);
      }

      .tech-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;

        h2 {
          font-size: 18px;
          color: var(--black);
        }

        span {
          font-weight: bold;
          color: var(--primary-color);
        }
      }
    }

    .a {
      width: 100%;
      height: 8px;
      background: #eee;
      border-radius: 10px;
      overflow: hidden;
    }

    .b {
      height: 100%;
      background: var(--primary-color);
      border-radius: 10px;
      transition: width 1s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 10px;
    margin-top: 350px;
    .skills-menu { gap: 15px; }
  }
`;