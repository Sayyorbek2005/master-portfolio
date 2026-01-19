import styled from "styled-components";

export const Wrapper = styled.section`
   width: 100%;
  padding: 40px 20px;
  height: 100vh;
  padding: 150px 20px;
  /* ================= TITLE ================= */
  .title {
    text-align: center;
    margin-bottom: 50px;

    h1 {
      font-size: var(--font-size-30);
      color: var(--primary-color);
    }

    p {
      color: var(--gray);
      font-size: var(--font-size-20);
    }
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

export const Subtitle = styled.p`
  color: var(--gray);
  margin-top: 10px;
`;

export const TimelineWrapper = styled.div`
  margin-top: 50px;

  .ant-timeline-item-tail {
    border-color: var(--primary-color);
  }

  .ant-timeline-item-head {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }
`;



export const ServicesCards = styled.div`
 padding: 50px 0px;

  .service-box {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px 20px 50px 20px;
    max-width: 250px;
    width: 100%;
    min-height: 350px;
      height: 100%;
    text-align: left;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: pointer;
    line-height: 35px;

    &:hover {
      background-color: var(--primary-color);
      color: var(--white);
      transform: translateY(-10px);
    }
    &:hover svg{
      color: var(--white);
    }
    

    svg{
      font-size: var(--font-size-40);
      color: var(--primary-color);
      transition: all 0.4s ease;
    }

    h1 {
      margin-top: 20px;
      font-size: var(--font-size-25);
      font-weight: var(--font-weight-400);
       transition: all 0.4s ease;
    }
    p{
      font-size: var(--font-size-18);
      font-weight: var(--font-weight-200);
      color: var(--primary-color);
       transition: all 0.4s ease;
       justify-content: start;
    
       
      svg{
         font-size: var(--font-size-18);
      font-weight: var(--font-weight-200);
      color: var(--primary-color);
       transition: all 0.4s ease;

      }

    }

    &:hover p{
      color: var(--white);
    }

    &:hover p > svg{
      transform: translateX(10px);
    }


  }
  
`;    
