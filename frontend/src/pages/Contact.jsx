//import { useState, useEffect, useCallback } from 'react';
//import { useForm } from 'react-hook-form';
import './../App.css'
/*import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';*/
//import { Link } from 'react-router';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
/*import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox';*/
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

//import { sendMessage } from '../api/sendMessage.js';

function Contact() {
  

  /*const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [agree, setAgree] = useState(false) // "on" indicates the checkbox has been checked - helps if a user disables JavaScript

  const { register, handleSubmit, reset, formState, formState: { isSubmitSuccessful } } = useForm({ defaultValues: { name: "", email: "", subject: "", message: "" }})
  const onSubmit = data => {
    submission(data)
    reset({...data})
  }

  const resetContactForm = useCallback(async () => {
    const result = {
      "name": name ? name : "",
      "email": email ? email : "",
      "subject": subject ? subject : "",
      "message": message ? message : ""
    }
    reset(result)
  }, [reset, name, email, subject, message])

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', email: '', subject: '', message: '' })
    }
  }, [formState, reset])

  const submission = async (data) => {
    let error = "";
    const emailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")

    if (data.name.trim() == "") {
      error += "\nNo name was provided."
    }

    if (data.email.trim() == "") {
      error += "\nNo email was provided."
    } else if (!emailRegex.test(data.email)) {
      error += "\nAn invalid email adddress was entered."
    }

    if (data.subject.trim() == "") {
      error += "\nNo subject was provided."
    }

    if (data.message.trim() == "") {
      error += "\nNo message was provided."
    }

    if (!agree) {
      error += "\nThe checkbox indicating agreement to this website's Privacy Policy was not checked."
    }

    if (error.trim() != "") {
      alert(error)
      return false;
    }

    // TODO: Send the message
    var messageRes = await sendMessage({...data});
    if (messageRes.ok) {
      alert("Message sent successfully!")
      setAgree(false)
      await resetContactForm()
    } else {
      alert("Failed to send message. Please try again.")
    }
  }*/

  return (
    <>
      <Navbar />
          <div className="p-6 bg-blue-900 min-h-screen">
            <h1 className="mb-4 text-neutral-50 text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
              Contact
            </h1>
            <div className="flex flex-col md:flex-row">

              {/* Email/Phone/Socials */}
              <div className="mb-4 md:mb-0 ml-0 mr-0 md:ml-2 md:mr-2 bg-neutral-50 p-4 rounded-sm shadow-sm min-w-full md:min-w-[48%]"> {/* Originally 48% */}
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
              <div className="mt-4 md:mt-0 ml-0 mr-0 md:ml-2 md:mr-2 bg-neutral-50 p-4 rounded-sm shadow-sm min-w-full md:min-w-[48%]">
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
                <p className="mt-4 text-base">
                  The contact form is currently disabled until a privacy policy has been established 
                  and reviewed. You can still reach me via the email, phone, or social links provided.
                </p>
                {/*<form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-2">
                    <label htmlFor="name" className="mb-2">Name</label><br />
                    <TextField 
                      id="name" 
                      type="text" 
                      placeholder="Name" 
                      variant="outlined" 
                      className="w-full"
                      //onChange={(e) => setName(e.target.value)}

                      defaultValue=""
                      {...register("name")}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="mb-2">Email</label><br />
                    <TextField 
                      id="email" 
                      type="email" 
                      placeholder="Email" 
                      variant="outlined"
                      className="w-full"
                      //onChange={(e) => setEmail(e.target.value)}

                      defaultValue=""
                      {...register("email")}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="subject" className="mb-2">Subject</label><br />
                    <TextField 
                      id="subject" 
                      type="text" 
                      placeholder="Subject" 
                      variant="outlined"
                      className="w-full"
                      //onChange={(e) => setSubject(e.target.value)}

                      defaultValue=""
                      {...register("subject")}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="mb-2">Message</label><br />
                    <TextField
                      id="message"
                      type="text"
                      placeholder="Message"
                      variant="outlined"
                      className="w-full"
                      //onChange={(e) => setMessage(e.target.value)}
                      multiline

                      defaultValue=""
                      {...register("message")}
                    />
                  </div>

                  <FormGroup className="mb-4">
                    <p className="text-base">
                      By clicking the "SEND EMAIL" button, you agree to this website's <Link className="underline hover:no-underline text-blue-500 hover:text-blue-600" to={"/privacypolicy"}>Privacy Policy</Link>.
                    </p>
                    <FormControlLabel required control={
                      <Checkbox id="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
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
                </form>*/}
              </div>
            </div>
          </div>
      <Footer />
    </>
  )
}

export default Contact