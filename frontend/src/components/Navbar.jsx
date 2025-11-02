import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
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
                    <Close className="cursor-pointer" onClick={() => setShowSidenav(false)} />
                    :
                    <Menu className="cursor-pointer" onClick={() => setShowSidenav(true)} />
                    }
                </div>
                <div className="hidden lg:block space-x-6">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/projects"}>Projects</NavLink>
                    <NavLink to={"/skills"}>Skills</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                    <NavLink to={"/viewcv"}>View CV</NavLink>
                </div>
                
            </Box>
            { showSidenav && <Sidenav /> }
        </nav>
        /*<Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>
                    <NavLink to={"/"}>Home</NavLink>
                </Toolbar>
            </AppBar>
        </Box>*/
    )
}

export default Navbar