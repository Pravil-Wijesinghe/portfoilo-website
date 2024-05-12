import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function NavBar() {
  return (
    <div>
      <header className='relative w-full h-[58px] bg-customBlack text-customWhite flex flex-row'>
        <div className='absolute flex flex-col justify-center'>
          <a className='pl-[20px] mt-4 hover:forced-color-adjust-auto text-darkBlackLime hover:text-customWhite' href="#Home">
            <p className='font-script ml-20 text-2xl text-customWhite italic hover:text-darkBlackLime'>
              Wijesinghe
            </p>
            <p className='font-hanken font-black text-3xl mt-[-39px] '>
              Pravil
            </p>
          </a>
        </div>
        <div className="menu-btns">
          <a className="home-btn" href="#Home">Home</a>
          <a className="education-btn" href="#Education">Education</a>
          <a className="project-btn" href="#Project">Project</a>
          <a className="activities-btn" href="#Activity">Activities</a>
          <a className="contact-btn" href="#ContactUs">Contact Us</a>
        </div>
        <div className="socialMediaIcon">
          <a className="linkedin" href="https://www.linkedin.com/in/pravil-wijesinghe-b6908a233/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} inverse />
          </a>
          <a className="facebook" href="https://web.facebook.com/pravil.wijesinghe/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} inverse />
          </a>
          <a className="instagram" href="https://www.instagram.com/pravil_wijesinghe/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} inverse />
          </a>
        </div>
      </header>
    </div>
  )
}
