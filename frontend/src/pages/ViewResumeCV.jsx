import { Link } from 'react-router';
import './../App.css'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Resume from '../components/Resume.jsx';

function ViewResumeCV() {
  const resumePDFLink = `${import.meta.env.VITE_FRONTEND_URL}/William_Ackerman_Resume.pdf`
  const onePageResumeLink = `${import.meta.env.VITE_FRONTEND_URL}/William_Ackerman_Resume_1_Page.pdf`

  const cvLink = `${import.meta.env.VITE_FRONTEND_URL}/William_Ackerman_CV.pdf`
  
  return (
    <>
      <Navbar />
        <div className="page-main">
          <h1 className="main-header">
            View Resume/CV
          </h1>

          <div className="main-caption">
            <p>
              A resume allows one to view a snapshot of my major proficiencies and past experiences. Meanwhile, 
              my CV will take you on a journey throughout my ever-growing career.
            </p>
          </div>

          <section className="mb-8">
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

            <div className="bg-neutral-50 text-center mt-8 mb-4 p-4 mx-auto w-full sm:w-xl rounded-sm">
              <p className="mb-4">
                To view a PDF of this resume, please visit <Link to={resumePDFLink} className="text-blue-600 hover:text-blue-700 underline hover:no-underline" target="_blank" rel="noreferrer">here</Link>.
              </p>
              <p>
                To view a 1-page version of my resume, please visit <Link to={onePageResumeLink} className="text-blue-600 hover:text-blue-700 underline hover:no-underline" target="_blank" rel="noreferrer">here</Link>.
              </p>
            </div>
          </section>
          
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

          <div className="bg-neutral-50 text-center mt-4 mb-4 p-4 mx-auto w-full sm:w-xl rounded-sm">
            <p>
              To view my CV, please visit <Link to={cvLink} className="text-blue-600 hover:text-blue-700 underline hover:no-underline" target="_blank" rel="noreferrer">here</Link>.
            </p>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default ViewResumeCV