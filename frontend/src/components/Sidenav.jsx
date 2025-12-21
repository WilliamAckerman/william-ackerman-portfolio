import './../styles/Sidenav.css';
import { NavLink } from 'react-router';

const Sidenav = (props) => {
    const activeLink = props.activeLink
    return (
        <div className="w-100% bg-slate-900 text-neutral-50 mt-4 lg:hidden">
            <div className="flex flex-col">
                <NavLink to={"/"} className={`sidenav-link ${activeLink == "Home" && "text-orange-300"}`}>Home</NavLink>
                <NavLink to={"/projects"} className={`sidenav-link ${activeLink == "Projects" && "text-orange-300"}`}>Projects</NavLink>
                <NavLink to={"/skills"} className={`sidenav-link ${activeLink == "Skills" && "text-orange-300"}`}>Skills</NavLink>
                <NavLink to={"/about"} className={`sidenav-link ${activeLink == "About" && "text-orange-300"}`}>About</NavLink>
                <NavLink to={"/contact"} className={`sidenav-link ${activeLink == "Contact" && "text-orange-300"}`}>Contact</NavLink>
                <NavLink to={"/viewresumecv"} className={`sidenav-link ${activeLink == "Resume" && "text-orange-300"}`}>View Resume/CV</NavLink>
                <NavLink to={"/privacypolicy"} className={`sidenav-link ${activeLink == "Privacy" && "text-orange-300"}`}>Privacy Policy</NavLink>
            </div>
        </div>
    )
}

export default Sidenav;