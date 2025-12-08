import { RiMenuUnfold2Fill } from "react-icons/ri";
import { IoLanguage, IoColorFilterOutline } from "react-icons/io5";
// import { IoIosMoon } from "react-icons/io";
import { HeaderContainer } from "./Header.styles";
import { useState } from "react";

const Header = () => {
  const [mode, setMode] = useState(false);

  const ColorFilter = () => setMode(!mode);

  // Rang almashtiruvchi funksiya
  const changeColor = (color) => {
    document.documentElement.style.setProperty("--primary-color", color);
    setMode(false); // rang tanlangach modal yopiladi
  };
  const resModal = () => {
    const nav = document.querySelector(".responsive-navigation-bar");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  }

  return (
    <HeaderContainer mode={mode}>
      <div className="max-width">
        <div className="header-cont">

          <div className="logo">
            <h1>Sayyorbek</h1>
          </div>

          <ul className="nav-list responsive-navigation-bar">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          

          <div className="icons">
            <IoColorFilterOutline onClick={ColorFilter} />

            {/* Rang tanlash modal */}
            <div className="color-filter-modal">
              <div className="color red" onClick={() => changeColor("#ff6347")}></div>
              <div className="color blue" onClick={() => changeColor("#2563eb")}></div>
              <div className="color green" onClick={() => changeColor("#28a745")}></div>
              <div className="color yellow" onClick={() => changeColor("#ffc107")}></div>
              <div className="color purple" onClick={() => changeColor("#6f42c1")}></div>
              <div className="color orange" onClick={() => changeColor("#fd7e14")}></div>
            </div>

            <IoLanguage />
            {/* <IoIosMoon  /> */}
            <RiMenuUnfold2Fill className="menu-icon" onClick={resModal} />
          </div>

        </div> 
      </div>
    </HeaderContainer>
  );
};

export default Header;
