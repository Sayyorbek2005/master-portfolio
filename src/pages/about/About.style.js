import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 70px 20px 40px 20px;

  /* ================= TITLE ================= */
  .title {
    text-align: center;
    margin-bottom: 100px;

    h1 {
      font-size: clamp(28px, 5vw, 40px);
    }

    p {
      color: var(--gray);
      font-size: clamp(16px, 1.2vw, 18px);
    }
  }

  /* ================= CONTENT ================= */
  .about-content {
    display: flex;
    justify-content: center;
    gap: var(--gap-20);
  }

  .about-left {
    width: 40%;
    text-align: center;

    img {
      width: 350px;
      max-width: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }

  .about-right {
    width: 40%;

    .description {
      color: var(--gray);
      margin: 20px 0px;
    }
  }

  /* ================= STATS ================= */
  .right-box-bar {
    display: flex;
    gap: var(--gap-30);
    margin: 30px 0;
    
    .stat-box {
        transition: all .4s ease;
      border: 1px solid var(--primary-color);
      border-radius: 10px;
      padding: 12px 16px;
      text-align: center;

      h2 {
        color: var(--primary-color);
        font-size: 24px;
      }

      p {
        font-size: 14px;
        color: var(--gray);
      }


      &:hover{
        transform: translateY(-10px);
      }

    }
  }

  /* ================= RESPONSIVE ================= */
  @media (max-width: 900px) {
    .about-content {
      flex-direction: column;
      align-items: center;
    }

    .about-left,
    .about-right {
      width: 100%;
    }
  }
`;
