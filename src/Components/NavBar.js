import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function NavBar() {
  return (
    <div>
      <header className="header">
        <a className="logo" href="#Home">PW</a>
        <div className="menu-btns">
          <a className="home-btn" href="#Home">Home</a>
          <a className="education-btn" href="#Education">Education</a>
          <a className="project-btn" href="#Project">Project</a>
          <a className="activities-btn" href="#Activity">Activities</a>
          <a className="contact-btn" href="#ContactUs">Contact Us</a>
        </div>
        <div className="socialMediaIcon">
          <a className="linkedin" href="https://www.linkedin.com/feed/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} inverse />
          </a>
          <a className="facebook" href="https://web.facebook.com/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} inverse />
          </a>
          <a className="instagram" href="https://www.instagram.com/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} inverse />
          </a>
        </div>
      </header>
    </div>
  )
}
