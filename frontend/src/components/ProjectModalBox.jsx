// CSS imports
import '../index.css'
import '../styles/Modal.css';

// React-related imports
import { Link } from 'react-router'

// Material UI imports
import Box from '@mui/material/Box';

// Component imports
import ProjectModalInformation from './ProjectModalInformation.jsx'
import { FetchProjectSkills } from './FetchProjectSkills.jsx'
import ModalFooter from './ModalFooter.jsx';

// Display mode-related imports
import { DisplayModeHook } from './../hooks/DisplayModeHook.jsx';

const projectModalStyle = {
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

const projectModalTransition = {
    transition: 'ease-in-out',
    transitionDuration: '0.2s'
}

export default function ProjectModalBox(props) {
    const prefersReducedMotion = props.prefersReducedMotion
    const header = props.header
    const startDate = props.startDate
    const endDate = props.endDate
    const image = props.image;
    const modalH2 = props.modalH2
    const description = props.description
    const details = props.details
    const githubLink = props.githubLink
    const projectAlias = props.projectAlias
    const { bg, border, text, link } = DisplayModeHook()

    return (
        <Box
            sx={[
                projectModalStyle,
                !prefersReducedMotion ? projectModalTransition : ""
            ]}
        >
            <div className={`modalSurrounding rounded-t-lg`}>
                <div className="mb-2 flex flex-row justify-between">
                    <h1 className={`modalHeaderText`}>{header}</h1>
                    <h1 className={`modalHeaderText modalX`} onClick={props.operation}>
                        &times;
                    </h1>
                </div>
                <em className="text-neutral-50">
                    {startDate} - {endDate}
                </em>
            </div>
            <div className={`p-4 overflow-y-auto modalBody ${bg}`}>
                {
                    image ?
                    <>
                        <div className="flex flex-col lg:flex-row w-full lg:justify-evenly">
                            <div className="lg:flex-initial lg:w-[50%] lg:h-auto mb-4 lg:mb-0 lg:pr-2">
                                <Link to={`${import.meta.env.VITE_FRONTEND_URL}/${image}`} rel="noreferrer" target="_blank">
                                    <img src={`${import.meta.env.VITE_FRONTEND_URL}/${image}`} alt={header} className={`${border}`} />
                                </Link>
                            </div>
                            <div className="lg:flex-initial lg:w-[50%] lg:h-auto lg:pl-2">
                                <ProjectModalInformation
                                    text={text}
                                    link={link}
                                    modalH2={modalH2}
                                    description={description}
                                    details={details}
                                    githubLink={githubLink}
                                />
                            </div>
                        </div>
                        <div>
                            <FetchProjectSkills
                                project={projectAlias}
                            />
                        </div>
                    </>
                    :
                    <>
                        <ProjectModalInformation
                            text={text}
                            link={link}
                            modalH2={modalH2}
                            description={description}
                            details={details}
                            githubLink={githubLink}
                        />

                        <FetchProjectSkills
                            project={projectAlias}
                        />
                    </>
                }
            </div>

            <ModalFooter
                operation={props.operation}
            />
        </Box>
    )
}