import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {

    // Keeps track of the isOpen variable
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-lg font-bold">
                    Home
                </Link>

                {/* Hamburger button (only on mobile) */}
                <button
                    className="sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <XMarkIcon className="h-6 w-6" />
                    ) : (
                        <Bars3Icon className="h-6 w-6" />
                    )}
                </button>

                {/* Desktop Links */}
                <div className="hidden sm:flex gap-4">
                    {/*<Link to="/">Home</Link>*/}
                    <Link to="/projects">Projects</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="sm:hidden mt-2 flex flex-col gap-2">
                    {/*<Link to="/" onClick={() => setIsOpen(false)}>Home</Link>*/}
                    <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}