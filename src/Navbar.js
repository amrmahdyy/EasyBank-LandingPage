import "./Styles/Navbar.css";
import logoSvg from "./Styles/logo.svg";
const Navbar = () => {
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
        <div className="inviteBtn">
          <a>Request Invite</a>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
