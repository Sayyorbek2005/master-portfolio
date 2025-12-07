import { RiMenuUnfold2Fill } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import { IoColorFilterOutline } from "react-icons/io5";

import { IoIosMoon } from "react-icons/io";
import { HeaderContainer } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer className="header">
      <div className="max-width">
        <div className="header-cont">

          <div className="logo">
            <h1>Sayyorbek</h1>
          </div>

          <ul className="nav-list">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>

          <div className="icons">
            <IoColorFilterOutline />
            <IoLanguage />
            <IoIosMoon />
            <RiMenuUnfold2Fill className="menu-icon" />
          </div>

        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
