import './../App.css'
import { FetchProjects } from '../components/FetchProjects.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

import { DisplayModeHook } from '../hooks/DisplayModeHook.jsx';

function Projects() {

  const { bg, text, boxBg, border } = DisplayModeHook()

  return (
    <>
      <Navbar activeLink="Projects" />
      <div className={`page-main ${bg}`}>
        <h1 className={`${text} main-header`}>
          Projects
        </h1>
        <p className={`${text} ${boxBg} text-base mb-4 text-center mx-auto w-full sm:w-xl rounded-sm shadow-sm p-4 ${border}`}>
          As a developer, projects allow me to showcase my experience in various technologies. Feel free to learn more about projects 
          I have worked on, including specific technologies involved.
        </p>
        <FetchProjects />
      </div>
      <Footer />
    </>
  )
}

export default Projects