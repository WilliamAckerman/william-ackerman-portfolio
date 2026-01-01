// CSS imports
import './../styles/Contact.css';
import './../styles/Modal.css';

// Component imports
import { ErrorList } from './ErrorList.jsx'
import ModalFooter from './ModalFooter.jsx'

// Display mode-related imports
import { DisplayModeHook } from './../hooks/DisplayModeHook.jsx'

// Material UI imports
import Box from '@mui/material/Box';

// Styling for contact modal
const contactModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '1680px',
    height: 'auto',
    maxHeight: '100vh',
    border: '0px solid #000939ff',
    boxShadow: 24,
    borderRadius: '8px'
}

// Transition for contact modal
const contactModalTransition = {
    transition: 'ease-in-out',
    transitionDuration: '0.2s'
}

export default function ContactModalBox(props) {
    const prefersReducedMotion = props.prefersReducedMotion
    const headerBgColor = props.headerBgColor
    const header = props.header
    const displayErrors = props.displayErrors
    const message = props.message
    const { bg, text } = DisplayModeHook()

    return (
        <Box 
            sx={[
                contactModalStyle,
                !prefersReducedMotion ? contactModalTransition : ""
            ]}
        >
            <div className="p-4 rounded-t-lg" style={{backgroundColor: headerBgColor}}>
                <div className="mb-2 flex flex-row justify-between">
                    <h2 className="modalHeaderText">{header}</h2>
                    <h2 className="modalHeaderText modalX" onClick={props.closeOperation}>&times;</h2>
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
                    <ErrorList message={message} text={text} />
                    :
                    <p className={`${text} mb-2`}>{message}</p>
                }

                <p className={`${text} ${displayErrors && "mt-4"}`}>
                    You can now close this pop-up window.
                </p>
            </div>

            <ModalFooter
                operation={props.closeOperation}
            />
        </Box>
    )
}