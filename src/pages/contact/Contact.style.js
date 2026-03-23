import styled from "styled-components";

export const ContactWrapper = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;

  .title {
    text-align: center;
    margin-bottom: 60px;
    h1 { color: var(--primary-color); font-size: 32px; font-weight: 700; }
    p { color: var(--gray); font-size: 14px; text-transform: uppercase; letter-spacing: 2px; }
  }

  .contact-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 50px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const InfoCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .info-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: 0.3s;

    &:hover {
      transform: translateX(10px);
      box-shadow: 0 10px 30px rgba(var(--primary-rgb), 0.1);
    }

    .icon {
      font-size: 24px;
      color: var(--primary-color);
    }

    h3 { font-size: 18px; color: #333; margin-bottom: 5px; }
    p { font-size: 14px; color: var(--gray); }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .input-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width: 576px) { grid-template-columns: 1fr; }
  }

  .input-box {
    input, textarea {
      width: 100%;
      padding: 15px 20px;
      background: #f8f9fa;
      border: 2px solid transparent;
      border-radius: 12px;
      outline: none;
      font-size: 15px;
      transition: 0.3s;

      &:focus {
        border-color: var(--primary-color);
        background: #fff;
        box-shadow: 0 5px 15px rgba(var(--primary-rgb), 0.05);
      }
    }
    textarea { resize: none; }
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 15px 35px;
    background: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    width: fit-content;

    &:hover {
      opacity: 0.9;
      transform: translateY(-3px);
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
    }

    svg { font-size: 18px; }
  }
`;