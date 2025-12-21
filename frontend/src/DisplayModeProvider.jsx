import { useState } from 'react'
import { DisplayModeContext } from './DisplayModeContext.js';
import useMediaQuery from '@mui/material/useMediaQuery';

//const DisplayModeContext = createContext()
function DisplayModeProvider(props) {
    const colorSchemePreference = useMediaQuery('(prefers-color-scheme: dark)')
    const [darkMode, setDarkMode] = useState(colorSchemePreference)

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