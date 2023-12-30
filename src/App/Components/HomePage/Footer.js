import React from 'react';
import './Footer.css';
import { FaPhoneAlt,FaEnvelope   ,FaInstagram,FaFacebook,FaTwitter,FaYoutube,FaCopyright} from 'react-icons/fa';
import LogoImage from "../../../img/image 1.png";


function Footer() {
  return (
    <div>
      <div className="footer-section">
        <div className="phone-cardss">
          <div className="phone-card">
            <span className="phone-phone">
              <FaPhoneAlt className="phone-icon" />
              <p className="paragraph">+233 54 635 3625</p>
            </span>
          </div>

          <div className="phone-card2">
            <span className="phone-phone2">
              <FaEnvelope className="phone-icon2" />
              <p className="paragraph2">info@youremail.com</p>
            </span>
          </div>
        </div>
        <div className="spiral-image-image">
          <img src={LogoImage} className="logoimage" />
          <p className="logoimages">
            Spiral - Nurturing Your Soul, One Devotion at a Time.
          </p>
        </div>
        <div className="icons">
          <div className="icon-lines">
            <FaFacebook className="footer-icons"/>
            <hr className="lines" />
            <FaInstagram className="footer-icons"/>
            <hr className="lines" />
            <FaTwitter className="footer-icons"/>
            <hr className="lines" />
            <FaYoutube className="footer-icons"/>
          </div>
        </div>
        <div className="policy-terms">
          <div className="privacy-policy">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
        <hr className="breakline"/>
        <div className="copyright">
          <FaCopyright className="copyright"/>
          <p>Copyright 2023 Spiral. All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;