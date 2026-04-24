// CSS imports
import './../index.css'
import './../styles/SkillIcon.css';

// Icon imports
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
    SiMui,
    SiTypescript,
    SiNextdotjs,
    SiPython,
    SiJest,
    SiTestinglibrary
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
    const Icon = props.icon // What icon to display
    const color = props.color // The icon's color
    const name = props.name // The icon's name

    // Stores the different icons
    const ICON_MAP = {
        FaHtml5: FaHtml5,
        FaCss3Alt: FaCss3Alt,
        IoLogoJavascript: IoLogoJavascript,
        FaReact: FaReact,
        FaNodeJs: FaNodeJs,
        FaPhp: FaPhp,
        FaGitAlt: FaGitAlt,
        DiJqueryLogo: DiJqueryLogo,
        SiExpress: SiExpress,
        SiMysql: SiMysql,
        SiMongodb: SiMongodb,
        IoLogoVercel: IoLogoVercel,
        SiRender: SiRender,
        SiVite: SiVite,
        FaBootstrap: FaBootstrap,
        SiTailwindcss: SiTailwindcss,
        SiMui: SiMui,
        FaFigma: FaFigma,
        IoLogoFirebase: IoLogoFirebase,
        RiTeamFill: RiTeamFill,
        SlSpeech: SlSpeech,
        FaSearchPlus: FaSearchPlus,
        FaHandsHelping: FaHandsHelping,
        FaLightbulb: FaLightbulb,
        GiTreeBranch: GiTreeBranch,
        FiRefreshCw: FiRefreshCw,
        FaDatabase: FaDatabase,
        FaProjectDiagram: FaProjectDiagram,
        MdDevices: MdDevices,
        TbApi: TbApi,
        SiTypescript: SiTypescript,
        SiNextdotjs: SiNextdotjs,
        SiPython: SiPython,
        SiJest: SiJest,
        SiTestinglibrary: SiTestinglibrary
    }

    // Determines what icon to render
    // Example: ICON_MAP[FaHtml5] for FaHtml5
    const IconComponent = ICON_MAP[Icon]

    return (
        <>
            <IconComponent
                className="skillIcon displayModeTransition"
                style={{color: color}}
                role="img"
            />
            <span className="sr-only">{name}</span> {/* For screen readers (improves accessibility) */}
        </>
    )
}

export default SkillIcon