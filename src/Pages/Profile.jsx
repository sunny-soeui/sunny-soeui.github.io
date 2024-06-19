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
        한줄 요약
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
