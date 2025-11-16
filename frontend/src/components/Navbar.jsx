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
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/projects"}>Projects</NavLink>
                    <NavLink to={"/skills"}>Skills</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                    <NavLink to={"/viewresumecv"}>View Resume/CV</NavLink>
                    <NavLink to={"/privacypolicy"}>Privacy Policy</NavLink>
                </div>
                
            </Box>
            { showSidenav && <Sidenav /> }
        </nav>
    )
}

export default Navbar