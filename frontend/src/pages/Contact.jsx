// CSS imports
import './../styles/Contact.css';
import './../styles/Modal.css';

import 'altcha';

// React-related imports
import { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router';

// React icon imports
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

// React-hook-form-related imports
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

// Component imports
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Altcha from './../components/Altcha';
import ContactModalBox from './../components/ContactModalBox.jsx'

// Display mode-related imports
import { DisplayModeContext } from '../DisplayModeContext.js';
import { DisplayModeHook } from '../hooks/DisplayModeHook.jsx';

// Material UI imports
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Fade from '@mui/material/Fade'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';

import { sendMessage } from '../api/sendMessage.js';

const darkModeTextFieldStyle = { // Applied in dark mode only
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
  }
}

function Contact() {

  // Determines whether the user prefers reduced motion
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const { darkMode } = useContext(DisplayModeContext)
  const { bg, text, boxBg, boxText, link, border, required } = DisplayModeHook()
  const iconDisplay = `inline ${boxText}`

  const [disableFields, setDisableFields] = useState(false)
  const altchaRef = useRef(null)

  const [showModal, setShowModal] = useState(false) // Determines whether the modal is displayed

  // Handles opening the modal
  const openModal = () => { 
    setShowModal(true)
  }

  // Handles closing the modal
  const closeModal = () => {
    setDisableFields(false)
    setShowModal(false)
  }
  
  const [modalMessage, setModalMessage] = useState("") // The message displayed in the modal's header
  const [modalHeader, setModalHeader] = useState("") // The text displayed in the modal's header
  const [modalHeaderBgColor, setModalHeaderBgColor] = useState("#198754") // The background color of the modal's header
  const [displayErrors, setDisplayErrors] = useState(false) // Determines whether errors in the user's submission are displayed or not

  // If true: Reset contact form (excluding Altcha widget) upon submission
  // If false: Do not reset contact form upon submission
  const [resetForm, setResetForm] = useState(false)

  const { register, handleSubmit, control, reset, formState, formState: { /*isSubmitSuccessful,*/ errors } } = useForm({ defaultValues: { name: "", email: "", subject: "", message: "", agree: false }})
  const onSubmit = data => {
    setDisableFields(true)
    submission(data)
    //reset({...data})
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful && resetForm) {
      reset({ name: '', email: '', subject: '', message: '' })
      setResetForm(false)
    }
  }, [formState, reset, resetForm])

  const submission = async (data) => {
    let error = [];

    // Used in email validation
    const emailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")

    if (data.name.trim() == "") { // If no name was provided
      error.push("No name was provided.")
    }

    if (data.email.trim() == "") { // If no email was provided
      error.push("No email was provided.")
    } else if (!emailRegex.test(data.email)) { // If invalid email address was entered
      error.push("An invalid email adddress was entered.")
    }

    if (data.subject.trim() == "") { // If no subject was provided
      error.push("No subject was provided.")
    }

    if (data.message.trim() == "") { // If no message was provided
      error.push("No message was provided.")
    }

    if (!data.agree) {
      error.push("The checkbox indicating agreement to this website's Privacy Policy was not checked.")
    }

    if (error.length > 0) { // Indicates there are errors in the user's submission
      let errorMessage = []
      for (let i = 0; i < error.length; i++) {
        errorMessage.push(error[i])
      }

      // Opening the contact modal - errors in user input
      prepareAndOpenModal(
        true,
        "Failed to Send Message",
        errorMessage,
        "#dc3545"
      )

      setResetForm(false)
      return false;
    }

    // TODO: Send the message
    var messageRes = await sendMessage({...data}, altchaRef.current?.value);
    if (messageRes.ok) {

      // Opening the contact modal - message sent successfully
      prepareAndOpenModal(
        false,
        "Message Sent Successfully",
        "Your message has been sent successfully!",
        "#198754"
      )
      setResetForm(true)
    } else {

      // Opening the contact modal - failed to send message
      prepareAndOpenModal(
        false,
        "Failed to Send Message",
        "Failed to send message. Please try again.",
        "#dc3545"
      )
      setResetForm(false)
    }
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
      {/* Contact message modal */}
      <Modal
        open={showModal}
        onClose={closeModal}
        aria-labelledby="modal-contact-message-modal"
        aria-describedby="modal-for-message-submission"
        aria-hidden={`${!showModal}`}
      >
        {
          !prefersReducedMotion ?
          <Fade in={showModal}>
            <div>
              <ContactModalBox
                prefersReducedMotion={prefersReducedMotion}
                headerBgColor={modalHeaderBgColor}
                header={modalHeader}
                displayErrors={displayErrors}
                message={modalMessage}
                closeOperation={closeModal}
              />
            </div>
          </Fade>
          :
          <ContactModalBox
            prefersReducedMotion={prefersReducedMotion}
            headerBgColor={modalHeaderBgColor}
            header={modalHeader}
            displayErrors={displayErrors}
            message={modalMessage}
            closeOperation={closeModal}
          />
        }
      </Modal>

      {/* Navbar */}
      <Navbar activeLink="Contact" />

      {/* Contact page */}
      <main className={`page-main ${bg}`}>
        <h1 className={`main-header ${text}`}>
          Contact
        </h1>

        <div className={`max-w-[1400px] mx-auto`}>

          {/* Page description box */}
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
                Please fill out this form to send an email message to my email address (<span className="break-all sm:break-normal">williamjohnackerman@gmail.com</span>).
              </p>

              <p className={`${text} mt-2 mb-4 text-base`}>
                An asterisk (<span className={`${required}`}>*</span>) indicates a required field.
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>

                {/* Name text field */}
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
                        darkMode ? darkModeTextFieldStyle : "", // Stylizes the text field only if dark mode is active
                        !prefersReducedMotion ? textFieldTransition : ""
                      ]
                    }

                    defaultValue=""
                    {...register("name", { required: "Name is required." })}
                    disabled={disableFields}
                  />
                  <p className={`${required}`}><ErrorMessage errors={errors} name="name" /></p>
                </FormGroup>

                {/* Email text field */}
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
                        darkMode ? darkModeTextFieldStyle : "", 
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

                {/* Subject text field */}
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
                        darkMode ? darkModeTextFieldStyle : "", 
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

                {/* Message text field */}
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
                        darkMode ? darkModeTextFieldStyle : "", 
                        !prefersReducedMotion ? textFieldTransition : ""
                      ]
                    }

                    defaultValue=""
                    {...register("message", {
                      required: "Message body is required."
                    })}
                    disabled={disableFields}
                  />
                  <p className={`${required}`}><ErrorMessage errors={errors} name="message" /></p>
                </FormGroup>

                {/* ALTCHA WebComponent */}
                <Altcha ref={altchaRef} />

                {/* Agree to Privacy Policy checkbox */}
                <FormGroup className="mb-4 mt-4">
                  <p className={`${text} text-base mb-4 sm:mb-0`}>
                    By clicking the "SEND MESSAGE" button, you agree to this website's <Link className={`${link}`} to={"/privacypolicy"}>Privacy Policy</Link>.
                  </p>
                  <FormControlLabel required sx={{color: darkMode ? "#FFFFFF" : ""}} control={

                    <Controller
                      control={control}
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

                {/* Submit button */}
                <Button type="submit" variant="contained" disabled={disableFields} className="w-full">
                  <span className="text-sm sm:text-base">
                    <div className="pr-2 inline-block">
                      <FaEnvelope className="inline" />
                    </div>
                    Send Message
                  </span>
                </Button>

              </form>
            </div>
          </div>
        </div>
      </main>
      {/* End of Contact page */}

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Contact