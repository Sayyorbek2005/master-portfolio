import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999 !important;
  background-color: var(--white);
  box-shadow: 0px 3px 5px var(--shadow-color);

  .max-width {
    padding: 0 20px;
  }

  .header-cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-50);
  }

  /* === LOGO === */
  .logo h1 {
    color: var(--primary-color);
    font-weight: var(--font-weight-600);
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: var(--primary-color);
      opacity: 0.7;
    }
  }

  /* === NAV LIST === */
  .nav-list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: var(--gap-40);
  }

  .nav-list li {
    font-size: var(--font-size-18);
    font-weight: var(--font-weight-400);
    color: var(--black);
    cursor: pointer;
    border-bottom: 1.5px solid transparent;
    transition: 0.3s;

    &:hover {
      color: var(--primary-color);
      border-bottom-color: var(--primary-color);
    }
  }

  /* === ICONS WRAPPER === */
  .icons {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--gap-20);
  }

  .icons svg {
    font-size: var(--font-size-25);
    cursor: pointer;
    color: var(--black);
    transition: 0.3s;

    &:hover {
      color: var(--primary-color);
    }
  }

  /* === COLOR FILTER MODAL (styled-components bilan boshqariladi) === */
  .color-filter-modal {
    position: absolute;
    top: 40px;
    right: 0;
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    display: ${({ mode }) => (mode ? "grid" : "none")};
    grid-template-columns: repeat(3, 30px);
    gap: 10px;
    z-index: 999;
  }

  .color {
    width: 30px;
    height: 30px;
    border-radius: 6px;
    cursor: pointer;
  }

  .red { background: #ff6347; }
  .blue { background: #2563eb; }
  .green { background: #28a745; }
  .yellow { background: #ffc107; }
  .purple { background: #6f42c1; }
  .orange { background: #fd7e14; }

  /* === RESPONSIVE === */
  @media (max-width: 800px) {
    .nav-list {
      display: none;
    }

    .menu-icon {
      display: block !important;
    }

    .icons > svg{
      font-size: var(--font-size-35);
    }


    .responsive-navigation-bar {
      background-color: var(--white);
      /* background-color: #2563eb; */
      padding: var(--gap-20);
      line-height: 50px;
      box-shadow: 0px 3px 5px var(--shadow-color);
     display: block;
      flex-direction: column;
      width: 200px;
      position: fixed;
      top: 60px;
      right: 0px;
      bottom: 0px;
      z-index: 700;
  
      li {
        font-size: var(--font-size-30);
      }
  
    } 
  }

  .menu-icon {
    display: none;
  }



`;
