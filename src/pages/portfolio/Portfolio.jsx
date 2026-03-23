import React, { useState } from 'react';
import { Wrapper, FilterMenu, ProjectGrid, ProjectCard } from './Portfolio.style';
import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  // Middle/Strong Fullstack dasturchi uchun realistik loyihalar
  const projects = [
    {
      id: 1,
      title: "Enterprise CRM Platform",
      category: "fullstack",
      // Unsplash'dan yuqori sifatli dasturlash rasmlari
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=400&auto=format&fit=crop", 
      tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      desc: "Katta hajmdagi mijozlar bazasi va real-vaqtda tahliliy ma'lumotlarni boshqarish tizimi.",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "SaaS Project Management Tool",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop",
      tech: ["Next.js", "TypeScript", "Prisma", "AWS S3"],
      desc: "Jamoalar uchun vazifalarni kuzatish, fayl almashish va jadvallarni boshqarish platformasi (Jira analogi).",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "AI Image Generator Portal",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop",
      tech: ["React", "OpenAI API", "Mongoose", "Stripe"],
      desc: "Sun'iy intellekt yordamida rasm yaratish va ularni sotish imkoniyatiga ega obuna asosidagi servis.",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "E-Commerce MarketPlace",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=400&auto=format&fit=crop",
      tech: ["React", "Supabase", "Tailwind CSS", "Payme API"],
      desc: "Murakkab filtrlash, savatcha va to'lov tizimiga ega onlayn do'kon platformasi.",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "Real-Time Chat Application",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&auto=format&fit=crop",
      tech: ["React", "Node.js", "Redis", "MongoDB"],
      desc: "Guruhli suhbatlar, xabar holatlari va foydalanuvchilar onlaynligini ko'rsatuvchi chat ilovasi.",
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Dev.to Clone (Blogging Platform)",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=400&auto=format&fit=crop",
      tech: ["Next.js (App Router)", "MDX", "Cloudinary", "Auth.js"],
      desc: "Dasturchilar uchun maqolalar yozish, sharhlash va yoqtirish imkoniyatiga ega blog platformasi.",
      github: "#",
      demo: "#"
    },
    {
      id: 7,
      title: "React Components Library",
      category: "frontend",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop",
      tech: ["React", "TypeScript", "Storybook", "Webpack"],
      desc: "Dizayn tizimlari uchun qayta ishlatiladigan, testlangan va dökümantasyonlangan UI komponentlar to'plami.",
      github: "#",
      demo: "#"
    },
    {
      id: 8,
      title: "Cryptocurrency Dashboard",
      category: "frontend",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004009?q=80&w=400&auto=format&fit=crop",
      tech: ["React", "Chart.js", "CoinGecko API", "Framer Motion"],
      desc: "Kriptovalyuta narxlarini real-vaqtda kuzatish va grafiklar orqali tahlil qilish interfeysi.",
      github: "#",
      demo: "#"
    },
    {
      id: 9,
      title: "Scalable API Gateway",
      category: "backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop",
      tech: ["Node.js", "Express", "JWT", "Rate Limiting"],
      desc: "Mikroservislar uchun xavfsizlik, autentifikatsiya va so'rovlarni boshqarish markaziy shlyuzi.",
      github: "#",
      demo: "#"
    },
    {
      id: 10,
      title: "Telegram Bot Analytics",
      category: "backend",
      image: "https://images.unsplash.com/photo-1520004434532-6684164f378d?q=80&w=400&auto=format&fit=crop",
      tech: ["Python", "Django", "Celery", "PostgreSQL"],
      desc: "Katta hajmdagi bot foydalanuvchilari xatti-harakatlarini tahlil qilish va hisobotlar yaratish tizimi.",
      github: "#",
      demo: "#"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filterOptions = ['all', 'fullstack', 'frontend', 'backend'];

  return (
    <Wrapper id="portfolio" data-aos="fade-up">
      <div className="max-width">
        <div className="title">
          <h1>Recent Works</h1>
          <p>Portfolio</p>
        </div>

        <FilterMenu>
          {filterOptions.map((cat) => (
            <button 
              key={cat} 
              className={filter === cat ? 'active' : ''} 
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </FilterMenu>

        <ProjectGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} data-aos="zoom-in">
              <div className="img-box">
                {/* Rasmlar endi aniq ishlaydi */}
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="overlay">
                  <a href={project.github} target="_blank" rel="noreferrer" title="View Code">
                    <VscGithubAlt />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" title="Live Demo">
                    <VscLinkExternal />
                  </a>
                </div>
              </div>
              <div className="content">
                <div className="tech-tags">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </div>
    </Wrapper>
  );
};

export default Portfolio;