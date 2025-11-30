import './../App.css'
import './../styles/Contact.css';
import 'altcha';
import { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import { Link } from 'react-router';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

import { sendMessage } from '../api/sendMessage.js';

import Altcha from './../components/Altcha';

function Contact() {
  const [disableFields, setDisableFields] = useState(false)
  const altchaRef = useRef(null)

  const { register, handleSubmit, control, reset, formState, formState: { /*isSubmitSuccessful,*/ errors } } = useForm({ defaultValues: { name: "", email: "", subject: "", message: "", agree: false }})
  const onSubmit = data => {
    setDisableFields(true)
    submission(data)
    reset({...data})
    //setDisableFields(false)
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', email: '', subject: '', message: '' })
    }
  }, [formState, reset])

  const submission = async (data) => {
    let error = [];
    const emailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")

    if (data.name.trim() == "") {
      error.push("No name was provided.")
    }

    if (data.email.trim() == "") {
      error.push("No email was provided.")
    } else if (!emailRegex.test(data.email)) {
      error.push("An invalid email adddress was entered.")
    }

    if (data.subject.trim() == "") {
      error.push("No subject was provided.")
    }

    if (data.message.trim() == "") {
      error.push("No message was provided.")
    }

    if (!data.agree) {
      error.push("The checkbox indicating agreement to this website's Privacy Policy was not checked.")
    }

    if (error.length > 0) {
      let errorMessage = "Error:";
      for (let i = 0; i < error.length; i++) {
        errorMessage += "\n" + error[i]
      }
      alert(errorMessage)
      setDisableFields(false)
      return false;
    }

    // TODO: Send the message
    var messageRes = await sendMessage({...data}, altchaRef.current?.value);
    if (messageRes.ok) {
      alert("Message sent successfully!")
    } else {
      alert("Failed to send message. Please try again.")
    }

    setDisableFields(false)
  }

  return (
    <>
      <Navbar />
          <div className="page-main">
            <h1 className="main-header">
              Contact
            </h1>

            <div className="max-w-[1400px] mx-auto">
              <p className="text-base mb-8 text-center mx-auto lg:min-w-[100%] lg:max-w-[100%] bg-neutral-50 rounded-sm p-4">
                I'm always open to working with new people, or simply just having a casual discussion! Feel free to contact me using either 
                the contact links provided or the contact form.
              </p>

              <div className="flex flex-col lg:flex-row lg:justify-between">

                {/* Email/Phone/Socials */}
                <div className="contact-section mb-4 lg:mb-0 lg:mr-1"> {/* Originally 48% */}
                  <h2>
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
                      <Link
                        to={"mailto:williamjohnackerman@gmail.com"}
                        className="
                          general-link
                          break-all
                          "
                      >
                        williamjohnackerman@gmail.com
                      </Link>
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
                      <Link
                        to={"tel:+15162528285"}
                        className="
                          general-link
                          break-all
                        "
                      >
                        (+1) 516-252-8285
                      </Link>
                    </span>
                  </div>
                  <hr />

                  <h2 className="mt-2">
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
                      <Link
                        to={"https://www.linkedin.com/in/william-ackerman-6a4005290/"}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          general-link
                        "
                      >
                        LinkedIn
                      </Link>
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
                      <Link
                        to={"https://github.com/WilliamAckerman"}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          general-link
                        "
                      >
                        Github
                      </Link>
                    </span>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="contact-section mt-4 lg:mt-0 lg:ml-1">
                  <h2>
                    Contact Form
                  </h2>
                  {/*<p className="mt-4 text-base">
                    The contact form is currently disabled until a privacy policy has been established 
                    and reviewed. You can still reach me via the email, phone, or social links provided.
                  </p>*/}
                  {/*<p className="mt-4 text-base">
                    The contact form is not complete yet. You can still reach me via the email, phone, 
                    or social links provided.
                  </p>*/}
                  <p className="mt-2 mb-4 text-base">
                    An asterisk (<span className="required">*</span>) indicates a required field.
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup className="mb-4">
                      <label htmlFor="name" className="mb-2">Name<span className="required">*</span></label>
                      <TextField 
                        id="name" 
                        type="text" 
                        placeholder="Name" 
                        variant="outlined" 
                        className="w-full"
                        //onChange={(e) => setName(e.target.value)}

                        defaultValue=""
                        {...register("name", { required: "Name is required." })}
                        disabled={disableFields}
                      />
                      <p className="text-red-700"><ErrorMessage errors={errors} name="name" /></p>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <label htmlFor="email" className="mb-2">Email<span className="required">*</span></label>
                      <TextField 
                        id="email" 
                        type="email" 
                        placeholder="Email" 
                        variant="outlined"
                        className="w-full"
                        //onChange={(e) => setEmail(e.target.value)}

                        defaultValue=""
                        {...register("email", {
                          required: "Email is required.",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Invalid email format.",
                          },
                        })}
                        disabled={disableFields}
                      />
                      <p className="text-red-700"><ErrorMessage errors={errors} name="email" /></p>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <label htmlFor="subject" className="mb-2">Subject<span className="required">*</span></label>
                      <TextField 
                        id="subject" 
                        type="text" 
                        placeholder="Subject" 
                        variant="outlined"
                        className="w-full"
                        //onChange={(e) => setSubject(e.target.value)}

                        defaultValue=""
                        {...register("subject", {
                          required: "Subject line is required."
                        })}
                        disabled={disableFields}
                      />
                      <p className="text-red-700"><ErrorMessage errors={errors} name="subject" /></p>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <label htmlFor="message" className="mb-2">Message<span className="required">*</span></label>
                      <TextField
                        id="message"
                        type="text"
                        placeholder="Message"
                        variant="outlined"
                        className="w-full"
                        //onChange={(e) => setMessage(e.target.value)}
                        multiline

                        defaultValue=""
                        {...register("message", {
                          required: "Message body is required."
                        })}
                        disabled={disableFields}
                      />
                      <p className="text-red-700"><ErrorMessage errors={errors} name="message" /></p>
                    </FormGroup>

                    {/* ALTCHA WebComponent */}
                    {/*<altcha-widget challengeurl={`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_API_ROUTE}/altcha`}></altcha-widget>*/}
                    <Altcha ref={altchaRef} />

                    <FormGroup className="mb-4 mt-4">
                      <p className="text-base">
                        By clicking the "SEND EMAIL" button, you agree to this website's <Link className="general-link" to={"/privacypolicy"}>Privacy Policy</Link>.
                      </p>
                      <FormControlLabel required control={

                        <Controller
                          control={control}
                          //rules={{ required: true }}
                          name="agree"
                          render={({ field }) => (
                            <Checkbox
                              {...register("agree", {
                                required: "Checkbox is required."
                              })}
                              {...field}
                              checked={field['value'] ?? false}
                              disabled={disableFields}
                            />
                          )}
                        />
                      } label="I agree to this website's Privacy Policy" />
                      <p className="required"><ErrorMessage errors={errors} name="agree" /></p>
                    </FormGroup>

                  
                    <Button type="submit" variant="contained" disabled={disableFields}>

                      <span className="text-sm sm:text-base">
                        <div className="pr-2 inline-block">
                          <FaEnvelope className="inline" />
                        </div>
                        Send Email
                      </span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      <Footer />
    </>
  )
}

export default Contact