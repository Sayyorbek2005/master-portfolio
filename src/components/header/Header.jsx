import { RiMenuUnfold2Fill, RiCloseFill } from "react-icons/ri";
import { IoLanguage, IoColorFilterOutline } from "react-icons/io5";
import { HeaderContainer } from "./Header.styles";
import { useState } from "react";
import Aos from "aos";

const Header = ({ lang, setLang }) => {
  const [colorModal, setColorModal] = useState(false);
  const [langModal, setLangModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const changeColor = (color) => {
    document.documentElement.style.setProperty("--primary-color", color);
    setColorModal(false);
  };

  const changeLanguage = (selected) => {
    setLang(selected);
    setLangModal(false);
  };

  // ✅ SECTION GA SCROLL QILISH
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });

    // ✅ AOS'ni refresh qilish
    setTimeout(() => {
      Aos.refresh(); // scroll bo‘lganda animatsiya trigger bo‘lsin
    }, 100); // 100ms delay bilan scroll yakunlangach
  }

  setActiveSection(id); // active class uchun
  setSidebarOpen(false);
};



  const [activeSection, setActiveSection] = useState("home");


  return (
    <HeaderContainer data-aos="fade-down" colorModal={colorModal} langModal={langModal}>
      <div className="max-width" >
        <div className="header-cont">
          <div className="logo">
            <h1>Sayyorbek</h1>
          </div>

          {/* ================= Desktop Nav ================= */}
          <ul className="nav-list">
            <li 
             className={activeSection === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}>
              {lang === "uz"
                ? "Bosh sahifa"
                : lang === "ru"
                ? "Главная"
                : "Home"}
            </li>

            <li
             className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}>
              {lang === "uz"
                ? "Men haqimda"
                : lang === "ru"
                ? "Обо мне"
                : "About"}
            </li>

            <li
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => scrollToSection("skills")}>
              {lang === "uz"
                ? "Ko‘nikmalar"
                : lang === "ru"
                ? "Навыки"
                : "Skills"}
            </li>

            <li
            className={activeSection === "services" ? "active" : ""}
            onClick={() => scrollToSection("services")}>
              {lang === "uz"
                ? "Xizmatlar"
                : lang === "ru"
                ? "Услуги"
                : "Services"}
            </li>

            <li
            className={activeSection === "portfolio" ? "active" : ""}
            onClick={() => scrollToSection("portfolio")}>
              Portfolio
            </li>

            <li
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}>
              {lang === "uz"
                ? "Aloqa"
                : lang === "ru"
                ? "Контакты"
                : "Contact"}
            </li>
          </ul>

          {/* ================= Icons ================= */}
          <div className="icons">
            <IoColorFilterOutline
              onClick={() => setColorModal(!colorModal)}
            />
            <IoLanguage
              onClick={() => setLangModal(!langModal)}
            />

            <div
              className="menu-icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <RiCloseFill /> : <RiMenuUnfold2Fill />}
            </div>

            {/* ================= Color modal ================= */}
            <div className="color-filter-modal">
              <div className="color red" onClick={() => changeColor("#ff6347")}></div>
              <div className="color blue" onClick={() => changeColor("#2563eb")}></div>
              <div className="color green" onClick={() => changeColor("#28a745")}></div>
              <div className="color yellow" onClick={() => changeColor("#ffc107")}></div>
              <div className="color purple" onClick={() => changeColor("#6f42c1")}></div>
              <div className="color orange" onClick={() => changeColor("#fd7e14")}></div>
            </div>

            {/* ================= Language modal ================= */}
            <div className="lang-modal">
              <button onClick={() => changeLanguage("uz")}>🇺🇿 Uzbek</button>
              <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
              <button onClick={() => changeLanguage("ru")}>🇷🇺 Russian</button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Sidebar (Mobile) ================= */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => scrollToSection("home")}>
            {lang === "uz" ? "Bosh sahifa" : lang === "ru" ? "Главная" : "Home"}
          </li>

          <li onClick={() => scrollToSection("about")}>
            {lang === "uz" ? "Men haqimda" : lang === "ru" ? "Обо мне" : "About"}
          </li>

          <li onClick={() => scrollToSection("skills")}>
            {lang === "uz" ? "Ko‘nikmalar" : lang === "ru" ? "Навыки" : "Skills"}
          </li>

          <li onClick={() => scrollToSection("services")}>
            {lang === "uz" ? "Xizmatlar" : lang === "ru" ? "Услуги" : "Services"}
          </li>

          <li onClick={() => scrollToSection("portfolio")}>
            Portfolio
          </li>

          <li onClick={() => scrollToSection("contact")}>
            {lang === "uz" ? "Aloqa" : lang === "ru" ? "Контакты" : "Contact"}
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;
