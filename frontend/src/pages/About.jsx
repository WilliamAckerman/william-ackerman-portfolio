import './../App.css';
import './../styles/About.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Headshot from '../assets/images/Headshot.jpg';
import Box from '@mui/material/Box';
import { Link } from "react-router";

function About() {

  return (
    <>
      <Navbar />
        <div className="page-main">
          <h1 className="main-header">
            About
          </h1>

          <div className="main-caption">
            <p>
              Connection is an essential part of any career; because of this, letting others know about me and how 
              I got to where I am now can go a long way in building relationships. And as a bonus, feel free to see the 
              specific technologies used in the making of this website!
            </p>
          </div>

          <div
            className="
              flex
              items-center
              flex-col
              lg:flex-row
              justify-evenly
              mx-auto
              w-full
            "
          >
            <div className="about-section w-full p-4 m-4 lg:ml-0 bg-neutral-50 rounded-sm overflow-y-auto max-h-[60vh] lg:max-h-auto">
              <h2>
                About Me
              </h2>

              <p>
                When I first started attending Farmingdale State College back in Fall 2021, I 
                didn't really see myself as a programmer; I would often just do what was expected 
                of me and move on with my life.
              </p>
              <p>
                Of course, I wouldn't stay that way forever.
              </p>
              <p>
                As I progressed through my quest to earn a Bachelor of Science in Computer Programming & Information 
                Systems, I learned committment, connection, and above all, dedication. As I became acquainted with new technologies and undergoing new experiences, 
                I felt my passion constantly growing.
              </p>
              <p>
                My contributions have helped grow Kelm Media. Originally, I interned there from June 2024 to December 2024. It was a strange new 
                environment, as I had just begun to get familiar with website development. However, through those six months, I emerged a proficient and 
                experienced developer. It seemed as though I was ready for what lied ahead of me following my graduation.
              </p>
              <p>
                And then, it happened. After a final send-off semester, I had graduated, obtaining the degree I had sought after. Three months later, I was 
                welcomed back to Kelm, where I am still working to this day.
              </p>
              <p>
                As far as personal interests go, I am a theatre person. During my time at Farmingdale State College, I joined its Backstage Theatre Company 
                during my first semester. Later on, I would become the BSTC's Vice President, working with other offices to plan and coordinate semester events. And 
                in my final semester, I was promoted to President, helping lead the BSTC. Even after my graduation and departure, I have faith the BSTC is in good hands.
              </p>
              <p>
                And with that, I can only wonder where my future will take me next.
              </p>
            </div>
            <div>
              <img src={Headshot} alt="Headshot" className="max-w-[175px] md:max-w-[300px] md:w-auto h-auto rounded-sm" />
            </div>
          </div>
          <div className="about-section mt-8 bg-neutral-50 rounded-sm shadow-sm p-4">
              <h2>
                About This Website
              </h2>  

              <p>
                This website functions as a full-stack web application, showcasing my expertise in various technologies.
              </p>
              <p>
                This website's frontend was created through Vite and React. Material UI was used for several elements of this website's structure. 
                Meanwhile, TailwindCSS was used to provide styling and responsiveness to ensure a clean, user-friendly experience. TanStack query 
                is used to fetch data on projects and skills from a backend API.
              </p>
              <p>
                This website's backend was created using Node.js and Express.js to create a RESTful API that communicates with a MongoDB database. The database 
                stores information on projects and skills.
              </p>
              <p>
                The contact form makes use of Nodemailer and Gmail to send messages users submit through the contact form to my Gmail inbox. React-hook-form and 
                additional JavaScript are used for form validation.
              </p>
              <p>
                Vercel is used in deploying both this website's frontend and backend.
              </p>
              <p>
                By using this website, you agree to this website's <Link 
                  to={"/privacypolicy"} 
                  className="general-link"
                >
                    Privacy Policy
                  </Link>.
              </p>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default About