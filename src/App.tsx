import React, { useEffect } from 'react'
import './styles/main.css'
import Avatar from './assets/avatar.svg'
import { initSr } from './animations/initSr'
import { proyects, socialLinks } from './data/myData'

const App = () => {

  useEffect(() => {
    initSr()
  }, [])

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <main className='welcome-page' id='welcome'>
        <span className="salute" id="saluteText">
          Hi, my name is <span className="my-name">Rigo Alvarenga</span>
          <br />
          I'm a Software Developer
        </span>
        <div className="more-button-container" id='knowMoreButton'>
          <button
            onClick={() => scrollToId('about')}
          >
            Know More
          </button>
          <button
            onClick={() => scrollToId('contact')}
            className='contact-button'
          >
            Contact me
          </button>
        </div>
        <div className="about-divider-top" id='aboutFrameTop'>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </main>
      <main className='about-page' id='about'>
        <div className='avatar-container'>
          <img src={Avatar} className='avatar-img' id='avatarImg' alt="" />
        </div>
        <div className='about-content'>
          <p id='aboutTitle'>
            <span className="title">
              About me
            </span>
          </p>
          <p id='myName'>
            <span>
              My name is Rigo Alvarenga, also known as FailedBump, I'm a self taught software engineer located in El Salvador
            </span>
          </p>
          <p id='whatDo'>
            <span>
              I code startups, sometimes create UI designs, and always learning new things
            </span>
          </p>
          <p id='seeProyects'>
            <span>
              ¿Want to know my work?
            </span>
            <br />
            <br />
            <button onClick={() => scrollToId('proyects')}>
              Check Out Here
            </button>
          </p>
        </div>
      </main>
      <main className="proyects-page" id="proyects">
        <div className="about-divider-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="proyects-body">
          <span className='title' id='myWorkTitle'>
            My own work
          </span>
          {proyects.map((proyect, i) => (
            <div className="proyect-container" id='proyectContainer'>
              <div className="description">
                <p>
                  <span className="proyect-name">
                    {proyect.name}
                  </span>
                </p>
                <p>
                  <span>{proyect.description}</span>
                </p>
                <p className='app-links'>
                  <a href={proyect.link} id='checkApp' target="_blank" rel="noopener noreferrer">
                    <button>
                      Check The App
                    </button>
                  </a>
                  <a href={proyect.code} id='sourceCode' target="_blank" rel="noopener noreferrer">
                    <button className='sourcecode-button'>
                      Source Code
                    </button>
                  </a>
                </p>
              </div>
              <div className="display">
                <img src={proyect.logo} id='appLogo' className='app-logo' alt="" />
              </div>
            </div>
          ))}
        </div>
      </main>
      <main className="contact-page" id="contact">
        <p id='thanksForView'>
          <span className="title">
            Thanks for stopping by
          </span>
        </p>
        <p style={{ width: '90%' }} id='contactDescription'>
          <span>
            If you have an app idea, want to develop an app or just a comment you can contact me
          </span>
        </p>
        <p id='sendMailButton'>
          <a href="mailto:jralvarenga161@gmail.com">
            <button>Send Me An Email</button>
          </a>
        </p>
        <br />
        <br />
        <div className='social-media-container'>
          {socialLinks.map((link, i) => (
            <a href={link.link} id={`socialButton${i+1}`} target="_blank" rel="noopener noreferrer">
              <div
                className={`social-media-icon-box ${link.fiverrLink && 'fiverr-container'}`}
              >
                <img
                  src={link.icon}
                  className={link.fiverrLink ? 'fiverr-icon' : 'social-icon'}
                  alt=""
                />
              </div>
            </a>
          ))}
        </div>
      </main>

    </div>
  )
}

export default App
