import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import './Home.css';
import myPhoto from './img/myPhoto.png';
import rectangle4 from './img/Rectangle4.png';
import { motion, useAnimation } from "framer-motion"
import CardButton from '../Components/CardButton';

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
    <div className='font-hanken'>
      <NavBar/>
      <scrollY>
        <motion.div className='flex flex-col items-center justify-center font-hanken text-customWhite mt-[30px]' variants={textVariants} initial="initial" animate="animate">
            <motion.h1 variants={textVariants} className='text-6xl font-bold'>PRAVIL WIJESINGHE</motion.h1>
            <motion.h3 variants={textVariants} className='text-2xl font-medium'>IT Undergraduate</motion.h3>
        </motion.div>
        <div className='relative flex flex-col items-center justify-center mt-[215px]'>
            <img src={rectangle4} alt='' className='absolute' />
            <img src={myPhoto} alt='' className='absolute'/>
        </div>
        <div className='flex flex-row justify-center text-customWhite text-lg mt-[250px] cursor-pointer gap-24 transition ease-in duration-400'>
            <h3 className='duration-500 hover:scale-125 font-semibold'>UI/UX Engineer</h3>
            <h3 className='duration-500 hover:scale-125 font-semibold'>Web Developer</h3>
            <h3 className='duration-500 hover:scale-125 font-semibold'>Graphic Designer</h3>
            <h3 className='duration-500 hover:scale-125 font-semibold'>Front-End Developer</h3>
        </div>
        <div className='w-[60%] flex flex-col items-center rounded-[90px] hover:bg-gradient-to-b from-lightDarkLime to-darkBlackLime p-[1px] mx-auto mt-10'>
          <div className=' h-fit text-customWhite bg-customGrey bg-opacity-50 hover:bg-opacity-100 rounded-[90px] p-[5%] '>
            <motion.div className="about-section-animate flex flex-col items-center" animate={animationControls} initial={{ x: '-100%' }} transition={{ duration: 1, ease: 'easeInOut' }}>
              <h2 className='font-bold text-4xl -mt-5'>About Me</h2>
              <h3 className='font-medium text-justify mt-6'>
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
        </div>
        <div className="work-experience">
          <h2>Work Experience</h2>
          <h3>Private Class Tutor (2020 - present) <br/> ICT Class teacher (O/L and A/L ICT)</h3>
        </div>
        <div className="education-section">
          <h2>Education</h2>
          <CardButton/>
          <div className="nnc">
            <div>
              <h2>Neluwa National College</h2>
              <h3>Udugama Road, Neluwa, Galle.</h3>
            </div>
          </div>
        </div>
      </scrollY>
    </div>
  )
}
