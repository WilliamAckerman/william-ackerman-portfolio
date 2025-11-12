import './../App.css'
/*import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';*/
import { FetchProjects } from '../api/FetchProjects.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Projects() {

  return (
    <>
      <Navbar />
        <div className="p-6 bg-blue-900 min-h-screen">
          <h1 className="mb-4 text-neutral-50 text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
            Projects
          </h1>
          <p className="text-base text-neutral-50 mb-4 text-center">
            As a developer, projects allow me to showcase my experience in various technologies. Feel free to view information on what 
            I have worked on.
          </p>
          <FetchProjects />
        </div>
      <Footer />
    </>
  )
}

export default Projects