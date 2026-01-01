// CSS import
import './../styles/Navbar.css';

// React-related imports
import { useState, useContext } from 'react';
import { NavLink } from 'react-router';

// Material-related imports
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Menu, Close } from '@material-symbols-svg/react-sharp';

// Component imports
import Sidenav from './Sidenav.jsx';
import DisplayModeToggle from './DisplayModeToggle.jsx'

// Display mode-related imports
import { DisplayModeHook } from './../hooks/DisplayModeHook.jsx';
import { DisplayModeContext } from './../DisplayModeContext.js'

const Navbar = (props) => {
    const [showSidenav, setShowSidenav] = useState(false)
    const activeLink = props.activeLink;

    const {headFoot, headFootIconHover, navLink, activeNavLink, hoverNavLink, hoverActiveNavLink, text} = DisplayModeHook()

    const prefersContrastMore = useMediaQuery('(prefers-contrast: more)')
    const { darkMode } = useContext(DisplayModeContext)

    const navbarLink = navLink + " " + hoverNavLink
    const navbarActiveLink = activeNavLink + " " + hoverActiveNavLink

    return (
        <nav className={`${headFoot} w-full text-neutral-50 p-4 ${prefersContrastMore ? (darkMode ? "border-b border-b-white" : "border-b border-b-black") : ""}`}>
            <div className="flex items-center">
                <Box sx={{ flexGrow: 1, display: 'flex', maxWidth: '1680px', margin: '0 auto', alignItems: 'center', justifyContent: 'space-between' }}>

                    {/* Hamburger menu toggle button (only visible on smaller screen widths) */}
                    <div className="lg:hidden">
                        { showSidenav ?
                        <Close 
                            className={`
                                cursor-pointer 
                                ${text} 
                                ${headFootIconHover}
                            `} 
                            onClick={() => setShowSidenav(false)} 
                        />
                        :
                        <Menu 
                            className={`
                                cursor-pointer 
                                ${text} 
                                ${headFootIconHover}
                            `} 
                            onClick={() => setShowSidenav(true)} 
                        />
                        }
                    </div>

                    {/* Navbar links (only visible on larger screen sizes) */}
                    <div className="hidden lg:block space-x-6">
                        <NavLink to={"/"} className={`nav-link ${activeLink == "Home" ? navbarActiveLink : navbarLink}`}>Home</NavLink>
                        <NavLink to={"/projects"} className={`nav-link ${activeLink == "Projects" ? navbarActiveLink : navbarLink}`}>Projects</NavLink>
                        <NavLink to={"/skills"} className={`nav-link ${activeLink == "Skills" ? navbarActiveLink : navbarLink}`}>Skills</NavLink>
                        <NavLink to={"/about"} className={`nav-link ${activeLink == "About" ? navbarActiveLink : navbarLink}`}>About</NavLink>
                        <NavLink to={"/contact"} className={`nav-link ${activeLink == "Contact" ? navbarActiveLink : navbarLink}`}>Contact</NavLink>
                        <NavLink to={"/viewresumecv"} className={`nav-link ${activeLink == "Resume" ? navbarActiveLink : navbarLink}`}>View Resume/CV</NavLink>
                        <NavLink to={"/privacypolicy"} className={`nav-link ${activeLink == "Privacy" ? navbarActiveLink : navbarLink}`}>Privacy Policy</NavLink>
                    </div>

                    {/* Display mode toggle */}
                    <div className="rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
                        <div className="flex items-center justify-end-safe text-center">
                            <DisplayModeToggle />
                        </div>
                    </div>
                </Box>
            </div>

            { showSidenav && <Sidenav activeLink={activeLink} /> }
        </nav>
    )
}

export default Navbar