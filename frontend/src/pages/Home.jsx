import './../App.css'
import Box from '@mui/material/Box';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { MongoFetchTest } from './../api/api.jsx';
import { Link } from 'react-router';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Headshot from '../assets/images/Headshot.jpg';

function Home() {
  const queryClient = new QueryClient()

  return (
    <>
      <Navbar />
        <QueryClientProvider client={queryClient}>
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
              <div>
                <p className="text-xl md:text-2xl text-neutral-50 text-center mb-4 lg:mb-0">
                  As a SUNY Farmingdale alumnus having earned a Bachelor of Science in Computer Programming & 
                  Information Systems, I know how to approach developing solutions, whether websites or applications. 
                  With a wide array of skills at my disposal, I understand the importance of delivering quality solutions 
                  to clients.
                </p>
              </div>
              <div>
                <img src={Headshot} alt="Headshot" className="max-w-[175px] sm:max-w-[200px] lg:max-w-[250px]" />
              </div>
            </Box>
          </div>
          <div className="bg-blue-900 p-6">
            <MongoFetchTest />
            <h2 className="mb-4 text-neutral-50 text-xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
              Projects
            </h2>
            <h2 className="mb-4 text-neutral-50 text-xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
              Skills
            </h2>
            <h2 className="mb-4 text-neutral-50 text-xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
              About Me
            </h2>
            <h2 className="mb-4 text-neutral-50 text-xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
              Contact
            </h2>
            <section>
              <h2 className="mb-4 text-neutral-50 text-xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
                View CV
              </h2>
              <p className="text-neutral-50 mb-2">
                A CV isn't just a document; it's a living, breathing representation of my career, from start to present. Feel free to 
                take a look and indulge yourself in the story my CV tells.
              </p>
              <p className="text-neutral-50 text-center">You can view my CV <Link to={"/viewcv"} className="text-blue-300 underline hover:no-underline">here</Link>.</p>
            </section>
          </div>
        </QueryClientProvider>
      <Footer />
    </>
  )
}

export default Home