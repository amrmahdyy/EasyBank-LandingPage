import "./Styles/Navbar.css";
import logoSvg from "./Styles/logo.svg";
import { useState } from "react";
import hamburgetMenuBtn from "./images/icon-hamburger.svg";
const Navbar = () => {
  const [navbarMenu, setNavbarMenu] = useState(false);
  return (
    <div className="container">
      <nav id="navbar">
        <div className="companyLogo">
          <img height="20px" src={logoSvg} alt="" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div id="navInviteBtn" className="inviteBtn">
          <a>Request Invite</a>
        </div>
        <a
          onClick={() => {
            const navbarMenuElem = document.getElementById("NavbarMenu");
            !navbarMenu
              ? navbarMenuElem.classList.replace("inactiveMenu", "activeMenu")
              : navbarMenuElem.classList.replace("activeMenu", "inactiveMenu");
            setNavbarMenu(!navbarMenu);
          }}
          id="menuBtn"
        >
          <img src={hamburgetMenuBtn} alt="" />
        </a>
        <div className="inactiveMenu" id="NavbarMenu">
          <ul className="navMenu">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a className="inviteBtn">Request Invite</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
