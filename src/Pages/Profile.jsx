import '../Styles/profile.css';

import profilePic from '../assets/portrait.jpg';
import sun from '../assets/sun.svg';
import linkedinIcon from '../assets/linkedinIcon.svg';
import githubIcon from '../assets/githubIcon.svg';
import CV from '../assets/Sunny(Soeui)_Jeong_Resume.pdf';

function Profile() {
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
      <h3>
        Hello I'm
      </h3>
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

      <p>
        👋🏽 Hi, my name is Sunny in English, Soeui in Korean, and Xiaoyi in Chinese.

        🎓 Graduated with a Bachelor of Computer Engineering. (May 2024)

        🌇 Third culture kid, with a passion for software/hardware development searching for experiences and strategies to further grow my skills.

        📚 Worked as a quality assurance intern in RAON Secure, where I got to create automated testing software for various products using Appium, python, and node.js. Have also experience in project management with a demonstrated history of working in the modeling/entertainment industry. I worked as a general manager/ co-ordinator in the Grin Modeling Agency managing commercials, photoshoots, TV shows, creative content, etc., and negotiations with agencies around the world.

        💻 As for my future, I hope to one day work as a software developer and work with a diverse team of intelligent engineers and develop innovative solutions that will increase efficiency worldwide  

        🏔 In my free time, you can find me rock climbing, crocheting or even performing in a band!

        💪🏽 Problem-Solving, Critical Thinking, Research, Leadership, Communication
      </p>

      <span>
        <a href={CV} download>
          <button className="hover">
            Resume
          </button>
        </a>
        <button className="hover">
            Contact Info
        </button>
      </span>
    </div>
  </section>
  )
}

export default Profile
