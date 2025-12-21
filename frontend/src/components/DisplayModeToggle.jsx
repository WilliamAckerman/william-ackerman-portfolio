import './../index.css';
import { useContext } from 'react'
import { FaSun, FaMoon } from "react-icons/fa";
import { DisplayModeContext } from '../DisplayModeContext.js';
import { DisplayModeHook } from '../hooks/DisplayModeHook.jsx'

const DisplayModeToggle = () => {
    const { darkMode, toggleDisplayMode } = useContext(DisplayModeContext)
    const { lightBg, darkBg, lightText, darkText, toggleBorder } = DisplayModeHook()

    return (
        <>
            <div 
                className={`cursor-pointer p-2 rounded-tl-lg rounded-bl-lg ${!darkMode ? darkBg : lightBg} border border-solid ${toggleBorder}`}
                onClick={() => toggleDisplayMode(false)}
            >
                <FaSun 
                    className={`mode-icon ${!darkMode ? darkText : lightText}`}
                />
            </div>
            <div 
                className={`cursor-pointer p-2 rounded-tr-lg rounded-br-lg ${darkMode ? darkBg : lightBg} border border-solid ${toggleBorder}`}
                onClick={() => toggleDisplayMode(true)}
            >
                <FaMoon 
                    className={`mode-icon ${darkMode ? darkText : lightText}`}
                />
            </div>
        </>
    )
}

export default DisplayModeToggle