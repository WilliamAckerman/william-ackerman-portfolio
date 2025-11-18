import './../App.css'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Headshot from '../assets/images/Headshot.jpg';
import Box from '@mui/material/Box';
import { Link } from "react-router";

function About() {

  return (
    <>
      <Navbar />
        <div className="p-6 bg-blue-900">
          <h1 className="mb-4 md:mb-8 text-neutral-50 text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
            About
          </h1>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
              justifyContent: 'space-evenly',
              margin: '0 auto',
            }}
          >
            <div className="p-4 m-4 bg-neutral-50 rounded-sm overflow-y-auto max-h-[60vh] sm:max-h-auto">
              <h2
                className="
                  font-bold
                  text-xl sm:text-2xl
                  mb-2
                  "
                >
                About Me
              </h2>
              <p className="mb-2">
                When I first started attending Farmingdale State College back in Fall 2021, I 
                didn't really see myself as a programmer; I would often just do what was expected 
                of me and move on with my life.
              </p>
              <p className="mb-2 mt-2">
                Of course, I wouldn't stay that way forever.
              </p>
              <p className="mb-2 mt-2">
                As I progressed through my quest to earn a Bachelor of Science in Computer Programming & Information 
                Systems, I learned committment, connection, and above all, dedication. As I became acquainted with new technologies, 
                I felt my passion constantly growing.
              </p>
              <p className="mb-2 mt-2">
                My contributions have helped grow Kelm Media. Originally, I interned there from June 2024 to December 2024. It was a strange new 
                environment, as I had just begun to get familiar with website development. However, through those six months, I emerged a proficient and 
                experienced developer. It seemed as though I was ready for what lied ahead of me following my graduation.
              </p>
              <p className="mb-2 mt-2">
                And then, it happened. After a final send-off semester, I had graduated, obtaining the degree I had sought after. Three months later, I was 
                welcomed back to Kelm, where I am still working to this day.
              </p>
              <p className="mb-2 mt-2">
                As far as personal interests go, I am a theatre person. During my time at Farmingdale State College, I joined its Backstage Theatre Company 
                during my first semester. Later on, I would become the BSTC's Vice President, working with other offices to plan and coordinate semester events. And 
                in my final semester, I was promoted to President, helping lead the BSTC. Even after my graduation and departure, I have faith the BSTC is in good hands.
              </p>
              <p className="mb-2">
                And with that, I can only wonder where my future will take me next.
              </p>
            </div>
            <div>
              <img src={Headshot} alt="Headshot" className="max-w-[175px] md:max-w-[300px] md:w-auto h-auto rounded-sm" />
            </div>
          </Box>
          <div className="mt-8 bg-neutral-50 rounded-sm shadow-sm p-4">
              <h2
                className="
                  font-bold
                  text-xl sm:text-2xl
                  mb-2
                  "
                >
                About This Website
              </h2>  
              <p className="text-base mb-2">
                This website functions as a full-stack web application, showcasing my expertise in various technologies.
              </p>
              <p className="text-base mt-2 mb-2">
                This website's frontend was created through Vite and React. Material UI was used for several elements of this website's structure. 
                Meanwhile, TailwindCSS was used to provide styling and responsiveness to ensure a clean, user-friendly experience. TanStack query 
                is used to fetch data on projects and skills from a backend API. This website's 
                frontend is being deployed using Vercel.
              </p>
              <p className="text-base mt-2">
                This website's backend was created using Node.js and Express.js to create a RESTful API that communicates with a MongoDB database. {/*The contact form 
                also makes use of Nodemailer, Google's OAuth 2.0, and the Gmail API v1 to send messages users submit through the contact form to my Gmail inbox.*/} 
                This website's backend is being deployed using Render.
              </p>
              <p className="text-base mt-2">
                By using this website, you agree to this website's <Link 
                  to={"/privacypolicy"} 
                  className="
                    text-blue-500 
                    underline 
                    hover:text-blue-600 
                    hover:no-underline
                    "
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