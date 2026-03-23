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

  // --- TRANSLATIONS (Lug'at) ---
  const t = {
    uz: {
      qualTitle: "Malaka",
      qualSubtitle: "Mening professional yo'lim",
      education: "Ta'lim",
      experience: "Tajriba",
      viewMore: "Batafsil ko'rish",
      servicesTitle: "Xizmatlar",
      servicesSubtitle: "Professional Yechimlar",
      eduItems: [
        {
          date: "2023 - Hozirgi vaqt",
          title: "Kompyuter muhandisligi (BSc)",
          org: "TATU - Toshkent Axborot Texnologiyalari Universiteti",
          focus: "Asosiy e'tibor: Algoritmlar, Boshqaruv nazariyasi va yarimo'tkazgichlar fizikasi."
        },
        {
          date: "2022 - 2023",
          title: "Veb dasturlash",
          org: "IT Akademiya (Yuqori daraja)",
          focus: ""
        }
      ],
      workItems: [
        {
          date: "2024 - Hozirgi vaqt",
          title: "Middle Frontend Dasturchi",
          org: "Aminor CRM / Freelance",
          focus: "Kengayuvchan SaaS yechimlari va yuqori samarali dashboardlar qurish."
        },
        {
          date: "2025 - Hozirgi vaqt",
          title: "Fullstack sayohati",
          org: "Zamonaviy veb ekotizimlari",
          focus: ""
        }
      ],
      services: [
        {
          title: "UI/UX Dasturlash",
          desc: [
            "Figma-dan React-ga Pixel-Perfect o'tkazish.",
            "GSAP va Framer Motion yordamida ilg'or animatsiyalar.",
            "Bento Grid va Neumorphic dizaynlarni joriy qilish.",
            "Foydalanish qulayligi (A11y) va foydalanuvchi tajribasiga e'tibor."
          ]
        },
        {
          title: "Frontend muhandisligi",
          desc: [
            "React 18 va Next.js (App Router) bilan mustahkam ilovalar.",
            "Redux Toolkit va Zustand yordamida holatni boshqarish (State management).",
            "Samaradorlikni optimallashtirish (Memoization, Lazy Loading).",
            "React Hook Form bilan murakkab shakllar (forms) ustida ishlash."
          ]
        },
        {
          title: "Arxitektura va Integratsiya",
          desc: [
            "Supabase bilan chuqur integratsiya (Auth, DB, Storage).",
            "RESTful API va WebSocket real vaqt rejimida aloqa.",
            "Clean Architecture va SOLID tamoyillarini joriy qilish.",
            "Git Flow va CI/CD asoslari bilan Agile ish jarayoni."
          ]
        }
      ]
    },
    en: {
      qualTitle: "Qualification",
      qualSubtitle: "My professional journey",
      education: "Education",
      experience: "Experience",
      viewMore: "View more",
      servicesTitle: "Services",
      servicesSubtitle: "Professional Solutions",
      eduItems: [
        {
          date: "2023 - Present",
          title: "Computer Engineering (BSc)",
          org: "TUIT - University of IT",
          focus: "Focus: Algorithms, Control Theory and Semiconductor Physics."
        },
        {
          date: "2022 - 2023",
          title: "Web Development",
          org: "IT Academy (Advanced Level)",
          focus: ""
        }
      ],
      workItems: [
        {
          date: "2024 - Present",
          title: "Middle Frontend Developer",
          org: "Aminor CRM / Freelance",
          focus: "Building scalable SaaS solutions and high-performance dashboards."
        },
        {
          date: "2025 - Present",
          title: "Fullstack Journey",
          org: "Modern Web Ecosystems",
          focus: ""
        }
      ],
      services: [
        {
          title: "UI/UX Development",
          desc: [
            "Pixel-Perfect conversion from Figma to React.",
            "Advanced animations using GSAP and Framer Motion.",
            "Implementation of Bento Grids and Neumorphic designs.",
            "Focus on Accessibility (A11y) and User Experience."
          ]
        },
        {
          title: "Frontend Engineering",
          desc: [
            "Building robust apps with React 18 and Next.js (App Router).",
            "State management using Redux Toolkit and Zustand.",
            "Performance optimization (Memoization, Lazy Loading).",
            "Complex form handling with React Hook Form."
          ]
        },
        {
          title: "Architecture & Integration",
          desc: [
            "Deep integration with Supabase (Auth, DB, Storage).",
            "RESTful API & WebSocket real-time communication.",
            "Clean Architecture and SOLID principles implementation.",
            "Agile workflow with Git Flow and CI/CD basics."
          ]
        }
      ]
    },
    ru: {
      qualTitle: "Квалификация",
      qualSubtitle: "Мой профессиональный путь",
      education: "Образование",
      experience: "Опыт работы",
      viewMore: "Подробнее",
      servicesTitle: "Услуги",
      servicesSubtitle: "Профессиональные решения",
      eduItems: [
        {
          date: "2023 - Наст. время",
          title: "Компьютерная инженерия (BSc)",
          org: "ТАТУ - Университет ИТ",
          focus: "Фокус: Алгоритмы, теория управления и физика полупроводников."
        },
        {
          date: "2022 - 2023",
          title: "Веб-разработка",
          org: "IT-Академия (Продвинутый уровень)",
          focus: ""
        }
      ],
      workItems: [
        {
          date: "2024 - Наст. время",
          title: "Middle Frontend Разработчик",
          org: "Aminor CRM / Фриланс",
          focus: "Создание масштабируемых SaaS-решений и высокопроизводительных дашбордов."
        },
        {
          date: "2025 - Наст. время",
          title: "Fullstack путь",
          org: "Современные веб-экосистемы",
          focus: ""
        }
      ],
      services: [
        {
          title: "UI/UX Разработка",
          desc: [
            "Pixel-Perfect конвертация из Figma в React.",
            "Продвинутая анимация с использованием GSAP и Framer Motion.",
            "Внедрение Bento Grid и неоморфизма.",
            "Фокус на доступность (A11y) и пользовательский опыт."
          ]
        },
        {
          title: "Frontend Инженерия",
          desc: [
            "Надежные приложения на React 18 и Next.js (App Router).",
            "Управление состоянием с помощью Redux Toolkit и Zustand.",
            "Оптимизация производительности (Мемоизация, Lazy Loading).",
            "Обработка сложных форм с помощью React Hook Form."
          ]
        },
        {
          title: "Архитектура и интеграция",
          desc: [
            "Глубокая интеграция с Supabase (Auth, DB, Storage).",
            "RESTful API и WebSocket связь в реальном времени.",
            "Внедрение чистой архитектуры и принципов SOLID.",
            "Agile-процесс с основами Git Flow и CI/CD."
          ]
        }
      ]
    }
  };

  const currentT = t[lang] || t.en;

  // Icons array to keep track of icons separated from translated text
  const serviceIcons = [<VscTerminalTmux />, <GrReactjs />, <RiGitMergeLine />];

  // Map translations to Ant Design Timeline items format
  const educationItems = currentT.eduItems.map(item => ({
    label: item.date,
    children: (
      <>
        <Title level={5}>{item.title}</Title>
        <Text type="secondary">{item.org}</Text>
        {item.focus && <p style={{ fontSize: '12px', marginTop: '5px' }}>{item.focus}</p>}
      </>
    )
  }));

  const workItems = currentT.workItems.map(item => ({
    label: item.date,
    children: (
      <>
        <Title level={5}>{item.title}</Title>
        <Text type="secondary">{item.org}</Text>
        {item.focus && <p style={{ fontSize: '12px', marginTop: '5px' }}>{item.focus}</p>}
      </>
    )
  }));

  return (
    <Wrapper id="services" data-aos="fade-up">
      <div className="title">
        <h1>{currentT.qualTitle}</h1>
        <p>{currentT.qualSubtitle}</p>
      </div>

      <Tabs
        centered
        defaultActiveKey="education"
        items={[
          {
            key: "education",
            label: <span><BookOutlined /> {currentT.education}</span>,
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
            label: <span><SolutionOutlined /> {currentT.experience}</span>,
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
          <h1>{currentT.servicesTitle}</h1>
          <p>{currentT.servicesSubtitle}</p>
        </div>

        <div className="services-cont">
          {currentT.services.map((service, index) => (
            <div key={index} className="service-box" onClick={() => setModalOpen(index)}>
              <div className="icon-wrapper">{serviceIcons[index]}</div>
              <h1>{service.title}</h1>
              <p>
                {currentT.viewMore} <VscArrowRight />
              </p>
            </div>
          ))}
        </div>

        <Modal
          title={modalOpen !== null ? currentT.services[modalOpen].title : ""}
          centered
          open={modalOpen !== null}
          onCancel={() => setModalOpen(null)}
          footer={null}
          width={450}
        >
          <div style={{ padding: "15px 0" }}>
            {modalOpen !== null &&
              currentT.services[modalOpen].desc.map((line, idx) => (
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