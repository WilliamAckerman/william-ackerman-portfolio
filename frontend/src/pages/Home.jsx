import './../App.css'
import Box from '@mui/material/Box';
import { Link } from 'react-router';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Headshot from '../assets/images/Headshot.jpg';

import { FetchProjects } from './../api/FetchProjects.jsx';
import { FetchFeaturedSkills } from './../api/FetchFeaturedSkills.jsx';

function Home() {

  return (
    <>
      <Navbar />
          <div className="bg-blue-950 p-6">
            <h1 className="mb-2 text-neutral-50 text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
              William Ackerman
            </h1>
            <h2 className="mb-4 text-neutral-50 text-xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
              Full-Stack Web Developer
            </h2>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexDirection: {
                xs: 'column',
                lg: 'row',
              },
              maxWidth: {
                xs: '90%',
                lg: '80%',
              },
              margin: '0 auto',
             }}>
              <div className="lg:p-4">
                <p className="text-base sm:text-lg md:text-xl text-neutral-50 text-center mb-4 lg:mb-0">
                  As a SUNY Farmingdale alumnus having earned a Bachelor of Science in Computer Programming & 
                  Information Systems, I know how to approach developing solutions, whether websites or applications. 
                  With a wide array of skills at my disposal, I understand the importance of delivering quality solutions 
                  to clients.
                </p>
              </div>
              <div className="lg:p-4">
                <img src={Headshot} alt="Headshot" className="max-w-[175px] md:max-w-[250px] lg:max-w-[300px] rounded-sm" />
              </div>
            </Box>
          </div>
          <div className="bg-blue-900 p-6">

            <section className="mt-2 sm:mt-4 lg:mt-8 mb-8 sm:mb-12 lg:mb-16">
              <h2 className="mb-4 text-neutral-50 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
                Projects
              </h2>
              <p className="mx-auto w-full sm:w-lg text-center mb-4 bg-neutral-50 p-4 rounded-sm">
                Projects are not only proof of my expertise in specific technologies, but also opportunities for me 
                to learn new technologies and expand my knowledge of ones I am familiar with.
              </p>
              <h3 className="mb-4 text-neutral-50 font-normal text-xl sm:text-2xl md:text-3xl xl:text-4xl text-center">
                Featured Projects
              </h3>
              <FetchProjects featured="1" />
              <p className="mx-auto w-full sm:w-lg text-center mb-4 bg-neutral-50 p-4 rounded-sm">
                Visit the <Link to={"/projects"} className="text-blue-600 hover:text-blue-700 underline hover:no-underline">Projects</Link> page 
                if you would like to learn more about my projects.
              </p>
            </section>

            <section className="mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
              <h2 className="mb-4 text-neutral-50 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
                Skills
              </h2>
              <p className="mx-auto w-full sm:w-lg text-center mb-4 bg-neutral-50 p-4 rounded-sm">
                As a web developer, it is important for me to be well-versed in various technologies and skills. I bring a diverse 
                range of frontend, backend, database, tool-related, and soft skills to contribute towards efficient development.
              </p>
              <h3 className="mb-4 text-neutral-50 font-normal text-xl sm:text-2xl md:text-3xl xl:text-4xl text-center">
                Featured Skills
              </h3>
              <FetchFeaturedSkills />
              <p className="mx-auto w-full sm:w-lg text-center mb-4 bg-neutral-50 p-4 rounded-sm">Visit the <Link to={"/skills"} className="text-blue-600 hover:text-blue-700 underline hover:no-underline">Skills</Link> page 
              if you would like to see more of my skills.</p>
            </section>

            <section className="mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
              <h2 className="mb-4 text-neutral-50 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
                About Me
              </h2>
              <div className="mx-auto w-full sm:w-lg bg-neutral-50 p-4 rounded-sm mb-4">
                <p className="text-center mb-2">
                  I'm always ready to work with new people and learn new technologies.
                </p>
                <p className="text-center">Visit the <Link to={"/about"} className="text-blue-600 hover:text-blue-700 underline hover:no-underline">About</Link> page to learn more about me and this website.</p>
              </div>
            </section>

            <section className="mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
              <h2 className="mb-4 text-neutral-50 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
                Contact
              </h2>
              <div className="mx-auto w-full sm:w-lg bg-neutral-50 p-4 rounded-sm mb-4">
                <p className="text-center mb-2">
                  I'm always ready to work with new people and learn new technologies.
                </p>
                <p className="text-center">
                  Visit the <Link to={"/contact"} className="text-blue-600 hover:text-blue-700 underline hover:no-underline">Contact</Link> page 
                  if you would like to get in touch with me.
                </p>
              </div>
            </section>

            <section className="mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
              <h2 className="mb-4 text-neutral-50 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
                View Resume/CV
              </h2>
              <div className="mx-auto w-full sm:w-lg bg-neutral-50 p-4 rounded-sm mb-4">
                <p className="text-center mb-2">
                  Resumes and CVs aren't just documents. A resume allows one to highlight their greatest accomplishments.
                  Meanwhile, a CV is a living, breathing representation of one's career, from start to present. Feel free to 
                  take a look and indulge yourself in the the milestones my resume highlights and the story my CV tells.
                </p>
                <p className="text-center">You can view my resume and CV <Link to={"/viewresumecv"} className="text-blue-600 hover:text-blue-700 underline hover:no-underline">here</Link>.</p>
              </div>
            </section>
          </div>
      <Footer />
    </>
  )
}

export default Home