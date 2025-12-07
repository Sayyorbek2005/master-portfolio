import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  background-color: var(--white);
  box-shadow: 0px 3px 5px var(--shadow-color);
  
  .header .max-width {
    padding: 0 20px;
  }
  .header-cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-50);
    padding: 0 20px;
  }

  .logo h1 {
    color: var(--black);
    cursor: pointer;
    font-weight: var(--font-weight-600);
    transition: 0.3s;

    &:hover {
      color: var(--primary-color);
    }
  }

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

  .icons {
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

  /* 📱 Responsive */
  @media (max-width: 900px) {

    
    .nav-list {
      display: none;
    }

    .menu-icon {
      display: block !important;
    }
  }

  .menu-icon {
    display: none;  /* Desktopda menyu ikonkasi yo‘q */
  }
`;
