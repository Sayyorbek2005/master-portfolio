import styled from 'styled-components';

export const HomeContainer = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 20px 20px;
  justify-content: space-around !important;
  gap: var(--gap-50);

  /* LEFT SIDE */
  .home-left {
    max-width: 50%;

    h1 {
      font-size: var(--font-size-40);
      font-weight: var(--font-weight-600);
      color: var(--black);
    }

    h2 {
      font-size: var(--font-size-30);
      font-weight: var(--font-weight-500);
      color: var(--primary-color);
      margin-top: 10px;
    }

    p {
      margin-top: 15px;
      font-size: var(--font-size-18);
      line-height: 1.6;
      color: var(--gray);
    }
  }

  .info-cont {
    justify-content: space-around;
  }

  /* SOCIAL BAR */
  .bar {
    flex-direction: column;
    gap: var(--gap-10);


    svg {
      font-size: var(--font-size-35);
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
    .box {
      width: 350px;
      height: 350px;
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

  /* RESPONSIVE */
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 0 20px;

    .home-left {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .bar {
      flex-direction: row;
      justify-content: center;
      gap: var(--gap-20);

      svg {
        font-size: var(--font-size-50);

        &:hover {
          transform: translateY(-5px);
        }
      }
    }

    .home-right {
      margin-top: 50px;

      .box {
        margin-top: 25px;
        width: 280px;
        height: 280px;
      }
    }
  }
`;
