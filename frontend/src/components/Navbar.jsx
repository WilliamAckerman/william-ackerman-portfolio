import './../styles/Navbar.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Menu, Close } from '@material-symbols-svg/react-sharp';
import { NavLink } from 'react-router';
import Sidenav from './Sidenav.jsx';

const Navbar = () => {
    const [showSidenav, setShowSidenav] = useState(false)

    return (
        <nav className="bg-blue-800 w-100% text-neutral-50 p-4">
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <div className="lg:hidden">
                    { showSidenav ?
                    <Close className="cursor-pointer hover:text-neutral-200" onClick={() => setShowSidenav(false)} />
                    :
                    <Menu className="cursor-pointer hover:text-neutral-200" onClick={() => setShowSidenav(true)} />
                    }
                </div>
                <div className="hidden lg:block space-x-6">
                    <NavLink to={"/"} className="nav-link">Home</NavLink>
                    <NavLink to={"/projects"} className="nav-link">Projects</NavLink>
                    <NavLink to={"/skills"} className="nav-link">Skills</NavLink>
                    <NavLink to={"/about"} className="nav-link">About</NavLink>
                    <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
                    <NavLink to={"/viewresumecv"} className="nav-link">View Resume/CV</NavLink>
                    <NavLink to={"/privacypolicy"} className="nav-link">Privacy Policy</NavLink>
                </div>
                
            </Box>
            { showSidenav && <Sidenav /> }
        </nav>
    )
}

export default Navbar