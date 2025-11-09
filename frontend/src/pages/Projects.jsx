import './../App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { FetchProjects } from '../api/FetchProjects.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Projects() {
  const queryClient = new QueryClient()

  return (
    <>
      <Navbar />
        <QueryClientProvider client={queryClient}>
          <div className="p-6 bg-blue-900 min-h-screen">
            <h1 className="mb-4 text-neutral-50 text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
              Projects
            </h1>
            <FetchProjects />
          </div>
        </QueryClientProvider>
      <Footer />
    </>
  )
}

export default Projects