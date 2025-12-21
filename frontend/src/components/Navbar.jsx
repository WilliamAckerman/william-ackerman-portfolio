import './../styles/Navbar.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Menu, Close } from '@material-symbols-svg/react-sharp';
import { NavLink } from 'react-router';
import Sidenav from './Sidenav.jsx';
import DisplayModeToggle from './DisplayModeToggle.jsx'

const Navbar = (props) => {
    const [showSidenav, setShowSidenav] = useState(false)
    const activeLink = props.activeLink;

    return (
        <nav className="bg-slate-900 w-full text-neutral-50 p-4">
            <div className="flex items-center">
            <Box sx={{ flexGrow: 1, display: 'flex', maxWidth: '1680px', margin: '0 auto' }}>
                <div className="lg:hidden">
                    { showSidenav ?
                    <Close className="cursor-pointer hover:text-neutral-200" onClick={() => setShowSidenav(false)} />
                    :
                    <Menu className="cursor-pointer hover:text-neutral-200" onClick={() => setShowSidenav(true)} />
                    }
                </div>
                <div className="hidden lg:block space-x-6">
                    <NavLink to={"/"} className={`nav-link ${activeLink == "Home" && "text-orange-300"}`}>Home</NavLink>
                    <NavLink to={"/projects"} className={`nav-link ${activeLink == "Projects" && "text-orange-300"}`}>Projects</NavLink>
                    <NavLink to={"/skills"} className={`nav-link ${activeLink == "Skills" && "text-orange-300"}`}>Skills</NavLink>
                    <NavLink to={"/about"} className={`nav-link ${activeLink == "About" && "text-orange-300"}`}>About</NavLink>
                    <NavLink to={"/contact"} className={`nav-link ${activeLink == "Contact" && "text-orange-300"}`}>Contact</NavLink>
                    <NavLink to={"/viewresumecv"} className={`nav-link ${activeLink == "Resume" && "text-orange-300"}`}>View Resume/CV</NavLink>
                    <NavLink to={"/privacypolicy"} className={`nav-link ${activeLink == "Privacy" && "text-orange-300"}`}>Privacy Policy</NavLink>
                </div>
            </Box>
            <div className="flex items-center justify-end-safe text-center">
                <DisplayModeToggle />
            </div>
            </div>
            { showSidenav && <Sidenav activeLink={activeLink} /> }
        </nav>
    )
}

export default Navbar