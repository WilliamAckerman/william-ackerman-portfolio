import { NavLink } from 'react-router';

const Sidenav = () => {
    return (
        <div className="w-100% bg-blue-800 text-neutral-50 mt-4 lg:hidden">
            <div className="flex flex-col">
                <NavLink to={"/"} className="space-y-6 hover:bg-blue-900 p-2">Home</NavLink>
                <NavLink to={"/projects"} className="space-y-6 hover:bg-blue-900 p-2">Projects</NavLink>
                <NavLink to={"/skills"} className="space-y-6 hover:bg-blue-900 p-2">Skills</NavLink>
                <NavLink to={"/about"} className="space-y-6 hover:bg-blue-900 p-2">About</NavLink>
                <NavLink to={"/contact"} className="space-y-6 hover:bg-blue-900 p-2">Contact</NavLink>
                <NavLink to={"/viewresumecv"} className="space-y-6 hover:bg-blue-900 p-2">View Resume/CV</NavLink>
                <NavLink to={"/privacypolicy"} className="space-y-6 hover:bg-blue-900 p-2">Privacy Policy</NavLink>
            </div>
        </div>
    )
}

export default Sidenav;