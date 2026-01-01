// CSS imports
import './../styles/About.css';
import './../styles/SkillIcon.css';

// React import
import { useContext } from 'react';

// React-router import
import { Link } from "react-router";

// Image import
//import Headshot from 'Headshot.avif';

// Component imports
import Navbar from './../components/Navbar.jsx';
import Footer from './../components/Footer.jsx';

// Display mode-related imports
import { DisplayModeHook } from './../hooks/DisplayModeHook.jsx';
import { DisplayModeContext } from './../DisplayModeContext.js';

// React icon imports
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaSearchPlus
} from "react-icons/fa"

import {
  IoLogoJavascript
} from "react-icons/io5"

import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si"

import {
  MdDevices
} from "react-icons/md";

function About() {
  const { darkMode } = useContext(DisplayModeContext)
  const { bg, text, boxBg, boxText, link, border } = DisplayModeHook()

  return (
    <>
      {/* Navbar */}
      <Navbar activeLink="About" />

      {/* About page */}
      <main className={`page-main ${bg}`}>
        <h1 className={`main-header ${text}`}>
          About
        </h1>

        {/* Page description text box */}
        <div className={`main-caption ${boxBg} ${border}`}>
          <p className={`text-center ${boxText}`}>
            Connection is an essential part of any career; because of this, letting others know about me and how 
            I got to where I am now can go a long way in building relationships. And as a bonus, feel free to see the 
            specific technologies used in the making of this website!
          </p>
        </div>

        {/* Stores the "About Me" section and a photo */}
        <div
          className={`
            aboutBox
            flex-col-reverse
            lg:flex-row
            ${boxBg}
            ${border}
          `}
        >
          {/* "About Me" section */}
          <div className={`
            about-section 
            w-full 
            pt-0
            pb-0
            m-4 
            lg:ml-0
            lg:max-h-[60vh]
          `}>
            <h2 className={`${boxText}`}>
              About Me
            </h2>

            <p className={`${boxText}`}>
              When I first started attending Farmingdale State College back in Fall 2021, I 
              didn't really see myself as a programmer; I would often just do what was expected 
              of me and move on with my life.
            </p>

            <p className={`${boxText}`}>
              Of course, I wouldn't stay that way forever.
            </p>

            <p className={`${boxText}`}>
              As I progressed through my quest to earn a Bachelor of Science in Computer Programming & Information 
              Systems, I learned committment, connection, and above all, the importance of a desire to grow. As I became acquainted with new technologies and underwent new experiences, 
              I felt my passion increasingly growing.
            </p>

            <p className={`${boxText}`}>
              My contributions have helped grow Kelm Media. Originally, I interned there from June 2024 to December 2024. It was a strange new 
              environment, as I had just begun to get familiar with website development. However, through those six months, I emerged a proficient and 
              experienced developer. It seemed as though I was ready for what lied ahead of me following my graduation.
            </p>

            <p className={`${boxText}`}>
              And then, it happened. After a final send-off semester, I had graduated, obtaining the degree I had sought after. Three months later, I was 
              welcomed back to Kelm, where I am still working to this day.
            </p>

            <p className={`${boxText}`}>
              As far as personal interests go, I am a theatre person. During my time at Farmingdale State College, I joined its Backstage Theatre Company 
              during my first semester. Later on, I would become the BSTC's Vice President, working with others to plan and coordinate semester events. And 
              in my final semester, I was promoted to President, helping lead the BSTC. Even after my graduation and departure, I have faith the BSTC is in good hands.
            </p>

            <p className={`${boxText}`}>
              And with that, I can only wonder where my future will take me next.
            </p>
          </div>

          <hr className={`${text} divider`} />

          {/* Photo section */}
          <div className="mb-4 lg:mb-0 mt-4 lg:mt-0 lg:p-4">
            <picture>
              <source srcSet="/Headshot.avif" type="image/avif" />
              <source srcSet="/Headshot.webp" type="image/webp" />
              <img 
                src={"/Headshot.jpg"} 
                alt="Headshot" 
                width={300} 
                height={300} 
                className="w-full max-w-[175px] md:max-w-[300px] md:w-auto h-auto rounded-sm" 
              />
            </picture>
          </div>
        </div>

        <div 
          className={`
            mt-4
            aboutBox
            flex-col-reverse
            lg:flex-row
            ${boxBg}
            ${border}
          `}
        >
          {/* "My Specialties" section */}
          <div 
            className={`
              about-section 
              mb-4 
              lg:mt-0 
              lg:mb-0 
              min-w-full 
              lg:min-w-[79%] 
              lg:max-h-auto
            `}
          >
            <h2 className={`${boxText}`}>
              My Specialties
            </h2>

            <p className={`${boxText}`}>
              When it comes to web development, I implement responsive design and accessibility measures to ensure a user experience that will 
              keep users engaged and coming back for more.
            </p>

            <p className={`${boxText}`}>
              In terms of programming languages, JavaScript is my go-to; I find myself using it a lot when implementing functionality. Additionally, 
              my current role at Kelm Media has helped me develop my proficiency in PHP. Regarding databases, I am well-versed in MySQL, though I also have 
              been exploring MongoDB.
            </p>

            <p className={`${boxText}`}>
              I pride myself on my profound attention to detail, which allows me to pinpoint areas of concern and/or improvement. It's thanks to 
              this quality of me that I can determine how a project can be improved or if I feel it is missing something.
            </p>
          </div>

          <div 
            className="
              lg:max-h-auto 
              min-w-full 
              lg:min-w-[19%]
            "
          >
            <div className="flex flex-row lg:flex-col items-center justify-evenly lg:justify-center p-2 lg:p-0 mt-2 lg:mt-0">

              {/* JavaScript Logo */}
              <div className="lg:items-left">
                <IoLogoJavascript style={{color: `#${darkMode ? "FFE971" : "F7DF1E" }`}} className="aboutIcon displayModeTransition" role="img" />
              </div>

              {/* PHP Logo */}
              <div className="lg:items-right">
                <FaPhp style={{color: `#${darkMode ? "B8BBFF" : "777BB4" }`}} className="aboutIcon displayModeTransition" role="img" />
              </div>

              {/* MySQL Logo */}
              <div className="lg:items-left">
                <SiMysql style={{color: `#${darkMode ? "73C1FF" : "4479A1" }`}} className="aboutIcon displayModeTransition" role="img" />
              </div>

              {/* MdDevices Icon - Responsive Design */}
              <div className="lg:items-right">
                <MdDevices style={{color: `#${darkMode ? "6CFFAA" : "00C853" }`}} className="aboutIcon displayModeTransition" role="img" />
              </div>

              {/* FaSearchPlus Icon - Attention to Detail */}
              <div className="lg:items-left">
                <FaSearchPlus style={{color: `#${darkMode ? "4FE9D1" : "0D9488" }`}} className="aboutIcon displayModeTransition" role="img" />
              </div>
            </div>
            <hr className={`${text} divider`} />
          </div>
        </div>

        <div 
          className={`
            mt-4
            aboutBox
            flex-col
            lg:flex-row
            ${boxBg}
            ${border}
          `}
        >
          <div className="lg:max-h-auto min-w-full lg:min-w-[19%]">
            <div className="flex flex-row lg:flex-col items-center justify-evenly lg:justify-center p-2 lg:p-0 mt-2 lg:mt-0">

              {/* React Logo */}
              <div className="lg:flex lg:justify-start">
                <FaReact style={{color: `#${darkMode ? "8CEFFF" : "61DAFB" }`}} className="aboutIcon displayModeTransition" role="img" />
              </div>

              {/* Node.js Logo */}
              <div className="lg:flex lg:justify-end">
                <FaNodeJs style={{color: `#${darkMode ? "7FFF82" : "339933" }`}} className="aboutIcon displayModeTransition" role="img" />
              </div>

              {/* Express.js Logo */}
              <div className="lg:flex lg:justify-start">
                <SiExpress style={{color: `#${darkMode ? "E5E7EB" : "000000" }`}} className="aboutIcon displayModeTransition" role="img" />
              </div>

              {/* MongoDB Logo */}
              <div className="lg:flex lg:justify-end">
                <SiMongodb style={{color: `#${darkMode ? "92FF9D" : "47A248" }`}} className="aboutIcon displayModeTransition" role="img" />
              </div>

              {/* TailwindCSS Logo */}
              <div className="lg:flex lg:justify-start">
                <SiTailwindcss style={{color: `#${darkMode ? "66EDFF" : "06B6D4" }`}} className="aboutIcon displayModeTransition" role="img" />
              </div>
            </div>
            <hr className={`${text} divider`} />
          </div>

          {/* "About This Website" section */}
          <div 
            className={`
              about-section  
              lg:max-h-auto 
              min-w-full 
              lg:min-w-[79%]
            `}
          >
            <h2 className={`${boxText}`}>
              About This Website
            </h2>  

            <p className={`${boxText}`}>
              This website functions as a full-stack web application, showcasing my expertise in various technologies.
            </p>

            <p className={`${boxText}`}>
              This website's frontend was created using Vite and React. Material UI and TailwindCSS are used for interface design and to ensure a clean, user-friendly experience.
              The frontend also makes use of responsive design. TanStack query 
              is used to fetch data on projects and skills from a backend API.
            </p>

            <p className={`${boxText}`}>
              This website's backend was created using Node.js and Express.js to create a RESTful API that communicates with a MongoDB database. The database 
              stores information on projects and skills.
            </p>

            <p className={`${boxText}`}>
              The contact form makes use of Nodemailer and Gmail to send messages users submit through the contact form to my Gmail inbox. React-hook-form and 
              additional JavaScript are used for form validation.
            </p>

            <p className={`${boxText}`}>
              Vercel is used in deploying both this website's frontend and backend.
            </p>

            <p className={`${boxText}`}>
              By using this website, you agree to this website's <Link 
                to={"/privacypolicy"} 
                className={`${link} general-link`}
              >
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>
      </main>
      {/* End of About page */}

      {/* Footer */}
      <Footer />
    </>
  )
}

export default About