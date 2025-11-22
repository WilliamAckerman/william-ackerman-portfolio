import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaLink } from "react-icons/fa";
import Box from '@mui/material/Box';

function Resume() {
    return (
        <div
            className="
                bg-neutral-50
                border-gray-100
                overflow-y-auto
                p-4
                mx-auto
                mb-4
                max-h-[70vh]
                w-[100%]
                md:w-[80%]
                rounded-sm
                shadow-sm
            "
        >
            <section className="mb-2">
                <h1
                    className="
                        text-xl
                        sm:text-3xl
                        lg:text-5xl
                        mb-2
                        font-bold
                    "
                >
                    William Ackerman
                </h1>
                <div
                    className="flex justify-left flex-col md:flex-row mb-2 md:mb-1"
                >
                    <span className="text-base mb-2 md:mb-0 mr-4">
                        <div className="pr-2 inline-block">
                            <FaEnvelope className="inline" />
                        </div>
                        <a 
                            href="mailto:williamjohnackerman@gmail.com"
                            className="break-all underline hover:no-underline text-blue-500 hover:text-blue-600"
                        >
                            williamjohnackerman@gmail.com
                        </a>
                    </span>
                    <span className="text-base">
                        <div className="pr-2 inline-block">
                            <FaPhoneAlt className="inline" />
                        </div>
                        <a 
                            href="tel:+15162528285"
                            className="underline hover:no-underline text-blue-500 hover:text-blue-600"
                        >
                            (+1) 516-252-8285
                        </a>
                    </span>
                </div>
                <div
                    className="flex justify-between mb-2 lg:mb-1"
                >
                    <span className="text-base">
                        <div className="pr-2 inline-block">
                            <FaLink className="inline" />
                        </div>
                        <a 
                            href="https://william-ackerman-portfolio.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="underline hover:no-underline text-blue-500 hover:text-blue-600 break-all"
                        >
                            https://william-ackerman-portfolio.vercel.app
                        </a>
                    </span>
                </div>
                <div
                    className="flex justify-left flex-col lg:flex-row mt--1 lg:mt-0 mb-1 lg:mb-0"
                >
                    <span className="text-base mb-2 lg:mb-0 mr-4">
                        <div className="pr-2 inline-block">
                            <FaLinkedin className="inline" />
                        </div>
                        <a 
                            href="https://www.linkedin.com/in/william-ackerman-6a4005290/"
                            target="_blank"
                            rel="noreferrer"
                            className="underline hover:no-underline text-blue-500 hover:text-blue-600 break-all"
                        >
                            https://www.linkedin.com/in/william-ackerman-6a4005290/
                        </a>
                    </span>
                    <span className="text-base">
                        <div className="pr-2 inline-block">
                            <FaGithub className="inline" />
                        </div>
                        <a 
                            href="https://github.com/WilliamAckerman"
                            target="_blank"
                            rel="noreferrer"
                            className="underline hover:no-underline text-blue-500 hover:text-blue-600 break-all"
                        >
                            https://github.com/WilliamAckerman
                        </a>
                    </span>
                </div>
                <hr className="mt-2 mb-2" />
                <p className="text-base">
                    Entry-level full-stack web developer skilled in JavaScript, PHP, and SQL. 
                    Experienced in developing responsive, database-driven web applications with 
                    a strong focus on usability, problem-solving, and attention to detail.
                </p>
            </section>
            <section className="mb-2">
                <h2
                    className="
                        text-xl
                        sm:text-2xl
                        lg:text-3xl
                        font-bold
                        uppercase
                    "
                >
                    Education
                </h2>
                <h3
                    className="
                        text-base
                        sm:text-lg
                    "
                >
                    <span className="font-bold">Farmingdale State College</span>, Farmingdale, NY
                </h3>
                <p><span className="font-semibold">Bachelor of Science</span>, Computer Programming & Information Systems - May 2025</p>
                <p>GPA: 3.83</p>
            </section>
            <section className="mb-2">
                <h2
                    className="
                        text-xl
                        sm:text-2xl
                        lg:text-3xl
                        font-bold
                        uppercase
                    "
                >
                    Professional Experience
                </h2>
                <div className="mb-2">
                    <h3
                        className="
                            text-base
                            sm:text-lg
                        "
                    >
                        <span className="font-bold text-lg md:text-xl">Technologist</span> | <em>Aug 2025 - Present</em>
                    </h3>
                    <p><span className="font-semibold text-base sm:text-lg">Kelm Media Group</span>, Farmingdale, NY</p>
                    <ul className="list-disc list-inside">
                        <li className="text-base mb-0 mt-0">Developing responsive, user-friendly websites using HTML, CSS, JavaScript, and Bootstrap</li>
                        <li className="text-base mb-0">Improving UX through layout enhancements and accessibility considerations</li>
                        <li className="text-base mb-0">Implementing database-driven server-side features using MySQL and MongoDB operations</li>
                        <li className="text-base mb-0">Troubleshooting and resolving website issues to ensure functionality and accessibility</li>
                        <li className="text-base mb-0">Communicating with project leads to discuss feature progress and deliverables</li>
                    </ul>
                </div>
                <div className="mb-2">
                    <h3
                        className="
                            text-base
                            sm:text-lg
                        "
                    >
                        <span className="font-bold text-lg md:text-xl">Technologist Intern</span> | <em>Jun 2024 - Dec 2024</em>
                    </h3>
                    <p><span className="font-semibold text-base sm:text-lg">Kelm Media Group</span>, Farmingdale, NY</p>
                    <ul className="list-disc list-inside">
                        <li className="text-base mb-0 mt-0">Collaborated with team members to design and develop five responsive websites</li>
                        <li className="text-base mb-0">Built user-friendly web pages using HTML, CSS, JavaScript, and Bootstrap</li>
                        <li className="text-base mb-0">Implemented database-driven features using PHP and SQL</li>
                    </ul>
                </div>
            </section>
            <section className="mb-2">
                <h2
                    className="
                        text-xl
                        sm:text-2xl
                        lg:text-3xl
                        font-bold
                        uppercase
                    "
                >
                    Projects
                </h2>
                <div className="mb-2">
                    <h3
                        className="
                            text-base
                            sm:text-lg
                        "
                    >
                        <span className="font-bold text-lg md:text-xl">Developer Portfolio - Personal Project</span> | <em>Oct 2025 - Present</em>
                    </h3>
                    <ul className="list-disc list-inside">
                        <li className="text-base mt-0 mb-0">
                            Working on developing a portfolio website that helps market my skills as a web developer
                        </li>
                        <li className="text-base mt-0 mb-0">
                            Implementing a Vite/React frontend, using TailwindCSS and Material UI for responsive interfaces
                        </li>
                        <li className="text-base mb-0">
                            Using MongoDB to store data on projects and skills
                        </li>
                        <li className="text-base mb-0">
                            Implementing data retrieval through TanStack Query and a RESTful API created using Express.js
                        </li>
                    </ul>
                </div>
                <div className="mb-2">
                    <h3
                        className="
                            text-base
                            sm:text-lg
                        "
                    >
                        <span className="font-bold text-lg md:text-xl">TeleShow - Senior Project</span> | <span className="font-bold">Farmingdale State College</span> | <em>Feb 2025 - May 2025</em>
                    </h3>
                    <ul className="list-disc list-inside">
                        <li className="text-base mt-0 mb-0">
                            Collaborated as part of an Agile team of five to develop a web 
                            application allowing users to search for and view information on movies and shows
                        </li>
                        <li className="text-base mb-0">Designed user-friendly interfaces through HTML, CSS, JavaScript, and React</li>
                        <li className="text-base mb-0">Utilized RESTful API calls and Cloud Firestore for database-driven features</li>
                        <li className="text-base mb-0">Wrote user stories and executed test plans to ensure feature functionality</li>
                        <li className="text-base mb-0">Contributed to comprehensive technical documentation</li>
                    </ul>
                </div>
            </section>
            <section className="mb-2">
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
                <p className="text-base mb-0"><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React, Bootstrap, AJAX, jQuery, TailwindCSS, Material UI, Vite, Vercel</p>
                <p className="text-base mb-0"><strong>Backend:</strong> PHP, Node.js, Express.js, Render</p>
                <p className="text-base mb-0"><strong>Database:</strong> MySQL, MongoDB, Microsoft SQL Server, Cloud Firestore</p>
                <p className="text-base mb-0"><strong>Tools:</strong> Git/Github, RESTful APIs, Figma, Agile Development, Responsive Design</p>
                <p className="text-base mb-0"><strong>Soft Skills:</strong> Attention to Detail, Problem Solving, Team Collaboration, Adaptability, Communication Skills, Leadership</p>
            </section>
        </div>
    )
}

export default Resume;