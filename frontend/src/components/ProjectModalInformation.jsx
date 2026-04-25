import { Link } from "react-router"
export default function ProjectModalInformation(props) {
    const text = props.text
    const link = props.link
    const modalH2 = props.modalH2

    const description = props.description
    const details = props.details
    const githubLink = props.githubLink
    const projectLink = props.projectLink;

    return (
        <>
            <h2 className={`${modalH2}`}>
                Description
            </h2>

            <p className={`${text} mb-2`}>{description}</p>

            <h2 className={`${modalH2}`}>
                Details
            </h2>

            <ul className="mb-2 list-disc list-inside">
                {details}
            </ul>

            {
                projectLink &&
                <div className={githubLink ? "mb-2" : ""}>
                    <h2 className={`${modalH2}`}>
                        Project Link
                    </h2>
                    <Link
                        to={projectLink}
                        rel="noreferrer"
                        target="_blank"
                        className={`
                            ${link}
                            underline
                            hover:no-underline
                        `}
                    >
                        Project Link
                    </Link>
                </div>
            }

            {githubLink &&
                <div>
                    <h2 className={`${modalH2}`}>
                        Github Link
                    </h2>
                    <Link
                        to={githubLink}
                        rel="noreferrer"
                        target="_blank"
                        className={`
                            ${link}
                            underline
                            hover:no-underline
                        `}
                    >
                        Github Link
                    </Link>
                </div>
            }
        </>
    )
}