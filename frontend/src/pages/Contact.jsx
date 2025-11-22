import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import './../App.css'
import { Link } from 'react-router';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

//import { sendMessage } from '../api/sendMessage.js';

function Contact() {
  {/*const [disableFields, setDisableFields] = useState(false)

  const { register, handleSubmit, control, reset, formState, formState: { /*isSubmitSuccessful,*//* errors } } = useForm({ defaultValues: { name: "", email: "", subject: "", message: "", agree: false }})
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
    var messageRes = await sendMessage({...data});
    if (messageRes.ok) {
      alert("Message sent successfully!")
    } else {
      alert("Failed to send message. Please try again.")
    }

    setDisableFields(false)
  }*/}

  return (
    <>
      <Navbar />
          <div className="p-6 bg-blue-900 min-h-screen">
            <h1 className="mb-4 md:mb-8 text-neutral-50 text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
              Contact
            </h1>
            <div className="flex flex-col lg:flex-row">

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
                {/*<p className="mt-4 text-base">
                  The contact form is currently disabled until a privacy policy has been established 
                  and reviewed. You can still reach me via the email, phone, or social links provided.
                </p>*/}
                <p className="mt-4 text-base">
                  The contact form is not complete yet. You can still reach me via the email, phone, 
                  or social links provided.
                </p>
                {/*<p className="mt-2 mb-4 text-base">
                  An asterisk (<span className="text-red-700">*</span>) indicates a required field.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup className="mb-4">
                    <label htmlFor="name" className="mb-2">Name<span className="text-red-700">*</span></label>
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
                    <label htmlFor="email" className="mb-2">Email<span className="text-red-700">*</span></label>
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
                    <label htmlFor="subject" className="mb-2">Subject<span className="text-red-700">*</span></label>
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
                    <label htmlFor="message" className="mb-2">Message<span className="text-red-700">*</span></label>
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

                  <FormGroup className="mb-4">
                    <p className="text-base">
                      By clicking the "SEND EMAIL" button, you agree to this website's <Link className="underline hover:no-underline text-blue-500 hover:text-blue-600" to={"/privacypolicy"}>Privacy Policy</Link>.
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
                    <p className="text-red-700"><ErrorMessage errors={errors} name="agree" /></p>
                  </FormGroup>

                  
                  <Button type="submit" variant="contained" disabled={disableFields}>

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