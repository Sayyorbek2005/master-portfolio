import { Row, Col, Timeline, Tabs, Typography, Modal } from "antd";
import { BookOutlined, SolutionOutlined } from "@ant-design/icons";
import { useState } from "react";

import {
  Wrapper,
  TimelineWrapper,
  ServicesCards,
} from "./services.style";

import { VscTerminalTmux, VscArrowRight } from "react-icons/vsc";
import { GrReactjs } from "react-icons/gr";
import { RiGitMergeLine } from "react-icons/ri";

const { Title, Text } = Typography;

const Services = () => {
  // modalOpen: null = hech qaysi ochiq emas, 0 = UI/UX, 1 = Frontend, 2 = Web Arch
  const [modalOpen, setModalOpen] = useState(null);

  // har bir service-box uchun content
  const modalContents = [
    {
      title: "UI/UX Designer",
      description: [
        "I specialize in UI/UX design, creating modern and responsive interfaces.",
        "Focus on user experience, usability, and aesthetics.",
        "Tools: Figma, Adobe XD, Sketch.",
      ],
    },
    {
      title: "Frontend Developer",
      description: [
        "I develop responsive and scalable web applications.",
        "Expertise in React, Next.js, Redux Toolkit, and TypeScript.",
        "Strong focus on performance and modern best practices.",
      ],
    },
    {
      title: "Web Architecture Design",
      description: [
        "I plan and design the structure of web applications.",
        "Skills include Information Architecture, Frontend Architecture, and scalable design patterns.",
        "Ensures optimized and maintainable code structure.",
      ],
    },
  ];

  return (
    <Wrapper>
      {/* Qualification / Timeline */}
      <div className="title">
        <h1>Qualification</h1>
        <p>My personal journey</p>
      </div>
      <Tabs
        centered
        defaultActiveKey="education"
        items={[
          {
            key: "education",
            label: (
              <>
                <BookOutlined /> Education
              </>
            ),
            children: (
              <TimelineWrapper>
                <Row justify="center">
                  <Col xs={24} md={14}>
                    <Timeline mode="alternate">
                      <Timeline.Item label="2009 - 2014">
                        <Title level={5}>Computer Engineer</Title>
                        <Text type="secondary">Peru - University</Text>
                      </Timeline.Item>

                      <Timeline.Item label="2014 - 2017">
                        <Title level={5}>Web Design</Title>
                        <Text type="secondary">Spain - Institute</Text>
                      </Timeline.Item>

                      <Timeline.Item label="2017 - 2019">
                        <Title level={5}>Web Development</Title>
                        <Text type="secondary">Peru - Institute</Text>
                      </Timeline.Item>

                      <Timeline.Item label="2019 - 2021">
                        <Title level={5}>Master in UI/UX</Title>
                        <Text type="secondary">Peru - Institute</Text>
                      </Timeline.Item>
                    </Timeline>
                  </Col>
                </Row>
              </TimelineWrapper>
            ),
          },
          {
            key: "work",
            label: (
              <>
                <SolutionOutlined /> Work
              </>
            ),
            children: (
              <TimelineWrapper>
                <Row justify="center">
                  <Col xs={24} md={14}>
                    <Timeline mode="alternate">
                      <Timeline.Item label="2021 - 2022">
                        <Title level={5}>Frontend Developer</Title>
                        <Text type="secondary">Remote</Text>
                      </Timeline.Item>

                      <Timeline.Item label="2022 - Present">
                        <Title level={5}>Fullstack Developer</Title>
                        <Text type="secondary">Company Name</Text>
                      </Timeline.Item>
                    </Timeline>
                  </Col>
                </Row>
              </TimelineWrapper>
            ),
          },
        ]}
      />

      <hr />

      {/* Services / Cards */}
      <ServicesCards>
        <div className="title">
          <h1>Services</h1>
          <p>What I Offer</p>
        </div>

        <div className="display-flex gap-50 services-cont">
          {/* UI/UX Designer */}
          <div className="service-box" onClick={() => setModalOpen(0)}>
            <VscTerminalTmux size={40} />
            <h1>UI/UX <br /> Designer</h1>
            <p className="display-flex gap-10">
              View more <VscArrowRight />
            </p>
          </div>

          {/* Frontend Developer */}
          <div className="service-box" onClick={() => setModalOpen(1)}>
            <GrReactjs size={40} />
            <h1>Frontend Developer</h1>
            <p className="display-flex gap-10">
              View more <VscArrowRight />
            </p>
          </div>

          {/* Web Architecture Design */}
          <div className="service-box" onClick={() => setModalOpen(2)}>
            <RiGitMergeLine size={40} />
            <h1>Web Architecture Design</h1>
            <p className="display-flex gap-10">
              View more <VscArrowRight />
            </p>
          </div>
        </div>

        {/* Modal */}
        {modalOpen !== null && (
          <Modal
            title={modalContents[modalOpen].title}
            centered
            open={true}
            onOk={() => setModalOpen(null)}
            onCancel={() => setModalOpen(null)} 
          >
            {modalContents[modalOpen].description.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </Modal>
        )}
      </ServicesCards>
    </Wrapper>
  );
};

export default Services;
