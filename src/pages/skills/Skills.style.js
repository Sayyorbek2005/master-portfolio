import styled from "styled-components";
export const SkillsContainer = styled.section`
    width: 100%;
    padding: 40px 20px;
    height: 100vh;
    padding: 150px 20px;
  /* ================= TITLE ================= */
  .skills-title {
    text-align: center;
    margin-bottom: 50px;
    font-size: clamp(28px, 5vw, 40px);
    color: var(--primary-color);

    p {
      color: var(--black);
      font-size: clamp(16px, 1.2vw, 18px);
    }
  }

    /* ================= CONTENT ================== */

    .skills-content {
      position: relative;
        gap: var(--gap-50);
        flex-wrap: wrap;
        justify-content: space-around;
        /* background-color: var(--gray); */

        h1 {
            color: var(--primary-color);
            padding: 10px;
            font-size: var(--font-size-20);
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover {
              transform: translateY(-10px);
              /* text-shadow: 0px 5px 15px var(--primary-color); */
              text-decoration: underline ;
            }


        }

        .active {
            text-decoration: underline ;
            
        }

        /* ? skills date content */
        .skills-date-content {
            /* background-color: var(--primary-color); */
            color: var(--white);
            padding: 20px;
            position: absolute;
            left: 0;
            right: 0;
            top: 50px;
            min-height: 200px;
            margin: auto; 
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: var(--gap-30);
            justify-content: center;
            border-radius: 10px;
            /* box-shadow: 0px 5px 15px rgba(0,0,0,0.2); */

            .texnologies {
              background-color: var(--white);
              color: var(--black);
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
              transition: all 0.3s ease-in-out;
              box-shadow: 0px 0px 10px rgba(0,0,0,0.1);

              /* &:hover {
                transform: translateY(-5px);
                box-shadow: 0px 10px 15px ;
              } */
            }

            h2 {
              color: var(--black);
              font-size: var(--font-size-25);
            }   


            p{
              font-size: var(--font-size-20);
            }

            .a {
              width: 150px;
              height: 10px;
              background-color: var(--white);
              border: 1px solid var(--primary-color);
              border-radius: 5px;
              overflow: hidden;
              margin-top: 5px;
            }

            .b {
              width: 80%;
              height: 100%;
              background-color: var(--primary-color);
            } 

        }

}

    

`