import './../App.css'
/*import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';*/
import { FetchProjects } from '../components/FetchProjects.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Projects() {

  return (
    <>
      <Navbar />
      <div className="page-main">
        <h1 className="main-header">
          Projects
        </h1>
        <p className="text-base mb-4 text-center mx-auto w-full sm:w-xl bg-neutral-50 rounded-sm p-4">
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