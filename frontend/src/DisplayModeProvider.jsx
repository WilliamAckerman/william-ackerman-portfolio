import { useState } from 'react'
import { DisplayModeContext } from './DisplayModeContext.js';
import useMediaQuery from '@mui/material/useMediaQuery';

function DisplayModeProvider(props) {
    const colorSchemePreference = useMediaQuery('(prefers-color-scheme: dark)') // Media query that determines whether a user prefers a dark color scheme
    const [darkMode, setDarkMode] = useState(colorSchemePreference) // Variable that manages whether dark mode is toggled

    const toggleDisplayMode = (mode) => {
        setDarkMode(mode)
    }

    return (
        <DisplayModeContext.Provider value={{ darkMode, toggleDisplayMode }}>
            {props.children}
        </DisplayModeContext.Provider>
    )
}

export { DisplayModeProvider }