// CSS import
import './../index.css'

// React-router import
import { Link } from 'react-router';

// Component imports
import Navbar from './../components/Navbar.jsx';
import Footer from './../components/Footer.jsx';
import Resume from './../components/Resume.jsx';

// Display mode hook import
import { DisplayModeHook } from './../hooks/DisplayModeHook.jsx';

function ViewResumeCV() {

  // Link to resume
  const resumePDFLink = `${import.meta.env.VITE_FRONTEND_URL}/William_Ackerman_Resume.pdf`

  // Link to a one-page version of resume
  const onePageResumeLink = `${import.meta.env.VITE_FRONTEND_URL}/William_Ackerman_Resume_1_Page.pdf`

  // Link to CV
  const cvLink = `${import.meta.env.VITE_FRONTEND_URL}/William_Ackerman_CV.pdf`

  // Display mode-related variables
  const { bg, text, boxBg, boxText, link, border } = DisplayModeHook()
  
  return (
    <>
      {/* Navbar */}
      <Navbar activeLink="Resume" />

      {/* Resume/CV page */}
      <main className={`page-main ${bg}`}>
        <h1 className={`main-header ${text}`}>
          View Resume/CV
        </h1>

        {/* Page description text box */}
        <div className={`main-caption ${border} ${boxBg}`}>
          <p className={`${boxText}`}>
            A resume allows one to view a snapshot of my major proficiencies and past experiences. Meanwhile, 
            my CV will take you on a journey throughout my ever-growing career.
          </p>
        </div>

        {/* Resume section */}
        <section className="mb-8">
          <h2
            className={`
              ${text}
              text-center
              mb-4
              text-xl 
              sm:text-3xl 
              md:text-4xl 
              xl:text-5xl
            `}
          >
            Resume
          </h2>

          <Resume />

          {/* Links to view resume as PDF */}
          <div className={`${boxBg} ${border} text-center mt-8 mb-4 p-4 mx-auto w-full sm:w-xl rounded-sm`}>
            <p className={`${boxText} mb-4`}>
              To view a PDF version of my resume, please visit the following link: <Link to={resumePDFLink} className={`${link}`} target="_blank" rel="noreferrer">Resume PDF</Link>.
            </p>
            <p className={`${boxText}`}>
              To view a PDF of a 1-page version of my resume, please visit the following link: <Link to={onePageResumeLink} className={`${link}`} target="_blank" rel="noreferrer">1-Page Resume PDF</Link>.
            </p>
          </div>
        </section>

        {/* CV section */}
        <section>
          <h2
            className={`
                ${text}
                text-center
                mb-4
                text-xl 
                sm:text-3xl 
                md:text-4xl 
                xl:text-5xl
            `}
          >
            CV
          </h2>

          {/* Contains a link to view CV as PDF */}
          <div className={`${boxBg} ${border} text-center mt-4 mb-4 p-4 mx-auto w-full sm:w-xl rounded-sm`}>
            <p className={`${boxText}`}>
              To view a PDF of my CV, please visit the following link: <Link to={cvLink} className={`${link}`} target="_blank" rel="noreferrer">CV PDF</Link>.
            </p>
          </div>
        </section>
      </main>
      {/* End of Resume/CV page */}

      {/* Footer */}
      <Footer />
    </>
  )
}

export default ViewResumeCV