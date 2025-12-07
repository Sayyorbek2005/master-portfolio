import styled from 'styled-components'

export const HomeContainer = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  min-height: calc(100vh - 60px);
  justify-content: center;
  gap: var(--gap-50);
  padding: 20px 0;

  .home-left {
    max-width: 50%;
  }
  .bar{
    flex-direction: column;
    gap: var(--gap-10);
    svg{
      font-size: var(--font-size-35);
      color: var(--primary-color);
      transition: all 0.3s ease;
      padding: 5px;

      &:hover{
        transform: translateX(5px);
      }

    }
  }

  .home-left h1 {
    font-size: var(--font-size-40);
    font-weight: var(--font-weight-600);
    color: var(--black);
  }

  .home-left h2 {
    font-size: var(--font-size-30);
    font-weight: var(--font-weight-500);
    color: var(--primary-color);
    margin-top: 10px;
  }

  .home-left p {
    margin-top: 15px;
    font-size: var(--font-size-18);
    line-height: 1.6;
    color: var(--gray);
  }
  .but{
    margin-top: 25px;
    gap: var(--gap-10);
    
  }
  .home-right .box {
    width: 350px;
    height: 350px;
    border-radius: 70px;
    transform: rotate(45deg);
    overflow: hidden;
    box-shadow: 0px 3px 5px var(--shadow-color);
    background-color: var(--primary-color);
  }
  
  .home-right .box img {
    width: 90%;
    transform: rotate(-45deg);
  }
  
  /* 📱 Responsive */
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
  .bar{
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction:row;
 gap: var(--gap-20);

 svg{
  font-size: var(--font-size-50);

  &:hover{
    transform: translateY(-5px);
  }

  
}
 }



    .home-right{
      margin-top: 50px;
    }
    
    .home-right .box {
      margin-top: 25px;
      width: 280px;
      height: 280px;
    }
  }
  `;
