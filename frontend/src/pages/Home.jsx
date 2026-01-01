// CSS import
import './../styles/Home.css'

// React-related imports
import { useContext } from 'react';
import { Link } from 'react-router';

// Material UI import
import useMediaQuery from '@mui/material/useMediaQuery';

// Component imports
import Navbar from './../components/Navbar.jsx';
import Footer from './../components/Footer.jsx';
import { FetchProjects } from './../components/FetchProjects.jsx';
import { FetchSkills } from './../components/FetchSkills.jsx';

// Image import
//import Headshot from 'Headshot.avif';

// Display mode-related imports
import { DisplayModeHook } from './../hooks/DisplayModeHook.jsx';
import { DisplayModeContext } from './../DisplayModeContext.js';

function Home() {

  // Style variables depending on display
  const { bg, secondaryBg, secondaryText, text, boxBg, boxText, link, border } = DisplayModeHook()
  const homeH2 = `section-header ${text}`;
  const homeBoxText = `text-center ${boxText}`

  // Indicates whether the user prefers more contrast
  const prefersContrastMore = useMediaQuery('(prefers-contrast: more)')

  // Indicates whether dark mode is toggled
  const { darkMode } = useContext(DisplayModeContext)

  return (
    <>
      {/* Navbar */}
      <Navbar activeLink="Home" />

      {/* Home page */}
      <main>
        
        {/* Hero section */}
        <div 
          className={`
            displayModeTransition 
            p-6 
            ${secondaryBg} 
            ${prefersContrastMore ? (darkMode ? "border-b border-b-white" : "border-b border-b-black") : ""}
          `}
        >
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

            {/* Picture */}
            <div className="lg:p-4">
              <img 
                  src={"/Headshot.jpg"} 
                  alt="Headshot" 
                  className="block w-full max-w-[175px] md:max-w-[250px] lg:max-w-[300px] rounded-sm" 
              />
              {/*<picture>
                <source srcSet="/Headshot.avif" type="image/avif" />
                <source srcSet="/Headshot.webp" type="image/webp" />
                <img 
                  src={"/Headshot.jpg"} 
                  alt="Headshot" 
                  width={300} 
                  height={300} 
                  className="block w-full max-w-[175px] md:max-w-[250px] lg:max-w-[300px] rounded-sm" 
                  style={{ contain: "layout paint" }}
                />
              </picture>*/}
            </div>
          </div>
        </div>

        <div className={`displayModeTransition p-6 ${bg}`}>

          {/* Projects section */}
          <section className="mt-2 sm:mt-4 lg:mt-8 section-margin-bottom">
            <h2 className={`${homeH2}`}>
              Projects
            </h2>

            <p className={`${boxBg} ${boxText} text-area ${border}`}>
              Projects are not only proof of my expertise in specific technologies, but also opportunities for me 
              to learn new technologies and expand my knowledge of ones I am familiar with.
            </p>

            {/* Featured Projects sub-section */}
            <h3 className={`${text} tertiary-header mt-8`}>
              Featured Projects
            </h3>

            {/* Displays only featured projects */}
            <FetchProjects featured="1" />

            {/* Text containing link to Projects page */}
            <p className={`${boxBg} ${boxText} text-area ${border} mt-8`}>
              Visit the <Link to={"/projects"} className={`${link}`}>Projects</Link> page 
              if you would like to learn more about my projects.
            </p>
          </section>

          {/* Skills section */}
          <section className="section-margin-top section-margin-bottom">
            <h2 className={`${homeH2}`}>
              Skills
            </h2>

            <p className={`${boxBg} ${boxText} text-area ${border}`}>
              As a web developer, it is important for me to be well-versed in various technologies and skills. I bring a diverse 
              range of frontend, backend, database, tool-related, and soft skills to contribute towards efficient development.
            </p>

            {/* Featured Skills sub-section */}
            <h3 className={`${text} tertiary-header mt-8`}>
              Featured Skills
            </h3>

            {/* Displays only featured skills */}
            <FetchSkills type="featured" />

            {/* Text containing link to Skills page */}
            <p className={`${boxBg} ${boxText} text-area ${border} mt-8`}>
              Visit the <Link to={"/skills"} className={`${link}`}>Skills</Link> page 
              if you would like to see more of my skills.
            </p>
          </section>

          {/* About section */}
          <section className="section-margin-top section-margin-bottom">
            <h2 className={`${homeH2}`}>
              About
            </h2>

            <div className={`${boxBg} description-box ${border}`}>
              <p className={`${boxText} text-center mb-2`}>
                I'm always ready to work with new people and learn new technologies.
              </p>

              {/* Text containing link to About page */}
              <p className={`${boxText} text-center`}>
                Visit the <Link to={"/about"} className={`${link}`}>About</Link> page to learn more about me and this website.
              </p>
            </div>
          </section>

          {/* Contact section */}
          <section className="section-margin-top section-margin-bottom">
            <h2 className={`${homeH2}`}>
              Contact
            </h2>

            <div className={`${boxBg} description-box ${border}`}>
              <p className={`${boxText} text-center mb-2`}>
                I'm always ready to work with new people and learn new technologies.
              </p>

              {/* Text containing link to Contact page */}
              <p className={`${boxText} text-center`}>
                Visit the <Link to={"/contact"} className={`${link}`}>Contact</Link> page 
                if you would like to get in touch with me.
              </p>
            </div>
          </section>

          {/* View Resume/CV section */}
          <section className="section-margin-top section-margin-bottom">
            <h2 className={`${homeH2}`}>
              View Resume/CV
            </h2>

            <div className={`${boxBg} description-box ${border}`}>
              <p className={`${homeBoxText} mb-2`}>
                Resumes and CVs aren't just documents. A resume allows one to highlight their greatest accomplishments.
                Meanwhile, a CV is a living, breathing representation of one's career from start to present. Feel free to 
                take a look at and indulge yourself in the the milestones my resume highlights and the story my CV tells.
              </p>

              {/* Text containing link to Resume/CV page */}
              <p className={`${homeBoxText}`}>
                You can view my resume and CV by visiting the <Link to={"/viewresumecv"} className={`${link}`}>Resume/CV</Link> page.
              </p>
            </div>
          </section>

          {/* Privacy Notice section */}
          <section className="section-margin-top">
            <h2 className={`${homeH2}`}>
              Privacy Notice
            </h2>

            <div className={`${boxBg} description-box ${border}`}>

              {/* Text containing link to Privacy Policy page */}
              <p className={`${homeBoxText} mb-2`}>
                I've updated this website's privacy policy. 
                Please check this website's <Link to={"/privacypolicy"} className={`${link}`}>Privacy Policy</Link> for 
                more information.
              </p>

              <p className={`${homeBoxText}`}>
                <strong>Effective Date:</strong> January 1, 2026
              </p>
            </div>
          </section>
        </div>
      </main>
      {/* End of Home page */}

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home