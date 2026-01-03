// Component imports
import { FetchProjects } from '../components/FetchProjects.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

// Display mode hook import
import { DisplayModeHook } from '../hooks/DisplayModeHook.jsx';

function Projects() {

  const { bg, text, boxBg, border } = DisplayModeHook()

  return (
    <>
      {/* Navbar page */}
      <Navbar activeLink="Projects" />

      {/* Projects page */}
      <main className={`page-main ${bg}`}>
        <h1 className={`${text} main-header`}>
          Projects
        </h1>

        {/* Page description text box */}
        <p className={`${text} ${boxBg} text-base mb-4 text-center mx-auto w-full sm:w-xl rounded-sm shadow-sm p-4 ${border}`}>
          As a developer, projects allow me to showcase my experience in various technologies. Feel free to learn more about projects 
          I have worked on, including specific technologies involved.
        </p>

        {/* Displays all projects */}
        <FetchProjects />
      </main>
      {/* End of Projects page */}

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Projects