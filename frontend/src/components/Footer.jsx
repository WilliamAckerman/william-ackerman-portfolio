// CSS Import
import './../styles/Footer.css';

// React-related imports
import { useContext } from "react";
import { Link } from 'react-router';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Material-related imports
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Mail, PhoneEnabled } from '@material-symbols-svg/react-sharp';

// Display mode-related imports
import { DisplayModeHook } from './../hooks/DisplayModeHook.jsx'
import { DisplayModeContext } from './../DisplayModeContext.js'

const Footer = () => {
    const { darkMode } = useContext(DisplayModeContext)
    const {headFoot, text, link, headFootIconHover} = DisplayModeHook()

    const prefersContrastMore = useMediaQuery('(prefers-contrast: more)')

    return (
        <div className={`${headFoot} ${text} p-6 w-full ${prefersContrastMore ? (darkMode ? "border-t border-t-white" : "border-t border-t-black") : ""}`}>
            <h2 className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-2 lg:mb-4">
                William Ackerman
            </h2>
            <Box sx={{ 
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: 'row',
                },
                alignItems: 'center',
                justifyContent: 'space-evenly',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>

                {/* Contact Me section */}
                <div>
                    <h3 className="footer-sub-header">
                        Contact Me
                    </h3>
                    <Box
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexDirection: 'column'
                    }}
                    >
                        <span><span className="emailSpan"><Mail className="inline-block" /> Email:</span> <Link to={"mailto:williamjohnackerman@gmail.com"} className={`${link}`}>williamjohnackerman@gmail.com</Link></span>
                        <span className="phoneSeparator"><PhoneEnabled className="inline-block" /> Phone: <Link to={"tel:+15162528285"} className={`${link}`}>+1 (516) 252-8285</Link></span>
                    </Box>
                </div>

                {/* My Socials section */}
                <div className="mt-4 lg:mt-0">
                    <h3 className="footer-sub-header">
                        My Socials
                    </h3>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-around' 
                        }}
                    >
                        <Link to={"https://github.com/WilliamAckerman"} target="_blank" rel="noreferrer"><FaGithub className={`${headFootIconHover} footer-social-icon`} /><span className="sr-only" aria-hidden="true">Github</span></Link>
                        <Link to={"https://www.linkedin.com/in/william-ackerman-6a4005290/"} target="_blank" rel="noreferrer"><FaLinkedin className={`${headFootIconHover} footer-social-icon`} /><span className="sr-only" aria-hidden="true">LinkedIn</span></Link>
                    </Box>
                </div>
            </Box>
            <p className="mt-4 text-center"><Link to={"/privacypolicy"} className={`${link} text-center`}>Privacy Policy</Link></p>
            <p className="mt-2 text-center">William Ackerman, 2025-2026. All Rights Reserved.</p>
    </div>
    )
}

export default Footer