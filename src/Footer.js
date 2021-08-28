import "./Styles/Footer.css";
import facebookIcon from "./images/icon-facebook.svg";
import youtubeIcon from "./images/icon-youtube.svg";
import twitterIcon from "./images/icon-twitter.svg";
import pinterrestIcon from "./images/icon-pinterest.svg";
const Footer = () => {
  return (
    <div id="Footer">
      <footer className="container">
        <div id="socialMedias">
          <span className="facebookIcon">
            <img src={facebookIcon} alt="" />
          </span>
          <span className="youtubeIcon">
            <img src={youtubeIcon} alt="" />
          </span>
          <span className="twitterIcon">
            <img src={twitterIcon} alt="" />
          </span>
          <span className="painterstIcon">
            <img src={pinterrestIcon} alt="" />
          </span>
        </div>
        <div className="navigations">
          <a>About us</a>
          <a>Contact us</a>
          <a>Blog</a>
        </div>
        <div className="navigations">
          <a>Career</a>
          <a>Support</a>
          <a>Privacy Policy</a>
        </div>
        <div id="copyRight">
          <a className="inviteBtn">Request Invite</a>
          <span>&#64; Easybank All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
