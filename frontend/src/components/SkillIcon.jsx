import { Components } from "react"
import { 
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaGitAlt,
    FaBootstrap,
    FaFigma,
    FaSearchPlus,
    FaHandsHelping,
    FaLightbulb,
    FaDatabase,
    FaProjectDiagram
} from "react-icons/fa";
import { 
    IoLogoJavascript,
    IoLogoFirebase,
    IoLogoVercel
} from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { 
    SiExpress, 
    SiMysql,
    SiMongodb,
    SiRender,
    SiVite,
    SiTailwindcss,
    SiMui
} from "react-icons/si";
import {
    RiTeamFill
} from "react-icons/ri";
import {
    SlSpeech
} from "react-icons/sl";
import {
    GiTreeBranch
} from "react-icons/gi";
import {
    FiRefreshCw
} from "react-icons/fi";
import {
    MdDevices
} from "react-icons/md";
import {
    TbApi
} from "react-icons/tb";

const SkillIcon = (props) => {
    const Icon = props.icon
    switch (Icon) {
        case "FaHtml5": {
            return <FaHtml5 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#E34C26"}} 
                    />
        }
        case "FaCss3Alt": {
            return <FaCss3Alt 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#1572B6"}} 
                    />
        }
        case "IoLogoJavascript": {
            return <IoLogoJavascript 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#F7DF1E"}} 
                    />
        }
        case "FaReact": {
            return <FaReact
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#61DAFB"}} 
                    />
        }
        case "FaNodeJs": {
            return <FaNodeJs 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#339933"}} 
                    />
        }
        case "FaPhp": {
            return <FaPhp
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#777BB4"}} 
                    />
        }
        case "FaGitAlt": {
            return <FaGitAlt 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#F05032"}} 
                    />
        }
        case "DiJqueryLogo": {
            return <DiJqueryLogo 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#0769AD"}} 
                    />
        }
        case "SiExpress": {
            return <SiExpress 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#000000"}} 
                    />
        }
        case "SiMysql": {
            return <SiMysql 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#4479A1"}} 
                    />
        }
        case "SiMongodb": {
            return <SiMongodb 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#47A248"}} 
                    />
        }
        case "IoLogoVercel": {
            return <IoLogoVercel 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#000000"}} 
                    />
        }
        case "SiRender": {
            return <SiRender
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#46E3B7"}} 
                    />
        }
        case "SiVite": {
            return <SiVite 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#646CFF"}} 
                    />
        }
        case "FaBootstrap": {
            return <FaBootstrap 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#7952B3"}} 
                    />
        }
        case "SiTailwindcss": {
            return <SiTailwindcss 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#06B6D4"}} 
                    />
        }
        case "SiMui": {
            return <SiMui 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#007FFF"}} 
                    />
        }
        case "FaFigma": {
            return <FaFigma 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#F24E1E"}} 
                    />
        }
        case "IoLogoFirebase": {
            return <IoLogoFirebase 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#FFCA28"}} 
                    />
        }
        case "RiTeamFill": {
            return <RiTeamFill 
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#4C6EF5"}} 
                    />
        }
        case "SlSpeech": {
            return <SlSpeech
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#FFB703"}} 
                    />
        }
        case "FaSearchPlus": {
            return <FaSearchPlus
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#0D9488"}} 
                    />
        }
        case "FaHandsHelping": {
            return <FaHandsHelping
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#FF6F91"}} 
                    />
        }
        case "FaLightbulb": {
            return <FaLightbulb
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#FFD700"}} 
                    />
        }
        case "GiTreeBranch": {
            return <GiTreeBranch
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#556B2F"}} 
                    />
        }
        case "FiRefreshCw": {
            return <FiRefreshCw
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#0078D4"}} 
                    />
        }
        case "FaDatabase": {
            return <FaDatabase
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#CC2927"}} 
                    />
        }
        case "FaProjectDiagram": {
            return <FaProjectDiagram
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#6A1B9A"}} 
                    />
        }
        case "MdDevices": {
            return <MdDevices
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#00C853"}} 
                    />
        }
        case "TbApi": {
            return <TbApi
                        className="
                            text-2xl 
                            sm:text-3xl
                            md:text-5xl
                        " 
                        style={{color: "#FF6F00"}} 
                    />
        }
        default: {
            return ""
        }
    }
    /*return (
        <div>
            <Icon />
        </div>
    )*/
}

export default SkillIcon