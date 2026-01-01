import './../index.css';
import { useContext } from 'react'
import { FaSun, FaMoon } from "react-icons/fa";

// Display mode-related imports
import { DisplayModeContext } from './../DisplayModeContext.js';
import { DisplayModeHook } from './../hooks/DisplayModeHook.jsx'

const DisplayModeToggle = () => {
    const { toggleDisplayMode } = useContext(DisplayModeContext)
    const { lightText, darkText, toggleBorder, lightHeadFoot, darkHeadFoot, sunToggleBorder, moonToggleBorder } = DisplayModeHook()

    {/*
        toggleDisplayMode(true): Dark mode
        toggleDisplayMode(false): Light mode
    */}

    return (
        <>
            {/* Light mode button */}
            <button
                className={`cursor-pointer p-2 rounded-tl-lg rounded-bl-lg ${lightHeadFoot} border-t border-b border-l border-r-hidden ${toggleBorder} ${sunToggleBorder}`}
                onClick={() => toggleDisplayMode(false)}
            >
                <FaSun 
                    className={`mode-icon ${lightText}`}
                />
                <span className="sr-only">Switch to light mode</span>
            </button>

            {/* Dark mode button */}
            <button
                className={`cursor-pointer p-2 rounded-tr-lg rounded-br-lg ${darkHeadFoot} border-t border-b border-r border-l-hidden ${toggleBorder} ${moonToggleBorder}`}
                onClick={() => toggleDisplayMode(true)}
            >
                <FaMoon 
                    className={`mode-icon ${darkText}`}
                />
                <span className="sr-only">Switch to dark mode</span>
            </button>
        </>
    )
}

export default DisplayModeToggle