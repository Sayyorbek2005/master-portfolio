import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background: #fcfcfc;

  .max-width {
    padding: 0 20px;
  }

  .title {
    text-align: center;
    margin-bottom: 40px;
    h1 { color: var(--primary-color); font-size: 32px; font-weight: 700; margin-bottom: 10px; }
    p { color: var(--gray); font-size: 14px; text-transform: uppercase; letter-spacing: 2px; }
  }
`;

export const FilterMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
  flex-wrap: wrap;

  button {
    padding: 8px 20px;
    border: 1px solid transparent;
    background: var(--white);
    border-radius: 12px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);

    &:hover, &.active {
      background: var(--primary-color);
      color: var(--white);
      border-color: var(--primary-color);
    }
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  // auto-fill 10 ta loyihani chiroyli joylashtiradi
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProjectCard = styled.div`
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(0,0,0,0.02);

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  }

  .img-box {
    position: relative;
    height: 220px;
    overflow: hidden;

    img { 
      width: 100%; 
      height: 100%; 
      object-fit: cover; 
      transition: 0.5s;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(var(--primary-rgb), 0.85);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      opacity: 0;
      transition: 0.4s;
      backdrop-filter: blur(3px);

      a {
        background: var(--white);
        color: var(--primary-color);
        width: 45px;
        height: 45px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        transition: 0.3s;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        &:hover { background: var(--black); color: var(--white); transform: scale(1.1); }
      }
    }
  }

  &:hover .img-box img { transform: scale(1.1); }
  &:hover .overlay { opacity: 1; }

  .content {
    padding: 25px;

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 15px;
      span {
        font-size: 11px;
        background: #f0f4f8;
        color: var(--primary-color);
        padding: 4px 10px;
        border-radius: 6px;
        font-weight: 600;
        letter-spacing: 0.5px;
      }
    }

    h3 { font-size: 20px; color: var(--black); margin-bottom: 10px; font-weight: 600; }
    p { font-size: 14px; color: var(--gray); line-height: 1.6; height: 66px; overflow: hidden; }
  }
`;