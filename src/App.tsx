import React, { ReactSVGElement } from 'react'
import './styles/main.css'
import Avatar from './assets/avatar.svg'
import PasslogLogo from './assets/passlog_logo.svg'
import CalcularyLogo from './assets/calculary_logo.svg'
import AssignitLogo from './assets/assignit_logo.svg'
import MoviewLogo from './assets/moview_logo.svg'
import PlaylifyLogo from './assets/playlify_logo.svg'

interface ProyectProps {
  name: string
  description: string
  link: string
  code: string
  logo: string
}

const proyects: ProyectProps[] = [
  {
    name: 'Passlog',
    description: 'Save all your private data like passwords, notes & cards and keep them safe in one place, Passlog is the open source proyect were you can store all your sensitive information and stop worrying about it.',
    link: 'https://passlog.vercel.app/',
    code: 'https://github.com/jralvarenga/passlog',
    logo: PasslogLogo
  },
  {
    name: 'Calculary',
    description: 'Does everything that a normal calculator and more, solve your math functions quickly and have a preview of how the plot looks like, solve a function derivative or integral or use numerical methods to solve multiple problems with Calculary.',
    link: 'https://play.google.com/store/apps/details?id=com.failedbump.calculary',
    code: 'https://github.com/jralvarenga/calculary',
    logo: CalcularyLogo
  },
  {
    name: 'Assignit',
    description: 'Keep all your tasks or assigments organized in one place where you can add assignments (tasks, events, etc.) to your subjects (task group), add new assignments, view them in your Assignit Agenda or Google Calendar, see your stadistics and more.',
    link: 'https://assignit.vercel.app',
    code: 'https://github.com/jralvarenga/assignit',
    logo: AssignitLogo
  },
  {
    name: 'Playlify',
    description: 'Create new playlists and discover new music from just one song.',
    link: 'https://playlify.vercel.app',
    code: 'https://github.com/jralvarenga/playlify',
    logo: PlaylifyLogo
  },
  {
    name: 'Moview',
    description: 'See what are the top movies and TV series of the moment with Moview',
    link: 'https://moview.vercel.app',
    code: 'https://github.com/jralvarenga/moview',
    logo: MoviewLogo
  }
]

const App = () => {

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div>

      <main className='welcome-page' id='welcome'>
        <span className="salute" id="saluteText">
          Hi my name is <span className="my-name">Rigo Alvarenga</span>
          <br />
          I'm a Software Developer
        </span>
        <div className="more-button-container">
          <button
            onClick={() => scrollToId('about')}
            className="more-button"
          >
            Know More
          </button>
        </div>

        <div className="about-divider-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </main>

      <main className='about-page' id='about'>
        <div className='avatar-container'>
          <img src={Avatar} className='avatar-img' alt="" />
        </div>
        <div className='about-content'>
          <p>
            <span className="title">
              About me
            </span>
          </p>
          <p>
            <span>
              My name is Rigo Alvarenga, also known as FailedBump, I'm a self taught software engineer located in El Salvador
            </span>
          </p>
          <p>
            <span>
              I code startups, sometimes create ui designs, and always learning new things
            </span>
          </p>
          <p>
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
          <span className='title'>
            My own work
          </span>
          {proyects.map((proyect, i) => (
            <div className="proyect-container">
              <div className="description">
                <p>
                  <span className="proyect-name">{proyect.name}</span>
                </p>
                <p>
                  <span>{proyect.description}</span>
                </p>
                <p className='app-links'>
                  <a href={proyect.link} target="_blank" rel="noopener noreferrer">
                    <button>
                      Check The App
                    </button>
                  </a>
                  <a href={proyect.code} target="_blank" rel="noopener noreferrer">
                    <button className='sourcecode-button'>
                      Source Code
                    </button>
                  </a>
                </p>
              </div>
              <div className="display">
                <img src={proyect.logo} className='app-logo' alt="" />
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  )
}

export default App
