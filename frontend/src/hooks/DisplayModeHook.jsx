// React import
import { useContext } from "react"

// Material UI import
import useMediaQuery from '@mui/material/useMediaQuery';

// Display mode-related import
import { DisplayModeContext } from "../DisplayModeContext.js"

export function DisplayModeHook() {
    const { darkMode } = useContext(DisplayModeContext)
    const prefersContrastMore = useMediaQuery('(prefers-contrast: more');

    // Background color
    const lightBg = prefersContrastMore ? "bg-white" : "bg-neutral-100"
    const darkBg = prefersContrastMore ? "bg-black" : "bg-gray-800"

    // Navbar/Footer background color
    const lightHeadFoot = "bg-gray-200"
    const darkHeadFoot = "bg-slate-900"

    // Navbar link color
    const lightNavLink = prefersContrastMore ? "text-black" : "text-gray-950"
    const darkNavLink = prefersContrastMore ? "text-white" : "text-neutral-50"

    // Navbar active link color
    const lightActiveNavLink = "text-orange-600"
    const darkActiveNavLink = "text-orange-300"

    // Navbar link hover color
    const lightHoverNavLink = prefersContrastMore ? "" : "hover:text-neutral-950"
    const darkHoverNavLink = prefersContrastMore ? "" : "hover:text-neutral-100"

    // Navbar active link hover color
    const lightHoverActiveNavLink = "hover:text-orange-700"
    const darkHoverActiveNavLink = "hover:text-orange-400"
    
    // Text color
    const lightText = prefersContrastMore ? "text-black" : "text-gray-950"
    const darkText = prefersContrastMore ? "text-white" : "text-neutral-50"

    // Footer icon hover color
    const lightFooterIconHover = prefersContrastMore ? "" : "hover:text-gray-neutral-950"
    const darkFooterIconHover = prefersContrastMore ? "" : "hover:text-neutral-200"
    
    // Secondary text color
    const lightSecondaryText = prefersContrastMore ? "text-black" : "text-gray-950"
    const darkSecondaryText = prefersContrastMore ? "text-white" : "text-neutral-50"
    
    // Box bg color
    const lightBoxBg = "bg-neutral-50"
    const darkBoxBg = "bg-slate-900"

    // Box text color
    const lightBoxText = "text-gray-950"
    const darkBoxText = "text-neutral-50"

    // Secondary background color
    const lightSecondaryBg = "bg-blue-300"
    const darkSecondaryBg = "bg-blue-950"

    // Border color
    const darkBorder = "border-slate-950"
        /*prefersContrastMore ? "border-white border-4" : 
        prefersContrastLess ? "border-slate-500" :
        "border-slate-950"*/

    const lightBorder = "border-neutral-300"
        /*prefersContrastMore ? "border-black border-4" : 
        prefersContrastLess ? "border-neutral-50" :
        "border-neutral-300"*/

    // Link color
    const darkLink = "text-blue-200 hover:text-blue-300"
    const lightLink = "text-blue-600 hover:text-blue-700"
    
    // Box link color
    const lightBoxLink = "text-blue-600 hover:text-blue-700"
    const darkBoxLink = "text-blue-200 hover:text-blue-300"

    // Project background color
    const darkProjectBg = "bg-blue-950 hover:bg-indigo-950"
    const lightProjectBg = "bg-blue-950 hover:bg-indigo-950"

    // Project text color
    const darkProjectText = "text-neutral-50"
    const lightProjectText = "text-neutral-50"

    // Project border color
    const darkProjectBorder = "border-cyan-900"
    const lightProjectBorder = "border-gray-800"
    
    // Required text color
    const lightRequired = prefersContrastMore ? "text-black" : "text-red-700"
    const darkRequired = prefersContrastMore ? "text-white" : "text-red-500"

    // Display mode toggle border color
    const lightToggleBorder = prefersContrastMore ? "border-t-black border-b-black" : "border-t-slate-900 border-b-slate-900"
    const darkToggleBorder = prefersContrastMore ? "border-t-white border-b-white" : "border-t-zinc-200 border-b-zinc-200"

    // Light mode toggle border color
    const sunLightToggleBorder = prefersContrastMore ? "border-l-black" : "border-l-slate-900"
    const sunDarkToggleBorder = prefersContrastMore ? "border-l-white" : "border-l-gray-200"

    // Dark mode toggle border color
    const moonLightToggleBorder = prefersContrastMore ? "border-r-black" : "border-r-slate-900"
    const moonDarkToggleBorder = prefersContrastMore ? "border-r-white" : "border-r-gray-200"

    return {
        bg: darkMode ? darkBg : lightBg,
        lightBg: lightBg,
        darkBg: darkBg,

        secondaryBg: `displayModeTransition ${darkMode ? darkSecondaryBg : lightSecondaryBg}`,

        text: `displayModeTransition ${darkMode ? darkText : lightText}`,
        lightText: lightText,
        darkText: darkText,

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
        
        toggleBorder: `displayModeTransition ${darkMode ? darkToggleBorder : lightToggleBorder}`,

        headFoot: `displayModeTransition ${darkMode ? darkHeadFoot : lightHeadFoot}`,
        lightHeadFoot: `displayModeTransition ${lightHeadFoot}`,
        darkHeadFoot: `displayModeTransition ${darkHeadFoot}`,
        headFootIconHover: `displayModeTransition ${darkMode ? darkFooterIconHover : lightFooterIconHover}`,

        navLink: `displayModeTransition ${darkMode ? darkNavLink : lightNavLink}`,
        activeNavLink: `displayModeTransition ${darkMode ? darkActiveNavLink : lightActiveNavLink}`,
        hoverNavLink: `${darkMode ? darkHoverNavLink : lightHoverNavLink}`,
        hoverActiveNavLink: `${darkMode ? darkHoverActiveNavLink : lightHoverActiveNavLink}`,

        sunToggleBorder: darkMode ? sunDarkToggleBorder : sunLightToggleBorder,
        moonToggleBorder: darkMode ? moonDarkToggleBorder : moonLightToggleBorder
    }
}