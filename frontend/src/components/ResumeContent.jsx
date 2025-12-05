import './../index.css';
import './../styles/ResumeContent.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaLink } from "react-icons/fa";

export default function ResumeContent(props) {
    const type = props.type

    return (
        <div className="resume-content">
            <section>
                {type == "print" ?
                <p className="text-2xl font-bold mt-0 mb-0">William Ackerman</p>
                :
                <h1>
                    William Ackerman
                </h1>
                }
                <div
                    className={type == "print" ? "flex justify-left flex-row mb-0" : "flex justify-left flex-col md:flex-row mb-2 md:mb-1"}
                >
                    <span className={type == "print" ? "text-base mb-0 mr-4" : "text-base mb-2 md:mb-1 lg:mb-0 mr-4"}>
                        <div className="icon-div">
                            <FaEnvelope className="inline" />
                        </div>
                        <a 
                            href="mailto:williamjohnackerman@gmail.com"
                            className="general-link break-all"
                        >
                            williamjohnackerman@gmail.com
                        </a>
                    </span>
                    <span className="text-base">
                        <div className="icon-div">
                            <FaPhoneAlt className="inline" />
                        </div>
                        <a 
                            href="tel:+15162528285"
                            className="general-link"
                        >
                            (+1) 516-252-8285
                        </a>
                    </span>
                </div>
                <div
                    className={type == "print" ? "flex justify-between mb-0" : "flex justify-between mb-2 lg:mb-1"}
                >
                    <span className="text-base">
                        <div className="icon-div">
                            <FaLink className="inline" />
                        </div>
                        <a 
                            href="https://william-ackerman-portfolio.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="general-link break-all"
                        >
                            https://william-ackerman-portfolio.vercel.app
                        </a>
                    </span>
                </div>
                <div
                    className={type == "print" ? "flex justify-left flex-col mb-0" : "flex justify-left flex-col lg:flex-row mt--1 lg:mt-0 mb-1 lg:mb-0"}
                >
                    <span className={type == "print" ? "text-base mb-0 mr-4" : "text-base mb-2 lg:mb-0 mr-4"}>
                        <div className="icon-div">
                            <FaLinkedin className="inline" />
                        </div>
                        <a 
                            href="https://www.linkedin.com/in/william-ackerman-6a4005290/"
                            target="_blank"
                            rel="noreferrer"
                            className="general-link break-all"
                        >
                            https://www.linkedin.com/in/william-ackerman-6a4005290/
                        </a>
                    </span>
                    <span className="text-base">
                        <div className="icon-div">
                            <FaGithub className="inline" />
                        </div>
                        <a 
                            href="https://github.com/WilliamAckerman"
                            target="_blank"
                            rel="noreferrer"
                            className="general-link break-all"
                        >
                            https://github.com/WilliamAckerman
                        </a>
                    </span>
                </div>
                <hr className="mt-2 mb-2" />
                <p className="text-base">
                    Entry-level full-stack web developer skilled in React, JavaScript, and SQL. 
                    Experienced in developing responsive, user-focused web applications with 
                    strong problem-solving skills and attention to detail.
                </p>
            </section>
            <section>
                { type == "print" ? 
                <p className="print-section-header">Education</p>
                :
                <h2>
                    Education
                </h2>
                }

                { type == "print" ? 
                <p className="text-lg">
                    <span className="font-bold ">
                        Farmingdale State College
                    </span>, Farmingdale, NY
                </p> 
                :
                <h3>
                    <span className="font-bold">Farmingdale State College</span>, Farmingdale, NY
                </h3>
                }
                <p>
                    <span className="font-semibold">
                        Bachelor of Science
                    </span>, Computer Programming & Information Systems — May 2025
                </p>
                
                <p>
                    GPA: 3.83
                </p>
            </section>
            <section>
                { type == "print" ? 
                <p className="print-section-header">Professional Experience</p>
                :
                <h2>
                    Professional Experience
                </h2>
                }
                <div className="mb-2">
                    { type == "print" ? 
                    <p className="text-lg"><span className="font-bold ">Technologist Intern</span> | <em>Aug 2025 — Present</em></p> 
                    :
                    <h3>
                        <span className="non-print-header">Technologist Intern</span> | <em>Aug 2025 — Present</em>
                    </h3>
                    }
                    <p><span className="sub-header">Kelm Media Group</span>, Farmingdale, NY</p>
                    <ul>
                        <li>Develop responsive, user-friendly websites using HTML, CSS, JavaScript, and Bootstrap</li>
                        <li>Improve user experience through layout enhancements and accessibility considerations</li>
                        <li>Implement database-driven server-side features using MySQL and MongoDB operations</li>
                        <li>Troubleshoot and resolve website issues to ensure functionality and accessibility</li>
                        <li>Communicate with project leads to discuss feature progress and deliverables</li>
                    </ul>
                </div>
                <div className="mb-2">
                    { type == "print" ? 
                    <p className="text-lg"><span className="font-bold ">Technologist Intern</span> | <em>Jun 2024 — Dec 2024</em></p> 
                    :
                    <h3>
                        <span className="non-print-header">Technologist Intern</span> | <em>Jun 2024 — Dec 2024</em>
                    </h3>
                    }
                    <p><span className="sub-header">Kelm Media Group</span>, Farmingdale, NY</p>
                    <ul>
                        <li>Collaborated with team members to design and develop five responsive websites</li>
                        <li>Built user-friendly web pages using HTML, CSS, JavaScript, and Bootstrap</li>
                        <li>Implemented database-driven features using MySQL and PHP</li>
                        <li>Regularly communicated with colleagues to discuss project and feature progress</li>
                    </ul>
                </div>
            </section>
            <section>
                { type == "print" ? 
                <p className="text-xl font-bold uppercase">Projects</p>
                :
                <h2>
                    Projects
                </h2>
                }
                <div className="mb-2">
                    { type == "print" ? 
                    <p className="text-lg"><span className="font-bold ">Developer Portfolio - Personal Project</span> | <em>Oct 2025 — Present</em></p> 
                    :
                    <h3>
                        <span className="non-print-header">Developer Portfolio - Personal Project</span> | <em>Oct 2025 — Present</em>
                    </h3>
                    }
                    <ul>
                        <li>
                            Work on developing a portfolio website that helps market my skills as a web developer
                        </li>
                        <li>
                            Implement a Vite/React frontend, including TailwindCSS and Material UI for interface design
                        </li>
                        <li>
                            Use MongoDB to store data on projects and skills
                        </li>
                        <li>
                            Perform seamless data retrieval through TanStack Query and an Express.js RESTful API
                        </li>
                        <li>
                            Implement a contact form using Gmail, Nodemailer, and Altcha
                        </li>
                    </ul>
                </div>

                <div className="mb-2">
                    { type == "print" ? 
                    <p className="text-lg"><span className="font-bold">TeleShow - Senior Project</span> | <span className="font-bold">Farmingdale State College</span> | <em>Feb 2025 — May 2025</em></p> 
                    :
                    <h3>
                        <span className="non-print-header">TeleShow - Senior Project</span> | <span className="font-bold">Farmingdale State College</span> | <em>Feb 2025 — May 2025</em>
                    </h3>
                    }
                    <ul>
                        <li>
                            Collaborated as part of an Agile team of five to develop a web 
                            application allowing users to search for and view information on movies and shows
                        </li>
                        <li>Designed user-friendly interfaces through HTML, CSS, JavaScript, and React</li>
                        <li>Utilized RESTful API calls and Cloud Firestore for database-driven features</li>
                        <li>Wrote user stories and executed test plans to ensure feature functionality</li>
                        <li>Contributed to comprehensive technical documentation</li>
                    </ul>
                </div>
            </section>
            <section>
                { type == "print" ? 
                <p className="text-xl font-bold uppercase">Core Skills</p>
                :
                <h2 
                    className="
                        text-xl
                        sm:text-2xl
                        lg:text-3xl
                        font-bold
                        uppercase
                    "
                >
                    Core Skills
                </h2>
                }
                <p className="text-base mb-0"><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React, Bootstrap, AJAX, jQuery, TailwindCSS, Material UI, Vite, Vercel</p>
                <p className="text-base mb-0"><strong>Backend:</strong> PHP, Node.js, Express.js</p>
                <p className="text-base mb-0"><strong>Database:</strong> MySQL, MongoDB, Cloud Firestore, Microsoft SQL Server</p>
                <p className="text-base mb-0"><strong>Tools:</strong> Responsive Design, RESTful APIs, Git/Github, Agile Development, Figma</p>
                <p className="text-base mb-0"><strong>Soft Skills:</strong> Attention to Detail, Problem Solving, Team Collaboration, Adaptability, Communication, Leadership</p>
            </section>
        </div>
    )
}