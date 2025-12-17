import { RiMenuUnfold2Fill, RiCloseFill } from "react-icons/ri";
import { IoLanguage, IoColorFilterOutline } from "react-icons/io5";
import { HeaderContainer } from "./Header.styles";
import { useState } from "react";

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

  return (
    <HeaderContainer colorModal={colorModal} langModal={langModal}>
      <div className="max-width">
        <div className="header-cont">
          <div className="logo">
            <h1>Sayyorbek</h1>
          </div>

          {/* Desktop Nav */}
          <ul className="nav-list">
            <li>{lang === "uz" ? "Bosh sahifa" : lang === "ru" ? "Главная" : "Home"}</li>
            <li>{lang === "uz" ? "Men haqimda" : lang === "ru" ? "Обо мне" : "About"}</li>
            <li>{lang === "uz" ? "Ko‘nikmalar" : lang === "ru" ? "Навыки" : "Skills"}</li>
            <li>{lang === "uz" ? "Xizmatlar" : lang === "ru" ? "Услуги" : "Services"}</li>
            <li>Portfolio</li>
            <li>{lang === "uz" ? "Aloqa" : lang === "ru" ? "Контакты" : "Contact"}</li>
          </ul>

          {/* Icons */}
          <div className="icons">
            <IoColorFilterOutline onClick={() => setColorModal(!colorModal)} />
            <IoLanguage onClick={() => setLangModal(!langModal)} />
            <div className="menu-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <RiCloseFill /> : <RiMenuUnfold2Fill />}
            </div>

            {/* Color modal */}
            <div className="color-filter-modal">
              <div className="color red" onClick={() => changeColor("#ff6347")}></div>
              <div className="color blue" onClick={() => changeColor("#2563eb")}></div>
              <div className="color green" onClick={() => changeColor("#28a745")}></div>
              <div className="color yellow" onClick={() => changeColor("#ffc107")}></div>
              <div className="color purple" onClick={() => changeColor("#6f42c1")}></div>
              <div className="color orange" onClick={() => changeColor("#fd7e14")}></div>
            </div>

            {/* Language modal */}
            <div className="lang-modal">
              <button onClick={() => changeLanguage("uz")}>🇺🇿 Uzbek</button>
              <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
              <button onClick={() => changeLanguage("ru")}>🇷🇺 Russian</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => setSidebarOpen(false)}>{lang === "uz" ? "Bosh sahifa" : lang === "ru" ? "Главная" : "Home"}</li>
          <li onClick={() => setSidebarOpen(false)}>{lang === "uz" ? "Men haqimda" : lang === "ru" ? "Обо мне" : "About"}</li>
          <li onClick={() => setSidebarOpen(false)}>{lang === "uz" ? "Ko‘nikmalar" : lang === "ru" ? "Навыки" : "Skills"}</li>
          <li onClick={() => setSidebarOpen(false)}>{lang === "uz" ? "Xizmatlar" : lang === "ru" ? "Услуги" : "Services"}</li>
          <li onClick={() => setSidebarOpen(false)}>Portfolio</li>
          <li onClick={() => setSidebarOpen(false)}>{lang === "uz" ? "Aloqa" : lang === "ru" ? "Контакты" : "Contact"}</li>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;
