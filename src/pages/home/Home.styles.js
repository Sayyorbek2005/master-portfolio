import styled from 'styled-components';

export const HomeContainer = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 40px 20px;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  gap: var(--gap-50);

  /* LEFT SIDE */
  .home-left {
    flex: 1;
    max-width: 60%;

    h1 {
      font-size: clamp(28px, 5vw, 40px);
      font-weight: var(--font-weight-600);
      color: var(--black);
    }

    h2 {
      font-size: clamp(22px, 4vw, 30px);
      font-weight: var(--font-weight-500);
      color: var(--primary-color);
      margin-top: 10px;
    }

    p {
      margin-top: 15px;
      font-size: clamp(15px, 2.5vw, 18px);
      line-height: 1.6;
      color: var(--gray);
      max-width: 500px;
    }
  }

  .info-cont {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  /* SOCIAL BAR */
  .bar {
    display: flex;
    flex-direction: column;
    gap: var(--gap-10);

    svg {
      font-size: clamp(25px, 4vw, 35px);
      color: var(--primary-color);
      transition: all 0.3s ease;
      padding: 3px;

      &:hover {
        transform: translateX(5px);
      }
    }
  }

  /* RIGHT SIDE */
  .home-right {
    flex: 1;
    display: flex;
    justify-content: center;
    max-width: 40%;
    width: 100%;

    .box {
      width: clamp(260px, 28vw, 350px);
      height: clamp(260px, 28vw, 350px);
      border-radius: 70px;
      transform: rotate(45deg);
      overflow: hidden;
      box-shadow: 0px 3px 5px var(--shadow-color);
      background-color: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 90%;
        transform: rotate(-45deg);
      }
    }
  }

  /* TABLET */
  @media (max-width: 900px) {

      flex-direction: column-reverse;

      .info-cont{
        flex-direction: column-reverse;
        gap: var(--gap-30);
      }

      

    .home-left {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1{
        margin-top: 30px;

      }

      p{
        text-align: center;
      }
    }

    .bar {
      flex-direction: row;
      justify-content: center;
      gap: var(--gap-20);

      svg {
        font-size: 45px;

        &:hover {
          transform: translateY(-5px);
        }
      }
    }

    .home-right {
      margin-top: 40px;
      max-width: 50%;

      .box {
        width: 260px;
        height: 260px;
      }
    }
  }

  /* SMALL MOBILE */
  @media (max-width: 550px) {
    gap: 25px;
    padding: 10px;

    .home-left h1 {
      font-size: 26px;
    }

    .home-left h2 {
      font-size: 20px;
    }

    .bar svg {
      font-size: 35px;
    }

    .home-right .box {
      width: 230px;
      height: 230px;
      border-radius: 60px;
    }
  }
`;
