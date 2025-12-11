import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: var(--white);
  box-shadow: 0 3px 5px rgba(0,0,0,0.1);

  .max-width {
    padding: 0 20px;
  }

  .header-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo h1 {
    color: var(--primary-color);
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    &:hover { opacity: 0.7; }
  }

  .nav-list {
    display: flex;
    list-style: none;
    gap: 30px;
  }

  .nav-list li {
    cursor: pointer;
    color: var(--black);
    font-weight: 400;
    transition: 0.3s;
    &:hover { color: var(--primary-color); }
  }

  .icons {
    position: relative;
    display: flex;
    gap: 15px;
  }

  .icons svg {
    font-size: 25px;
    cursor: pointer;
    color: var(--black);
    transition: 0.3s;
    &:hover { color: var(--primary-color); }
  }

  /* COLOR MODAL */
  .color-filter-modal {
    position: absolute;
    top: 40px;
    right: 0;
    background: #fff;
    padding: 12px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    display: ${({ colorModal }) => (colorModal ? "grid" : "none")};
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

  /* LANGUAGE MODAL */
  .lang-modal {
    position: absolute;
    top: 55px;
    right: -20px;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    display: ${({ langModal }) => (langModal ? "flex" : "none")};
    flex-direction: column;
    gap: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 999;
    width: 150px;
    text-align: start;
  }

  .lang-modal button {
    text-align: start;

    padding: 6px 10px;
    font-size: var(--font-size-18);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #fff;
    transition: 0.2s;
    &:hover {
      background: var(--primary-color);
      color: #fff;
    }
  }

  /* MENU ICON */
  .menu-icon { display: none; cursor: pointer; }
`;
