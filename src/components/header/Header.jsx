import { RiMenuUnfold2Fill } from "react-icons/ri";
import { IoLanguage, IoColorFilterOutline } from "react-icons/io5";
import { HeaderContainer } from "./Header.styles";
import { useState } from "react";

const Header = ({ lang, setLang }) => {
  const [colorModal, setColorModal] = useState(false);
  const [langModal, setLangModal] = useState(false);

  // Rang almashtiruvchi funksiya
  const changeColor = (color) => {
    // --primary-color CSS variable ni o'zgartirish
    document.documentElement.style.setProperty("--primary-color", color);
    setColorModal(false);
  };

  // Tilni o'zgartirish
  const changeLanguage = (selected) => {
    setLang(selected);
    setLangModal(false);
  };

  // Responsive menu
  const toggleMenu = () => {
    const nav = document.querySelector(".responsive-navigation-bar");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  };

  return (
    <HeaderContainer colorModal={colorModal} langModal={langModal}>
      <div className="max-width">
        <div className="header-cont">
          {/* Logo */}
          <div className="logo">
            <h1>Sayyorbek</h1>
          </div>

          {/* Nav list */}
          <ul className="nav-list responsive-navigation-bar">
            <li>{lang === "uz" ? "Bosh sahifa" : lang === "ru" ? "Главная" : "Home"}</li>
            <li>{lang === "uz" ? "Men haqimda" : lang === "ru" ? "Обо мне" : "About"}</li>
            <li>{lang === "uz" ? "Ko‘nikmalar" : lang === "ru" ? "Навыки" : "Skills"}</li>
            <li>{lang === "uz" ? "Xizmatlar" : lang === "ru" ? "Услуги" : "Services"}</li>
            <li>Portfolio</li>
            <li>{lang === "uz" ? "Aloqa" : lang === "ru" ? "Контакты" : "Contact"}</li>
          </ul>

          {/* Icons */}
          <div className="icons">
            {/* Color filter */}
            <IoColorFilterOutline onClick={() => setColorModal(!colorModal)} />

            <div className="color-filter-modal">
              <div className="color red" onClick={() => changeColor("#ff6347")}></div>
              <div className="color blue" onClick={() => changeColor("#2563eb")}></div>
              <div className="color green" onClick={() => changeColor("#28a745")}></div>
              <div className="color yellow" onClick={() => changeColor("#ffc107")}></div>
              <div className="color purple" onClick={() => changeColor("#6f42c1")}></div>
              <div className="color orange" onClick={() => changeColor("#fd7e14")}></div>
            </div>

            {/* Language */}
            <IoLanguage onClick={() => setLangModal(!langModal)} />
            <div className="lang-modal">
              <button onClick={() => changeLanguage("uz")}>🇺🇿 Uzbek</button>
              <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
              <button onClick={() => changeLanguage("ru")}>🇷🇺 Russian</button>
            </div>

            {/* Responsive menu */}
            <RiMenuUnfold2Fill className="menu-icon" onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
