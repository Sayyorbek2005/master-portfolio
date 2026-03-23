import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 100px 20px;
  min-height: 100vh;

  .title {
    text-align: center;
    margin-bottom: 40px;

    h1 {
      font-size: clamp(24px, 4vw, 32px);
      color: var(--primary-color);
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      color: var(--gray);
      font-size: 16px;
      letter-spacing: 1px;
    }
  }

  /* Ant Design Tabs custom styles */
  .ant-tabs-nav::before { border-bottom: none !important; }
  .ant-tabs-tab-active .ant-tabs-tab-btn { color: var(--primary-color) !important; }
  .ant-tabs-ink-bar { background: var(--primary-color) !important; }
`;

export const TimelineWrapper = styled.div`
  margin-top: 40px;
  padding: 20px;

  /* Timeline line color */
  .ant-timeline-item-tail {
    border-inline-start: 2px solid var(--primary-color) !important;
  }

  /* Timeline dot color */
  .ant-timeline-item-head {
    background-color: var(--white);
    border-color: var(--primary-color) !important;
    border-width: 2px;
  }

  .ant-typography {
    margin-bottom: 0 !important;
  }
`;

export const ServicesCards = styled.div`
  .services-cont {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
  }

  .service-box {
    background: var(--white);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    padding: 40px 30px;
    min-height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.02);

    .icon-wrapper svg {
      font-size: 40px;
      color: var(--primary-color);
      transition: 0.4s;
    }

    h1 {
      margin: 20px 0 15px;
      font-size: 22px;
      font-weight: 600;
      color: var(--black);
      transition: 0.4s;
    }

    p {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--primary-color);
      font-size: 15px;
      transition: 0.4s;

      svg {
        transition: 0.4s;
      }
    }

    &:hover {
      background-color: var(--primary-color);
      transform: translateY(-12px);
      box-shadow: 0 20px 40px rgba(var(--primary-rgb), 0.3);

      h1, p, .icon-wrapper svg {
        color: var(--white);
      }

      p svg {
        transform: translateX(8px);
        color: var(--white);
      }
    }
  }

  /* Modal Styles inside styled-components */
  .modal-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    margin-bottom: 12px;
    
    .bullet {
      color: var(--primary-color);
      font-weight: bold;
    }
    p {
      margin: 0;
      font-size: 15px;
      color: #555;
    }
  }
`;