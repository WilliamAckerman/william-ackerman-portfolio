import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FetchProjectSkills } from "../components/FetchProjectSkills.jsx";
import { queryClient } from './../queryClient.js';

export const FetchProjects = (props) => {
    const featured = props.featured ? props.featured : 0;
    const [modalOpen, setModalOpen] = useState(false)
    const [modalHeader, setModalHeader] = useState("")
    const [modalDescription, setModalDescription] = useState("")
    const [modalStartDate, setModalStartDate] = useState("")
    const [modalEndDate, setModalEndDate] = useState("")
    const [modalDetails, setModalDetails] = useState([])
    //const [modalTechnologies, setModalTechnologies] = useState([])
    const [modalGithubLink, setModalGithubLink] = useState(null)
    const [projectAlias, setProjectAlias] = useState("")

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

    const handleModalOpen = (id, header, description, startDate, endDate, details, githubLink, alias) => {
        setModalHeader(header)
        setModalDescription(description)
        //console.log(startDate)
        //console.log("Technologies:", technologies)

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
            const listDetails = detailArray.map(detail => <li key={id + detail} className="text-sm sm:text-base mb-1 sm:mb-0">{detail}</li>)
            setModalDetails(listDetails)
        }

        /*const technologyArray = technologies.split(";")
        if (technologyArray.length == 0) {
            setModalTechnologies("None")
        } else {
            const listTechnologies = technologyArray.map(technology => <li key={id + technology} className="text-sm sm:text-base mb-1 sm:mb-0">{technology}</li>)
            setModalTechnologies(listTechnologies)
        }*/

        if (githubLink) {
            setModalGithubLink(githubLink)
        } else {
            setModalGithubLink(null)
        }

        setModalOpen(true)
    }

    const handleModalClose = () => {
        setModalOpen(false)
    }

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['fetchProjects', featured],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_API_ROUTE}/projects/${featured}`);
            if (!res.ok) {
                throw new Error(`HTTP Error. Status: ${res.status}`)
            }
            return res.json()
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey: ['fetchProjects', featured] })
    })

    if (isLoading) {
        return (
            <p className="text-neutral-50 text-center">
                Loading projects...
            </p>
        )
    }

    if (isError) {
        console.error("Error:", error.message)
        return (
            <p className="text-neutral-50 text-center">
                Error fetching projects: {error.message}
            </p>
        )
    }

    //console.log("Projects:", data);

    return (
        <>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="project-details-modal"
                aria-describedby="project-details-modal"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: 'auto',
                        border: '2px solid #000',
                        boxShadow: 24,
                        backgroundColor: "#6b90ffff"
                    }}
                >
                    <div className="bg-blue-900 p-4">
                        <div className="mb-2 flex flex-row justify-between">
                            <h1 className="text-neutral-50 text-2xl sm:text-4xl">{modalHeader}</h1>
                            <h1 className="text-neutral-50 text-2xl sm:text-4xl cursor-pointer" onClick={handleModalClose}>&times;</h1>
                        </div>
                        <em className="text-neutral-50">{modalStartDate} - {modalEndDate}</em>
                    </div>
                    <div className="bg-blue-200 p-4 max-h-screen overflow-y-auto">

                        <h2
                            className="
                                uppercase
                                font-bold
                                text-xl sm:text-2xl
                                "
                        >
                            Description
                        </h2>
                        
                        <p className="mb-2">{modalDescription}</p>

                        <h2
                            className="
                                uppercase
                                font-bold
                                text-xl sm:text-2xl
                                "
                        >
                            Details
                        </h2>

                        <ul className="mb-2 list-disc list-inside">
                            {modalDetails}
                        </ul>

                        {modalGithubLink && 
                        <>
                            <h2
                                className="
                                uppercase
                                font-bold
                                text-xl sm:text-2xl
                                "
                            >
                            Github Link
                            </h2>
                            <Link 
                                to={modalGithubLink} 
                                rel="noreferrer" 
                                target="_blank"
                                className="
                                    text-blue-700
                                    underline
                                    hover:text-blue-800
                                    hover:no-underline
                                "
                            >
                                Github Link
                            </Link>
                        </>
                        }

                        <FetchProjectSkills project={projectAlias} />

                        
                    </div>
                    <div className="bg-blue-900 p-4">
                        <Button 
                            variant="contained" 
                            onClick={handleModalClose}
                        >
                            Close
                        </Button>
                    </div>
                </Box>
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
                        "md": "80%",
                    }
                }}
            >
                {data.map((project) => (
                    <div
                        key={project._id}
                        onClick={() => handleModalOpen(project._id, project.title, project.description, new Date(project.start_date), new Date(project.end_date), project.details, project.github_link, project.alias)}
                        className="
                            w-1/2
                            sm:w-1/3
                            md:w-1/4
                            bg-blue-200
                            text-center
                            p-4
                            m-4
                            border-solid
                            border-black
                            rounded-sm
                            shadow-sm
                            cursor-pointer
                        "
                    >
                        <p className="font-semibold">{project.title}</p>
                        <em>
                            {months[new Date(project.start_date).getMonth()]} {new Date(project.start_date).getFullYear()} - {project.end_date ? months[new Date(project.end_date).getMonth()] : "Present"} {project.end_date && new Date(project.end_date).getFullYear()}
                        </em>
                    </div>
                ))}
            </Box>
        </>
    )
}