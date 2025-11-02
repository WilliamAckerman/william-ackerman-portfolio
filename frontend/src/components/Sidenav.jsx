import { NavLink } from 'react-router';

const Sidenav = () => {
    return (
        <div className="w-100% bg-blue-800 text-neutral-50 mt-4 lg:hidden">
            <div className="flex flex-col">
                <NavLink to={"/"} className="space-y-6 hover:bg-blue-900">Home</NavLink>
                <NavLink to={"/projects"} className="space-y-6 hover:bg-blue-900">Projects</NavLink>
                <NavLink to={"/skills"} className="space-y-6 hover:bg-blue-900">Skills</NavLink>
                <NavLink to={"/about"} className="space-y-6 hover:bg-blue-900">About</NavLink>
                <NavLink to={"/contact"} className="space-y-6 hover:bg-blue-900">Contact</NavLink>
                <NavLink to={"/viewcv"} className="space-y-6 hover:bg-blue-900">View CV</NavLink>
            </div>
        </div>
    )
}

export default Sidenav;