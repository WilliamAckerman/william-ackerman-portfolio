import './../styles/Sidenav.css';
import { NavLink } from 'react-router';

const Sidenav = () => {
    return (
        <div className="w-100% bg-blue-800 text-neutral-50 mt-4 lg:hidden">
            <div className="flex flex-col">
                <NavLink to={"/"} className="sidenav-link">Home</NavLink>
                <NavLink to={"/projects"} className="sidenav-link">Projects</NavLink>
                <NavLink to={"/skills"} className="sidenav-link">Skills</NavLink>
                <NavLink to={"/about"} className="sidenav-link">About</NavLink>
                <NavLink to={"/contact"} className="sidenav-link">Contact</NavLink>
                <NavLink to={"/viewresumecv"} className="sidenav-link">View Resume/CV</NavLink>
                <NavLink to={"/privacypolicy"} className="sidenav-link">Privacy Policy</NavLink>
            </div>
        </div>
    )
}

export default Sidenav;