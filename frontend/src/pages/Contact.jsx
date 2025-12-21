import './../App.css'
import './../styles/Contact.css';
import './../styles/Modal.css';
import 'altcha';
import { useState, useEffect, useContext, useRef } from 'react';
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
import useMediaQuery from '@mui/material/useMediaQuery';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

import { sendMessage } from '../api/sendMessage.js';

import Altcha from './../components/Altcha';

import { DisplayModeContext } from '../DisplayModeContext.js';
import { DisplayModeHook } from '../hooks/DisplayModeHook.jsx';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ErrorList } from '../components/ErrorList.jsx'
import ModalFooter from '../components/ModalFooter.jsx'

const textFieldStyle = { // Applied in dark mode only
  '& .MuiInputBase-input': {
    color: "#FFFFFF", // Color of placeholder text
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { // Field on its own
      borderColor: "#cfcfcfff",
    },
  '&:hover fieldset': { // When field is hovered over
    borderColor: "#F5F5F5",
  },
  '&.Mui-focused fieldset': {
    borderColor: "#9ad1ffff",
   }
  },
}

const textFieldTransition = {
  '& .MuiInputBase-input': {
    transition: 'ease-in-out',
    transitionDuration: '0.2s',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { // Field on its own
      transition: 'ease-in-out',
      transitionDuration: '0.2s',
    },
  '&:hover fieldset': { // When field is hovered over
    transition: 'ease-in-out',
    transitionDuration: '0.2s',
  },
  '&.Mui-focused fieldset': {
    transition: 'ease-in-out',
    transitionDuration: '0.2s',
   }
  },
}

