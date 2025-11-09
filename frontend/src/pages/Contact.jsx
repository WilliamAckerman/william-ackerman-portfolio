import { useState } from 'react';
import './../App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Link } from 'react-router';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [agree, setAgree] = useState(false) // "on" indicates the checkbox has been checked - helps if a user disables JavaScript

  const queryClient = new QueryClient()

  const handleSubmit = (e) => {
    e.preventDefault() // Prevents the page from refreshing upon form submission

    let error = "";
    const emailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")

    if (name.trim() == "") {
      error += "\nNo name was provided."
    }

    if (email.trim() == "") {
      error += "\nNo email was provided."
    } else if (!emailRegex.test(email)) {
      error += "\nAn invalid email adddress was entered."
    }

    if (subject.trim() != "") {
      error += "\nNo subject was provided."
    }

    if (message.trim() != "") {
      error += "\nNo message was provided."
    }

    if (agree != "on") {
      error += "\nThe checkbox indicating agreement to this website's Privacy Policy was not checked."
    }

    if (error.trim() != "") {
      alert(error)
      return false;
    }

  }

  return (
    <>
      <Navbar />
        <QueryClientProvider client={queryClient}>
          <div className="p-6 bg-blue-900 min-h-screen">
            <h1 className="mb-4 text-neutral-50 text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
              Contact
            </h1>
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: 'row',
                },
                justifyContent: 'space-evenly',
                margin: '0 auto',
              }}
            >
              <div className="mb-4 md:mb-0 bg-neutral-50 p-4 rounded-sm shadow-sm min-w-full md:min-w-[48%]">
                <h2
                  className="
                    mb-4
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    font-bold
                  "
                >
                  Contact Me
                </h2>
                <div className="mb-2">
                  <span className="
                    text-base
                    sm:text-lg
                    lg:text-xl
                    ">
                    <div className="pr-2 inline-block">
                      <FaEnvelope className="inline" />
                    </div>
                    <a
                      href="mailto:williamjohnackerman@gmail.com"
                      className="
                        underline 
                        hover:no-underline 
                        text-blue-500 
                        hover:text-blue-600
                        break-all
                        "
                    >
                      williamjohnackerman@gmail.com
                    </a>
                  </span>
                </div>

                <div className="mb-2">
                  <span className="
                    text-base
                    sm:text-lg
                    lg:text-xl
                    ">
                    <div className="pr-2 inline-block">
                      <FaPhoneAlt className="inline" />
                    </div>
                    <a
                      href="tel:+15162528285"
                      className="
                        underline
                        hover:no-underline
                        text-blue-500
                        hover:text-blue-600
                        break-all
                      "
                    >
                      (+1) 516-252-8285
                    </a>
                  </span>
                </div>
                <hr />

                <h2
                  className="
                    mt-2
                    mb-4
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    font-bold
                  "
                >
                  My Socials
                </h2>

                <div className="mb-2">
                  <span className="
                    text-base
                    sm:text-lg
                    lg:text-xl
                    ">
                    <div className="pr-2 inline-block">
                      <FaLinkedin className="inline" />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/william-ackerman-6a4005290/"
                      target="_blank"
                      rel="noreferrer"
                      className="
                        underline
                        hover:no-underline
                        text-blue-500
                        hover:text-blue-600
                      "
                    >
                      LinkedIn
                    </a>
                  </span>
                </div>

                <div className="mb-2">
                  <span className="
                    text-base
                    sm:text-lg
                    lg:text-xl
                    ">
                    <div className="pr-2 inline-block">
                      <FaGithub className="inline" />
                    </div>
                    <a
                      href="https://github.com/WilliamAckerman"
                      target="_blank"
                      rel="noreferrer"
                      className="
                        underline
                        hover:no-underline
                        text-blue-500
                        hover:text-blue-600
                      "
                    >
                      Github
                    </a>
                  </span>
                </div>

                
              </div>

              {/* Contact Form */}
              <div className="bg-neutral-50 p-4 rounded-sm shadow-sm min-w-full md:min-w-[48%]">
                <h2
                  className="
                    mb-4
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    font-bold
                  "
                >
                  Contact Form
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label for="name" className="mb-2">Name</label><br />
                    <TextField 
                      id="name" 
                      type="text" 
                      placeholder="Name" 
                      variant="outlined" 
                      className="w-full"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label for="email" className="mb-2">Email</label><br />
                    <TextField 
                      id="email" 
                      type="email" 
                      placeholder="Email" 
                      variant="outlined"
                      className="w-full"
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                  <div className="mb-2">
                    <label for="subject" className="mb-2">Subject</label><br />
                    <TextField 
                      id="subject" 
                      type="text" 
                      placeholder="Subject" 
                      variant="outlined"
                      className="w-full"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label for="message" className="mb-2">Message</label><br />
                    <TextField
                      id="message"
                      type="text"
                      placeholder="Message"
                      variant="outlined"
                      className="w-full"
                      onChange={(e) => setMessage(e.target.value)}
                      multiline
                    />
                  </div>

                  <FormGroup className="mb-4">
                    <p className="text-base">
                      By clicking the "SEND EMAIL" button, you agree to this website's <Link className="underline hover:no-underline text-blue-500 hover:text-blue-600" to={"/privacypolicy"}>Privacy Policy</Link>.
                    </p>
                    <FormControlLabel required control={
                      <Checkbox id="agree" onChange={(e) => setAgree(e.target.value)} />
                    } label="I agree to this website's Privacy Policy" />
                  </FormGroup>

                  
                  <Button type="submit" variant="contained">

                    <span className="text-sm sm:text-base">
                      <div className="pr-2 inline-block">
                        <FaEnvelope className="inline" />
                      </div>
                      Send Email
                    </span>
                  </Button>
                </form>
              </div>
            </Box>
          </div>
        </QueryClientProvider>
      <Footer />
    </>
  )
}

export default Contact