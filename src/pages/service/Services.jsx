import React, { useState } from 'react';
import { Row, Col, Timeline, Tabs, Typography, Modal } from "antd";
import { BookOutlined, SolutionOutlined } from "@ant-design/icons";
import { VscTerminalTmux, VscArrowRight } from "react-icons/vsc";
import { GrReactjs } from "react-icons/gr";
import { RiGitMergeLine } from "react-icons/ri";
import { Wrapper, TimelineWrapper, ServicesCards } from "./services.style";

const { Title, Text } = Typography;

const Services = ({ lang = 'en' }) => {
  const [modalOpen, setModalOpen] = useState(null);

  // --- QUALIFICATION DATA ---
  const educationItems = [
    {
      label: "2023 - Present",
      children: (
        <>
          <Title level={5}>Computer Engineering (BSc)</Title>
          <Text type="secondary">TUIT - University of IT</Text>
          <p style={{ fontSize: '12px', marginTop: '5px' }}>Focus: Algorithms, Control Theory and Semiconductor Physics.</p>
        </>
      ),
    },
    {
      label: "2022 - 2023",
      children: (
        <>
          <Title level={5}>Web Development</Title>
          <Text type="secondary">IT Academy (Advanced Level)</Text>
        </>
      ),
    },
  ];

  const workItems = [
    {
      label: "2024 - Present",
      children: (
        <>
          <Title level={5}>Middle Frontend Developer</Title>
          <Text type="secondary">Aminor CRM / Freelance</Text>
          <p style={{ fontSize: '12px', marginTop: '5px' }}>Building scalable SaaS solutions and high-performance dashboards.</p>
        </>
      ),
    },
    {
      label: "2025 - Present",
      children: (
        <>
          <Title level={5}>Fullstack Journey</Title>
          <Text type="secondary">Modern Web Ecosystems</Text>
        </>
      ),
    },
  ];

  // --- SERVICES DATA (Middle Level Skills) ---
  const servicesData = [
    {
      id: 0,
      icon: <VscTerminalTmux />,
      title: "UI/UX Development",
      desc: [
        "Pixel-Perfect conversion from Figma to React.",
        "Advanced animations using GSAP and Framer Motion.",
        "Implementation of Bento Grids and Neumorphic designs.",
        "Focus on Accessibility (A11y) and User Experience."
      ],
    },
    {
      id: 1,
      icon: <GrReactjs />,
      title: "Frontend Engineering",
      desc: [
        "Building robust apps with React 18 and Next.js (App Router).",
        "State management using Redux Toolkit and Zustand.",
        "Performance optimization (Memoization, Lazy Loading).",
        "Complex form handling with React Hook Form."
      ],
    },
    {
      id: 2,
      icon: <RiGitMergeLine />,
      title: "Architecture & Integration",
      desc: [
        "Deep integration with Supabase (Auth, DB, Storage).",
        "RESTful API & WebSocket real-time communication.",
        "Clean Architecture and SOLID principles implementation.",
        "Agile workflow with Git Flow and CI/CD basics."
      ],
    },
  ];

  return (
    <Wrapper id="services" data-aos="fade-up">
      <div className="title">
        <h1>Qualification</h1>
        <p>My professional journey</p>
      </div>

      <Tabs
        centered
        defaultActiveKey="education"
        items={[
          {
            key: "education",
            label: <span><BookOutlined /> Education</span>,
            children: (
              <TimelineWrapper>
                <Row justify="center">
                  <Col xs={24} md={16}>
                    <Timeline mode="alternate" items={educationItems} />
                  </Col>
                </Row>
              </TimelineWrapper>
            ),
          },
          {
            key: "work",
            label: <span><SolutionOutlined /> Experience</span>,
            children: (
              <TimelineWrapper>
                <Row justify="center">
                  <Col xs={24} md={16}>
                    <Timeline mode="alternate" items={workItems} />
                  </Col>
                </Row>
              </TimelineWrapper>
            ),
          },
        ]}
      />

      <ServicesCards>
        <div className="title" style={{ marginTop: '80px' }}>
          <h1>Services</h1>
          <p>Professional Solutions</p>
        </div>

        <div className="services-cont">
          {servicesData.map((service) => (
            <div key={service.id} className="service-box" onClick={() => setModalOpen(service.id)}>
              <div className="icon-wrapper">{service.icon}</div>
              <h1>{service.title}</h1>
              <p>
                View more <VscArrowRight />
              </p>
            </div>
          ))}
        </div>

        <Modal
          title={modalOpen !== null ? servicesData[modalOpen].title : ""}
          centered
          open={modalOpen !== null}
          onCancel={() => setModalOpen(null)}
          footer={null}
          width={450}
        >
          <div style={{ padding: "15px 0" }}>
            {modalOpen !== null &&
              servicesData[modalOpen].desc.map((line, idx) => (
                <div key={idx} className="modal-item">
                  <span className="bullet">✦</span>
                  <p>{line}</p>
                </div>
              ))}
          </div>
        </Modal>
      </ServicesCards>
    </Wrapper>
  );
};

export default Services;