function Contact() {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const { darkMode } = useContext(DisplayModeContext)
  const { bg, text, boxBg, boxText, link, border, required } = DisplayModeHook()
  const iconDisplay = `inline ${boxText}`

  const [disableFields, setDisableFields] = useState(false)
  const altchaRef = useRef(null)

  const [showModal, setShowModal] = useState(false)

  const openModal = () => { 
    setShowModal(true)
  }

  const closeModal = () => {
    setDisableFields(false)
    setShowModal(false)
  }
  
  const [modalMessage, setModalMessage] = useState("")
  const [modalHeader, setModalHeader] = useState("")
  const [modalHeaderBgColor, setModalHeaderBgColor] = useState("#198754")
  const [displayErrors, setDisplayErrors] = useState(false)

  // If true: Reset contact form (excluding Altcha widget) upon submission
  // If false: Do not reset contact form upon submission
  const [resetForm, setResetForm] = useState(false)

  const { register, handleSubmit, control, reset, formState, formState: { /*isSubmitSuccessful,*/ errors } } = useForm({ defaultValues: { name: "", email: "", subject: "", message: "", agree: false }})
  const onSubmit = data => {
    setDisableFields(true)
    submission(data)
    //reset({...data})
    //setDisableFields(false)
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful && resetForm) {
      reset({ name: '', email: '', subject: '', message: '' })
      setResetForm(false)
    }
  }, [formState, reset, resetForm])

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
      let errorMessage = []
      for (let i = 0; i < error.length; i++) {
        errorMessage.push(error[i])
      }

      prepareAndOpenModal(
        true,
        "Failed to Send Message",
        errorMessage,
        "#dc3545"
      )

      //setDisableFields(false)
      setResetForm(false)
      return false;
    }

    // TODO: Send the message
    var messageRes = await sendMessage({...data}, altchaRef.current?.value);
    if (messageRes.ok) {
      prepareAndOpenModal(
        false,
        "Message Sent Successfully",
        "Your message has been sent successfully!",
        "#198754"
      )
      setResetForm(true)
    } else {
      prepareAndOpenModal(
        false,
        "Failed to Send Message",
        "Failed to send message. Please try again.",
        "#dc3545"
      )
      setResetForm(false)
    }

    //setDisableFields(false)
  }

  const prepareAndOpenModal = (errors, header, message, headerBgColor) => {
    setDisplayErrors(errors)
    setModalHeader(header)
    setModalMessage(message)
    setModalHeaderBgColor(headerBgColor)

    openModal() // Opens the modal, letting the user know if their submission was successful or not
  }

  return (
    <>

      <Modal
        open={showModal}
        onClose={closeModal}
        aria-labelledby="modal-contact-message-modal"
        aria-describedby="modal-for-message-submission"
        aria-hidden={`${!showModal}`}
      >
        <Box 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            maxWidth: '1680px',
            height: 'auto',
            maxHeight: '100vh',
            border: `0px solid #000939ff`,
            boxShadow: 24,
            borderRadius: '8px',
            transition: 'ease-in-out',
            transitionDuration: '0.2s'
          }}
        >
          <div className={`p-4 rounded-t-lg`} style={{backgroundColor: `${modalHeaderBgColor}`}}>
            <div className="mb-2 flex flex-row justify-between">
              <h2 className={`modalHeaderText`}>{modalHeader}</h2>
              <h2 className={`modalHeaderText modalX`} onClick={closeModal}>&times;</h2>
            </div>
          </div>
          <div className={`p-4 overflow-y-auto modalBody ${bg}`}>

            {
              /*
              If additional JavaScript validation passes (indicated by displayErrors as false):
              Display a message indicating whether the user's message was sent successfully or not
              */

              /*
              If additional JavaScript validation fails (indicated by displayErrors as true):
              Display a message indicating there was an error sending the user's message
              Display an unorderded list listing additional JavaScript validation errors
              */
            }
            {
              displayErrors ? 
              <ErrorList message={modalMessage} text={text} /> 
              :
              <p className={`${text} mb-2`}>{modalMessage}</p>
            }

            <p className={`${text} ${displayErrors ? "mt-4" : "mt-0"}`}>You can now close this pop-up window.</p>
          </div>

          <ModalFooter
            operation={closeModal}
          />
        </Box>
      </Modal>

      <Navbar activeLink="Contact" />
          <div className={`page-main ${bg}`}>
            <h1 className={`main-header ${text}`}>
              Contact
            </h1>

            <div className={`max-w-[1400px] mx-auto`}>
              <p className={`${boxBg} ${boxText} text-base mb-8 text-center mx-auto lg:min-w-[100%] lg:max-w-[100%] bg-neutral-50 rounded-sm shadow-sm p-4 ${border}`}>
                I'm always open to working with new people, or simply just having a casual discussion! Feel free to contact me using either 
                the contact links provided or the contact form.
              </p>

              <div className="flex flex-col lg:flex-row lg:justify-between">

                {/* Email/Phone/Socials */}
                <div className={`displayModeTransition ${boxBg} ${border} contact-section mb-4 lg:mb-0 lg:mr-1`}> {/* Originally 48% */}
                  
                  <h2 className={`${text}`}>
                    Contact Me
                  </h2>

                  {/* Email Link */}
                  <div className="mb-2">
                    <span className="contactSpan">
                      <div>
                        <FaEnvelope className={`${iconDisplay}`} />
                      </div>
                      <Link
                        to={"mailto:williamjohnackerman@gmail.com"}
                        className={`
                          ${link}
                          break-all
                          `}
                      >
                        williamjohnackerman@gmail.com
                      </Link>
                    </span>
                  </div>

                  {/* Phone Number Link */}
                  <div className="mb-2">
                    <span className="contactSpan">
                      <div>
                        <FaPhoneAlt className={`${iconDisplay}`} />
                      </div>
                      <Link
                        to={"tel:+15162528285"}
                        className={`
                          ${link}
                          break-all
                        `}
                      >
                        (+1) 516-252-8285
                      </Link>
                    </span>
                  </div>

                  <hr className={`${text}`} />

                  <h2 className={`${text} mt-2`}>
                    My Socials
                  </h2>

                  {/* LinkedIn Link */}
                  <div className="mb-2">
                    <span className="contactSpan">
                      <div>
                        <FaLinkedin className={`${iconDisplay}`} />
                      </div>
                      <Link
                        to={"https://www.linkedin.com/in/william-ackerman-6a4005290/"}
                        target="_blank"
                        rel="noreferrer"
                        className={`
                          ${link}
                        `}
                      >
                        LinkedIn
                      </Link>
                    </span>
                  </div>

                  {/* Github Link */}
                  <div className="mb-2">
                    <span className="contactSpan">
                      <div>
                        <FaGithub className={`${iconDisplay}`} />
                      </div>
                      <Link
                        to={"https://github.com/WilliamAckerman"}
                        target="_blank"
                        rel="noreferrer"
                        className={`
                          ${link}
                        `}
                      >
                        Github
                      </Link>
                    </span>
                  </div>

                </div>

                {/* Contact Form */}
                <div className={`displayModeTransition ${boxBg} ${border} contact-section mt-4 lg:mt-0 lg:ml-1`}>
                  <h2 className={`${text}`}>
                    Contact Form
                  </h2>

                  <p className={`${text} mt-2 text-base`}>
                    Please fill out this form to send a message to my email address (<span className="break-all sm:break-normal">williamjohnackerman@gmail.com</span>).
                  </p>

                  <p className={`${text} mt-2 mb-4 text-base`}>
                    An asterisk (<span className={`${required}`}>*</span>) indicates a required field.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup className="mb-4">
                      <label htmlFor="name" className={`mb-2 ${text}`}>Name<span className={`${required}`}>*</span></label>
                      <TextField 
                        id="name" 
                        type="text" 
                        placeholder="Name" 
                        variant="outlined" 
                        className="w-full"
                        sx={
                          [
                            darkMode ? textFieldStyle : "", // Stylizes the text field only if dark mode is active
                            !prefersReducedMotion ? textFieldTransition : ""
                          ]
                        }
                          /*'& .MuiInputBase-input': {
                            color: darkMode ? "#FFFFFF" : "" // Color of placeholder text
                          },
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { // Field on its own
                              borderColor: darkMode ? "#cfcfcfff" : ""
                            },
                            '&:hover fieldset': { // When field is hovered over
                              borderColor: darkMode ? "#F5F5F5" : ""
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: darkMode ? "#9ad1ffff" : ""
                            }
                          },*/

                        defaultValue=""
                        {...register("name", { required: "Name is required." })}
                        disabled={disableFields}
                      />
                      <p className={`${required}`}><ErrorMessage errors={errors} name="name" /></p>
                    </FormGroup>

                    <FormGroup className="mb-4">
                      <label htmlFor="email" className={`${text} mb-2`}>Email<span className={`${required}`}>*</span></label>
                      <TextField 
                        id="email" 
                        type="email" 
                        placeholder="Email" 
                        variant="outlined"
                        className="w-full"
                        sx={
                          [
                            darkMode ? textFieldStyle : "", 
                            !prefersReducedMotion ? textFieldTransition : ""
                          ]
                        }

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
                      <p className={`${required}`}><ErrorMessage errors={errors} name="email" /></p>
                    </FormGroup>

                    <FormGroup className="mb-4">
                      <label htmlFor="subject" className={`${text} mb-2`}>Subject<span className={`${required}`}>*</span></label>
                      <TextField 
                        id="subject" 
                        type="text" 
                        placeholder="Subject" 
                        variant="outlined"
                        className="w-full"
                        sx={
                          [
                            darkMode ? textFieldStyle : "", 
                            !prefersReducedMotion ? textFieldTransition : ""
                          ]
                        }

                        defaultValue=""
                        {...register("subject", {
                          required: "Subject line is required."
                        })}
                        disabled={disableFields}
                      />
                      <p className={`${required}`}><ErrorMessage errors={errors} name="subject" /></p>
                    </FormGroup>

                    <FormGroup className="mb-4">
                      <label htmlFor="message" className={`mb-2 ${text}`}>Message<span className={`${required}`}>*</span></label>
                      <TextField
                        id="message"
                        type="text"
                        placeholder="Message"
                        variant="outlined"
                        className="w-full"
                        multiline
                        sx={
                          [
                            darkMode ? textFieldStyle : "", 
                            !prefersReducedMotion ? textFieldTransition : ""
                          ]
                        }
                          /*'& .MuiInputBase-input': {
                            color: darkMode ? "#FFFFFF" : "" // Color of placeholder text
                          },
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { // Field on its own
                              borderColor: darkMode ? "#cfcfcfff" : ""
                            },
                            '&:hover fieldset': { // When field is hovered over
                              borderColor: darkMode ? "#F5F5F5" : ""
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: darkMode ? "#9ad1ffff" : ""
                            }
                          },
                        }}*/

                        defaultValue=""
                        {...register("message", {
                          required: "Message body is required."
                        })}
                        disabled={disableFields}
                      />
                      <p className={`${required}`}><ErrorMessage errors={errors} name="message" /></p>
                    </FormGroup>

                    {/* ALTCHA WebComponent */}
                    {/*<altcha-widget challengeurl={`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_API_ROUTE}/altcha`}></altcha-widget>*/}
                    <Altcha ref={altchaRef} />

                    <FormGroup className="mb-4 mt-4">
                      <p className={`${text} text-base mb-4 sm:mb-0`}>
                        By clicking the "SEND EMAIL" button, you agree to this website's <Link className={`${link}`} to={"/privacypolicy"}>Privacy Policy</Link>.
                      </p>
                      <FormControlLabel required sx={{color: darkMode ? "#FFFFFF" : ""}} control={

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
                              sx={{color: darkMode ? "#FFFFFF" : ""}}
                            />
                          )}
                        />
                      } label="I agree to this website's Privacy Policy" />
                      <p className={`${required}`}><ErrorMessage errors={errors} name="agree" /></p>
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