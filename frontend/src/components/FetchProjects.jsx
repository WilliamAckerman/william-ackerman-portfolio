import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FetchProjectSkills } from "./FetchProjectSkills.jsx";
import { fetchProjects } from '../api/fetchProjects.js';
import { queryClient } from './../queryClient.js';

import { DisplayModeHook } from '../hooks/DisplayModeHook.jsx';
import ModalFooter from './ModalFooter.jsx'
import ProjectModalInformation from './ProjectModalInformation.jsx'
import '../styles/Modal.css'

export const FetchProjects = (props) => {
    const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
    const featured = props.featured ? props.featured : 0;
    const [modalOpen, setModalOpen] = useState(false)
    const [modalHeader, setModalHeader] = useState("")
    const [modalDescription, setModalDescription] = useState("")
    const [modalStartDate, setModalStartDate] = useState("")
    const [modalEndDate, setModalEndDate] = useState("")
    const [modalDetails, setModalDetails] = useState([])
    const [modalGithubLink, setModalGithubLink] = useState(null)
    const [projectAlias, setProjectAlias] = useState("")
    const [modalImage, setModalImage] = useState(null)

    const { bg, text, link, border, projectBg, projectText, projectBorder } = DisplayModeHook()
    const modalH2 = `${text} uppercase font-bold text-xl sm:text-2xl`

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const handleModalOpen = (id, header, description, startDate, endDate, details, githubLink, alias, imageLink) => {
        setModalHeader(header)
        setModalDescription(description)

        setProjectAlias(alias)

        let formattedStartDate = new Date(startDate)
        setModalStartDate(months[new Date(startDate).getMonth()] + " " + formattedStartDate.getFullYear())

        let formattedEndDate = new Date(endDate)
        if (!months[new Date(formattedEndDate).getMonth()]) {
            setModalEndDate("Present")
        } else {
            setModalEndDate(months[new Date(formattedEndDate).getMonth()] + " " + formattedEndDate.getFullYear())
        }

        const detailArray = details.split(";");
        if (detailArray.length == 0) {
            setModalDetails("None")
        } else {
            const listDetails = detailArray.map(detail => <li key={id + detail} className={`${text} text-base mb-1 sm:mb-0`}>{detail}</li>)
            setModalDetails(listDetails)
        }

        setModalGithubLink(githubLink ? githubLink : null)
        setModalImage(imageLink ? imageLink : null)

        setModalOpen(true)
    }

    const handleModalClose = () => {
        setModalOpen(false)
    }

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['fetchProjects', featured],
        queryFn: async () => await fetchProjects(featured),
        onSettled: () => queryClient.invalidateQueries({ queryKey: ['fetchProjects', featured] })
    })

    if (isLoading) {
        return (
            <p className={`${text} text-center`}>
                Loading projects...
            </p>
        )
    }

    if (isError) {
        console.error("Error:", error.message)
        return (
            <p className={`${text} text-center`}>
                Error fetching projects: {error.message}
            </p>
        )
    }

    return (
        <>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="project-details-modal"
                aria-describedby="modal-that-shows-details-about-a-project"
                aria-hidden={`${!modalOpen}`}
                //closeAfterTransition={!prefersReducedMotion}
            >
                {/*<Fade in={modalOpen}>*/}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '90%',
                        maxWidth: '1680px',
                        height: 'auto',
                        maxHeight: '100vh',
                        border: `0px solid #000939ff`,
                        boxShadow: 24,
                        /*backgroundColor: "#6b90ffff",*/
                        borderRadius: '8px',
                        transition: 'ease-in-out',
                        transitionDuration: prefersReducedMotion ? '0s' : '0.2s'
                    }}
                >
                    <div className={`modalSurrounding rounded-t-lg`}>
                        <div className="mb-2 flex flex-row justify-between">
                            <h1 className={`modalHeaderText`}>{modalHeader}</h1>
                            <h1 className={`modalHeaderText modalX`} onClick={handleModalClose}>&times;</h1>
                        </div>
                        <em className={`text-neutral-50`}>{modalStartDate} - {modalEndDate}</em>
                    </div>

                    <div className={`p-4 overflow-y-auto modalBody ${bg}`}>
                        {
                            modalImage ?
                            <>
                                <div className="flex flex-col lg:flex-row w-full lg:justify-evenly">
                                    <div className="lg:flex-initial lg:w-[50%] lg:h-auto mb-4 lg:mb-0 lg:pr-2">
                                        <Link to={`${import.meta.env.VITE_FRONTEND_URL}/${modalImage}`} rel="noreferrer" target="_blank">
                                            <img src={`${import.meta.env.VITE_FRONTEND_URL}/${modalImage}`} alt={modalHeader} className={`${border}`} />
                                        </Link>
                                    </div>
                                    <div className="lg:flex-initial lg:w-[50%] lg:h-auto lg:pl-2">
                                        <ProjectModalInformation
                                            text={text}
                                            link={link}
                                            modalH2={modalH2}
                                            description={modalDescription}
                                            details={modalDetails}
                                            githubLink={modalGithubLink}
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
                                    description={modalDescription}
                                    details={modalDetails}
                                    githubLink={modalGithubLink}
                                />

                                <FetchProjectSkills
                                    project={projectAlias}
                                />
                            </>
                        }
                    </div>

                    <ModalFooter 
                        operation={handleModalClose} 
                    />
                </Box>
                {/*</Fade>*/}
            </Modal>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    mt: 0,
                    mb: 2,
                    ml: 'auto',
                    mr: 'auto',
                    width: {
                        "xs": "100%",
                        "md": "90%",
                    },
                    maxWidth: '1680px',
                }}
            >
                {data.map((project) => (
                    <button
                        key={project._id}
                        onClick={() => handleModalOpen(
                            project._id, 
                            project.title, 
                            project.description, 
                            new Date(project.start_date), 
                            new Date(project.end_date), 
                            project.details, 
                            project.github_link, 
                            project.alias, 
                            project.image_link
                        )}
                        className={`
                            w-1/2
                            sm:w-1/3
                            md:w-1/4
                            xl:max-w-[360px]
                            text-neutral-50
                            text-center
                            p-4
                            m-4
                            area-border
                            ${projectBorder}
                            
                            border-cyan-900
                            rounded-sm
                            shadow-sm
                            cursor-pointer
                            
                            ${projectBg}
                        `}
                    >
                        <p className={`font-semibold ${projectText}`}>{project.title}</p>
                        <em className={`${projectText}`}>
                            {months[new Date(project.start_date).getMonth()]} {new Date(project.start_date).getFullYear()} - {project.end_date ? months[new Date(project.end_date).getMonth()] : "Present"} {project.end_date && new Date(project.end_date).getFullYear()}
                        </em>
                    </button>
                ))}
            </Box>
        </>
    )
}