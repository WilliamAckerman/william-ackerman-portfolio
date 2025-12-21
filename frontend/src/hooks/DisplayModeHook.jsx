import { useContext } from "react"
import { DisplayModeContext } from "../DisplayModeContext.js"
import useMediaQuery from '@mui/material/useMediaQuery';

export function DisplayModeHook() {
    const { darkMode } = useContext(DisplayModeContext)
    const prefersContrastMore = useMediaQuery('(prefers-contrast: more');

    const lightBg = prefersContrastMore ? "bg-white" : "bg-neutral-100"
    const darkBg = prefersContrastMore ? "bg-black" : "bg-gray-800"
    
    const lightText = prefersContrastMore ? "text-black" : "text-gray-950"
    const darkText = prefersContrastMore ? "text-white" : "text-neutral-50"
    
    const lightSecondaryText = prefersContrastMore ? "text-black" : "text-gray-950"
    const darkSecondaryText = prefersContrastMore ? "text-white" : "text-neutral-50"
    
    const lightBoxBg = "bg-neutral-50"
    const darkBoxBg = "bg-slate-900"

    const lightBoxText = "text-gray-950"
    const darkBoxText = "text-neutral-50"

    const lightSecondaryBg = "bg-blue-300"
    const darkSecondaryBg = "bg-blue-950"

    const darkBorder = "border-slate-950"
        /*prefersContrastMore ? "border-white border-4" : 
        prefersContrastLess ? "border-slate-500" :
        "border-slate-950"*/

    const lightBorder = "border-neutral-300"
        /*prefersContrastMore ? "border-black border-4" : 
        prefersContrastLess ? "border-neutral-50" :
        "border-neutral-300"*/

    const darkLink = "text-blue-200 hover:text-blue-300"
    const lightLink = "text-blue-600 hover:text-blue-700"
    
    const lightBoxLink = "text-blue-600 hover:text-blue-700"
    const darkBoxLink = "text-blue-200 hover:text-blue-300"

    const darkProjectBg = "bg-blue-950 hover:bg-indigo-950"
    const lightProjectBg = "bg-blue-950 hover:bg-indigo-950"

    const darkProjectText = "text-neutral-50"
    const lightProjectText = "text-neutral-50"

    const darkProjectBorder = "border-cyan-900"
    const lightProjectBorder = "border-gray-800"
    
    const lightRequired = prefersContrastMore ? "text-black" : "text-red-700"
    const darkRequired = prefersContrastMore ? "text-white" : "text-red-500"

    const toggleBorder = prefersContrastMore ? "border-white" : "border-neutral-100"

    return {
        bg: darkMode ? darkBg : lightBg,
        secondaryBg: `displayModeTransition ${darkMode ? darkSecondaryBg : lightSecondaryBg}`,
        text: `displayModeTransition ${darkMode ? darkText : lightText}`,
        secondaryText: `displayModeTransition ${darkMode ? darkSecondaryText : lightSecondaryText}`,
        boxBg: `displayModeTransition ${darkMode ? darkBoxBg : lightBoxBg}`,
        boxText: `displayModeTransition ${darkMode ? darkBoxText : lightBoxText}`,
        link: `displayModeTransition underline hover:no-underline ${darkMode ? darkLink : lightLink}`,
        boxLink: `underline hover:no-underline ${darkMode ? darkBoxLink : lightBoxLink}`,
        border: `area-border ${darkMode ? darkBorder : lightBorder}`,
        required: `displayModeTransition ${darkMode ? darkRequired : lightRequired}`,
        projectBg: `displayModeTransition ${darkMode ? darkProjectBg : lightProjectBg}`,
        projectText: `displayModeTransition ${darkMode ? darkProjectText : lightProjectText}`,
        projectBorder: `displayModeTransition ${darkMode ? darkProjectBorder : lightProjectBorder}`,
        lightBg: lightBg,
        darkBg: darkBg,
        lightText: lightText,
        darkText: darkText,
        toggleBorder: toggleBorder
    }
}