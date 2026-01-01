// CSS import
import './../styles/Sidenav.css';

// react-related imports
import { useContext } from 'react';
import { NavLink } from 'react-router';

// Display mode-related imports
import { DisplayModeHook } from './../hooks/DisplayModeHook.jsx';
import { DisplayModeContext } from './../DisplayModeContext.js';

const Sidenav = (props) => {
    const activeLink = props.activeLink

    const { darkMode } = useContext(DisplayModeContext)
    const {text, headFoot, navLink, activeNavLink} = DisplayModeHook()

    return (
        <div className={`w-100% ${headFoot} ${text} mt-4 lg:hidden`}>
            <div className="flex flex-col">
                <NavLink to={"/"} className={`sidenav-link ${activeLink == "Home" ? activeNavLink : navLink} ${darkMode ? "hover:bg-white/10" : "hover:bg-black/10"}`}>Home</NavLink>
                <NavLink to={"/projects"} className={`sidenav-link ${activeLink == "Projects" ? activeNavLink : navLink} ${darkMode ? "hover:bg-neutral-50/10" : "hover:bg-black/10"}`}>Projects</NavLink>
                <NavLink to={"/skills"} className={`sidenav-link ${activeLink == "Skills" ? activeNavLink : navLink} ${darkMode ? "hover:bg-neutral-50/10" : "hover:bg-black/10"}`}>Skills</NavLink>
                <NavLink to={"/about"} className={`sidenav-link ${activeLink == "About" ? activeNavLink : navLink} ${darkMode ? "hover:bg-neutral-50/10" : "hover:bg-black/10"}`}>About</NavLink>
                <NavLink to={"/contact"} className={`sidenav-link ${activeLink == "Contact" ? activeNavLink : navLink} ${darkMode ? "hover:bg-neutral-50/10" : "hover:bg-black/10"}`}>Contact</NavLink>
                <NavLink to={"/viewresumecv"} className={`sidenav-link ${activeLink == "Resume" ? activeNavLink : navLink} ${darkMode ? "hover:bg-neutral-50/10" : "hover:bg-black/10"}`}>View Resume/CV</NavLink>
                <NavLink to={"/privacypolicy"} className={`sidenav-link ${activeLink == "Privacy" ? activeNavLink : navLink} ${darkMode ? "hover:bg-neutral-50/10" : "hover:bg-black/10"}`}>Privacy Policy</NavLink>
            </div>
        </div>
    )
}

export default Sidenav;