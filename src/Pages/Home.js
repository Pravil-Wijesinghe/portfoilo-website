import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import './Home.css';
import myPhoto from './img/myPhoto.png';
import rectangle4 from './img/Rectangle4.png';
import { motion, useAnimation } from "framer-motion"

const textVariants={
    initial:{
        y: -500,
        opacity: 0,
    },
    animate:{
        y: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutSectionPosition = document.querySelector('.about-section-animate').offsetTop;

      // Adjust the offset value to control when the animation triggers
      setIsVisible(scrollPosition > aboutSectionPosition - 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const animationControls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      animationControls.start({ x: '0%', opacity: 1, });
    } else {
      animationControls.start({ x: '-100%', opacity: 0, });
    }
  }, [isVisible, animationControls]);

  return (
    <div>
      <NavBar/>
      <scrollY>
        <motion.div className="profile" variants={textVariants} initial="initial" animate="animate">
            <motion.h1 variants={textVariants} className="name">PRAVIL WIJESINGHE</motion.h1>
            <motion.h3 variants={textVariants} className="possition">IT Undergraduate</motion.h3>
        </motion.div>
        <div className="myPhoto">
            <img src={rectangle4} className="rectangle4" />
            <img src={myPhoto} alt="My Photo" className="photo"/>
        </div>
        <div className="experience-section">
            <h3>UI/UX Engineer</h3>
            <h3>Web Developer</h3>
            <h3>Graphic Designer</h3>
            <h3>Front-End Developer</h3>
        </div>
        <div className="about-section">
          <motion.div className="about-section-animate" animate={animationControls} initial={{ x: '-100%' }} transition={{ duration: 1, ease: 'easeInOut' }}>
            <h2 className="aboutMe">About Me</h2>
            <h3>
            I'm a dedicated IT undergraduate currently embarking on my journey towards a B.Sc. in IT at the esteemed Department of 
            Industrial Management, University of Kelaniya. My passion lies at the intersection of UI/UX engineering, software development, 
            and graphic design, where I thrive on the opportunity to create immersive digital experiences.<br/><br/>
            Driven by a relentless pursuit of innovation, I'm constantly seeking new avenues to craft impactful IT solutions that drive 
            societal progress. Whether it's streamlining processes through intuitive user interfaces or developing cutting-edge software, 
            I'm committed to leveraging technology for the betterment of society.<br/><br/>
            As I chart my course in the world of IT, my goal is clear: to contribute my skills and expertise towards overcoming 
            organizational challenges through innovative solutions. Join me on this exciting journey as we harness the power of technology 
            to shape a brighter future.
            </h3>
          </motion.div>
        </div>
        
      </scrollY>
    </div>
  )
}
