import { Link } from 'react-router';
import './../App.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Box from "@mui/material/Box";
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Resume from '../components/Resume.jsx';

function ViewResumeCV() {
  const pdfLink = `${import.meta.env.VITE_FRONTEND_URL}/William_Ackerman_CV.pdf`

  return (
    <>
      <Navbar />
        <div className="p-6 bg-blue-900 min-h-screen">
          <h1 className="mb-4 md:mb-8 text-neutral-50 text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
            View Resume/CV
          </h1>

          <h2
            className="
                text-neutral-50
                text-center
                mb-4
                text-xl 
                sm:text-3xl 
                md:text-4xl 
                xl:text-5xl
            "
          >
            Resume
          </h2>

          <Resume />
          
          <h2
            className="
                text-neutral-50
                text-center
                mb-4
                text-xl 
                sm:text-3xl 
                md:text-4xl 
                xl:text-5xl
            "
          >
            CV
          </h2>

          <p 
            className="
                bg-neutral-50
                text-center mb-4
                rounded-sm
                p-4
                "
            >
            To view my CV, please visit <Link to={pdfLink} className="text-blue-600 hover:text-blue-700 underline hover:no-underline" target="_blank" rel="noreferrer">here</Link>.
          </p>
        </div>
      <Footer />
    </>
  )
}

export default ViewResumeCV