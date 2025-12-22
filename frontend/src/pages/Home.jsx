import './../App.css'
import './../styles/Home.css'
import { Link } from 'react-router';
import Navbar from './../components/Navbar.jsx';
import Footer from './../components/Footer.jsx';
import Headshot from './../assets/images/Headshot.avif';

import { FetchProjects } from './../components/FetchProjects.jsx';
import { FetchSkills } from './../components/FetchSkills.jsx';

import { DisplayModeHook } from '../hooks/DisplayModeHook.jsx';

function Home() {

  const { bg, secondaryBg, secondaryText, text, boxBg, boxText, link, border } = DisplayModeHook()
  const homeH2 = `section-header ${text}`;
  const homeBoxText = `text-center ${boxText}`

  return (
    <>
      <Navbar activeLink="Home" />
          <div className={`displayModeTransition p-6 ${secondaryBg}`}>
            <h1 className={`${secondaryText} mb-2 text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center`}>
              William Ackerman
            </h1>
            <h2 className={`${secondaryText} mb-4 text-xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center`}>
              Web Developer
            </h2>
            
            <div className="flex items-center justify-evenly flex-col lg:flex-row max-w-[90%] lg:max-w-[80%] mx-auto xl:max-w-[1400px]">
              <div className="lg:p-4">
                <p className={`${secondaryText} text-base sm:text-lg md:text-xl text-center mb-4 lg:mb-0`}>
                  As a SUNY Farmingdale alumnus having earned a Bachelor of Science in Computer Programming & 
                  Information Systems, I know how to approach developing solutions, whether websites or applications. 
                  With a wide array of skills at my disposal, I understand the importance of delivering quality solutions 
                  to clients.
                </p>
              </div>
              <div className="lg:p-4">
                <img src={Headshot} alt="Headshot" className="max-w-[175px] md:max-w-[250px] lg:max-w-[300px] rounded-sm" />
              </div>
            </div>
          </div>
          <div className={`displayModeTransition p-6 ${bg}`}>

            <section className="mt-2 sm:mt-4 lg:mt-8 mb-8 sm:mb-12 lg:mb-16">
              <h2 className={`${homeH2}`}>
                Projects
              </h2>
              <p className={`displayModeTransition ${boxBg} ${boxText} text-area ${border}`}>
                Projects are not only proof of my expertise in specific technologies, but also opportunities for me 
                to learn new technologies and expand my knowledge of ones I am familiar with.
              </p>
              <h3 className={`${text} mb-4 font-normal text-xl sm:text-2xl md:text-3xl xl:text-4xl text-center`}>
                Featured Projects
              </h3>
              <FetchProjects featured="1" />
              <p className={`displayModeTransition ${boxBg} ${boxText} text-area ${border}`}>
                Visit the <Link to={"/projects"} className={`${link} displayModeTransition underline hover:no-underline`}>Projects</Link> page 
                if you would like to learn more about my projects.
              </p>
            </section>

            <section className="mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
              <h2 className={`${homeH2}`}>
                Skills
              </h2>
              <p className={`displayModeTransition ${boxBg} ${boxText} text-area ${border}`}>
                As a web developer, it is important for me to be well-versed in various technologies and skills. I bring a diverse 
                range of frontend, backend, database, tool-related, and soft skills to contribute towards efficient development.
              </p>
              <h3 className={`${text} mb-4 font-normal text-xl sm:text-2xl md:text-3xl xl:text-4xl text-center`}>
                Featured Skills
              </h3>
              <FetchSkills type="featured" />
              <p className={`displayModeTransition ${boxBg} ${boxText} text-area ${border}`}>Visit the <Link to={"/skills"} className={`displayModeTransition ${link} general-link`}>Skills</Link> page 
              if you would like to see more of my skills.</p>
            </section>

            <section className="mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
              <h2 className={`${homeH2}`}>
                About
              </h2>
              <div className={`displayModeTransition ${boxBg} mx-auto w-full sm:w-lg bg-neutral-50 p-4 rounded-sm shadow-sm mb-4 ${border}`}>
                <p className={`displayModeTransition ${boxText} text-center mb-2`}>
                  I'm always ready to work with new people and learn new technologies.
                </p>
                <p className={`displayModeTransition ${boxText} text-center`}>Visit the <Link to={"/about"} className={`displayModeTransition ${link} general-link`}>About</Link> page to learn more about me and this website.</p>
              </div>
            </section>

            <section className="mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
              <h2 className={`${homeH2}`}>
                Contact
              </h2>
              <div className={`displayModeTransition ${boxBg} mx-auto w-full sm:w-lg bg-neutral-50 p-4 rounded-sm shadow-sm mb-4 ${border}`}>
                <p className={`displayModeTransition ${boxText} text-center mb-2`}>
                  I'm always ready to work with new people and learn new technologies.
                </p>
                <p className={`displayModeTransition ${boxText} text-center`}>
                  Visit the <Link to={"/contact"} className={`displayModeTransition ${link} general-link`}>Contact</Link> page 
                  if you would like to get in touch with me.
                </p>
              </div>
            </section>

            <section className="mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
              <h2 className={`${homeH2}`}>
                View Resume/CV
              </h2>
              <div className={`displayModeTransition ${boxBg} mx-auto w-full sm:w-lg p-4 rounded-sm shadow-sm mb-4 ${border}`}>
                <p className={`${homeBoxText} mb-2`}>
                  Resumes and CVs aren't just documents. A resume allows one to highlight their greatest accomplishments.
                  Meanwhile, a CV is a living, breathing representation of one's career, from start to present. Feel free to 
                  take a look at and indulge yourself in the the milestones my resume highlights and the story my CV tells.
                </p>
                <p className={`${homeBoxText}`}>You can view my resume and CV by visiting the <Link to={"/viewresumecv"} className={`${link}`}>Resume/CV</Link> page.</p>
              </div>
            </section>

            <section className="mt-8 sm:mt-12 lg:mt-16">
              <h2 className={`${homeH2}`}>
                Privacy Notice
              </h2>
              <div className={`${boxBg} mx-auto w-full sm:w-lg p-4 rounded-sm shadow-sm mb-4 ${border}`}>
                <p className={`${homeBoxText} mb-2`}>
                  I've updated this website's privacy policy. Please check this website's <Link to={"/privacypolicy"} className={`${link} general-link`}>Privacy Policy</Link> for more information.
                </p>
                <p className={`${homeBoxText}`}>
                  <strong>Effective Date:</strong> December 22, 2025
                </p>
              </div>
            </section>
          </div>
      <Footer />
    </>
  )
}

export default Home