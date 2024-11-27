import React from 'react';
import '../Styles/profile.css';
import AboutMePopUp from './AboutMePopUp';

import profilePic from '../assets/portrait.jpg';
import sun from '../assets/sun.svg';
import linkedinIcon from '../assets/linkedinIcon.svg';
import githubIcon from '../assets/githubIcon.svg';
import CV from '../assets/Sunny(Soeui)_Jeong_Resume.pdf';
import { Break } from 'three/examples/jsm/nodes/Nodes.js';

import { useState } from 'react';

function Profile() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
  <section id="prof" className='container'>
    <div className='colorModeContainer'>
      <img 
      className="prof"
      src={profilePic} 
      alt="Picture of Sunny Jeong"/>
      <img
          className='colorMode'
          src={sun}
          alt="Color mode icon"
      />
    </div>

    <div className='info'>
      <h2>
        Hello I'm
      </h2>
      <h1>
        Sunny
        <br/>
        Jeong
      </h1>
      <h2>
        Software Engineer
      </h2>

      <span>
        <a href='https://www.linkedin.com/in/soeui-sunny-jeong/'>
          <img src={linkedinIcon} alt="LinkedIn Icon"/>
        </a>
        <a href='https://github.com/sunny-soeui'>
          <img src={githubIcon} alt="Github Icon"/>
        </a>
      </span>

      <div class='aboutmepopup'>
        <button onClick={() => setButtonPopup(true)} className="hover">About me</button>
        <AboutMePopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>About me</h3>
          <br></br>
          <p>
            👋🏽 Hi, my name is Sunny in English, Soeui in Korean, and Xiaoyi in Chinese.
            <br></br> <br></br>
            🎓 Graduated with a Bachelor of Computer Engineering. (May 2024)
            <br></br> <br></br>
            🌇 Third culture kid, with a passion for software/hardware development searching for experiences and strategies to further grow my skills.
            <br></br> <br></br>
            📚 Worked as a quality assurance intern in RAON Secure, where I got to create automated testing software for various products using Appium, python, and node.js. Have also experience in project management with a demonstrated history of working in the modeling/entertainment industry. I worked as a general manager/ co-ordinator in the Grin Modeling Agency managing commercials, photoshoots, TV shows, creative content, etc., and negotiations with agencies around the world.
            <br></br> <br></br>
            💻 As for my future, I hope to one day work as a software developer and work with a diverse team of intelligent engineers and develop innovative solutions that will increase efficiency worldwide  
            <br></br> <br></br>
            🏔 In my free time, you can find me rock climbing, crocheting or even performing in a band!
            <br></br> <br></br>
            💪🏽 Problem-Solving, Critical Thinking, Research, Leadership, Communication
          </p>
        </AboutMePopUp>
      </div>
      
      
      <span>
        <a href={CV} download>
          <button className="hover">
            Resume
          </button>
        </a>

        <a href='mailto:sunny.jeong@nyu.edu'>
          <button className="hover">
              Contact Info
          </button>
        </a>
      </span>
    </div>
  </section>
  )
}

export default Profile
