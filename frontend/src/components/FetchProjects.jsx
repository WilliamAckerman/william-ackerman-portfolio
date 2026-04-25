// CSS imports
import './../styles/Modal.css'

// React-related imports
import { useState } from 'react'

// API/Tanstack Query-related imports
import { fetchProjects } from '../api/fetchProjects.js';
import { queryClient } from './../queryClient.js';
import { useQuery } from '@tanstack/react-query';

// Material UI imports
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import useMediaQuery from '@mui/material/useMediaQuery';

// Component imports
import ProjectModalBox from './ProjectModalBox.jsx';

// Display mode-related imports
import { DisplayModeHook } from '../hooks/DisplayModeHook.jsx';

export const FetchProjects = (props) => {

    // Determines if the user prefers reduced motion
    const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

    // Determine if only featured projects are being queried
    const featured = props.featured ? props.featured : 0;

    // Determines whether the modal is displayed or not
    // True: modal is displayed
    // False: modal is hidden
    const [modalOpen, setModalOpen] = useState(false)

    const [modalHeader, setModalHeader] = useState("") // Determines the project title to display in the modal's header
    const [modalDescription, setModalDescription] = useState("") // Determines the project description in the modal
    const [modalStartDate, setModalStartDate] = useState("") // Determines the start date to display in the modal's header
    const [modalEndDate, setModalEndDate] = useState("") // Determines the end date to display in the modal's header. If there is none, display "Present" instead
    const [modalDetails, setModalDetails] = useState([]) // Determines the project details to display in the modal
    const [modalGithubLink, setModalGithubLink] = useState(null) // Determines the Github link to display in the modal, if there is one
    const [modalProjectLink, setModalProjectLink] = useState(null);
    const [projectAlias, setProjectAlias] = useState("") // Determines the project alias - this is used to fetch skills relevant to a project
    const [modalImage, setModalImage] = useState(null) // Determines the image to be displayed in the modal, if any

    const { text, projectBg, projectText, projectBorder } = DisplayModeHook()
    const modalH2 = `${text} uppercase font-bold text-xl sm:text-2xl`

    // Used to determine months to display for start and end date
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

    // Handles opening the modal
    const handleModalOpen = (id, header, description, startDate, endDate, details, githubLink, projectLink, alias, imageLink) => {
        setModalHeader(header)
        setModalDescription(description)

        setProjectAlias(alias) // Used to query project skills

        let formattedStartDate = new Date(startDate)
        setModalStartDate(months[new Date(startDate).getMonth()] + " " + formattedStartDate.getFullYear())

        let formattedEndDate = new Date(endDate)
        if (!months[new Date(formattedEndDate).getMonth()]) {
            setModalEndDate("Present") // Indicates the project is ongoing
        } else {
            setModalEndDate(months[new Date(formattedEndDate).getMonth()] + " " + formattedEndDate.getFullYear())
        }

        const detailArray = details.split(";"); // Details make up a comma-separated list
        if (detailArray.length == 0) {
            setModalDetails("None")
        } else {

            // If there are details, display them as <li> elements
            const listDetails = detailArray.map(detail => <li key={id + detail} className={`${text} text-base mb-1 sm:mb-0`}>{detail}</li>)

            setModalDetails(listDetails)
        }

        setModalGithubLink(githubLink ? githubLink : null)
        setModalProjectLink(projectLink ? projectLink : null);
        setModalImage(imageLink ? imageLink : null)

        setModalOpen(true) // Finally, open the modal
    }

    // Handles closing the modal
    const handleModalClose = () => {
        setModalOpen(false)
    }

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['fetchProjects', featured],
        queryFn: async () => await fetchProjects(featured),
        onSettled: () => queryClient.invalidateQueries({ queryKey: ['fetchProjects', featured] })
    })

    // Indicates projects are being loaded
    if (isLoading) {
        return (
            <p className={`${text} text-center`}>
                Loading projects...
            </p>
        )
    }

    // If there is an error quering projects
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
            >
                {
                    prefersReducedMotion 
                    ?
                    <ProjectModalBox
                        prefersReducedMotion={prefersReducedMotion}
                        header={modalHeader}
                        startDate={modalStartDate}
                        endDate={modalEndDate}
                        image={modalImage}
                        modalH2={modalH2}
                        description={modalDescription}
                        details={modalDetails}
                        githubLink={modalGithubLink}
                        projectLink={modalProjectLink}
                        projectAlias={projectAlias}
                        operation={handleModalClose}
                    />
                    :
                    <Fade in={modalOpen}>
                        <div>
                            <ProjectModalBox
                                prefersReducedMotion={prefersReducedMotion}
                                header={modalHeader}
                                startDate={modalStartDate}
                                endDate={modalEndDate}
                                image={modalImage}
                                modalH2={modalH2}
                                description={modalDescription}
                                details={modalDetails}
                                githubLink={modalGithubLink}
                                projectLink={modalProjectLink}
                                projectAlias={projectAlias}
                                operation={handleModalClose}
                            />
                        </div>
                    </Fade>
                }
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
                            project.project_link,
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