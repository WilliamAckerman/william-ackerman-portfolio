import './../styles/Footer.css';
import { Link } from 'react-router';
import Box from '@mui/material/Box';
import { Mail, PhoneEnabled } from '@material-symbols-svg/react-sharp';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-slate-800 text-neutral-50 p-6 w-100%">
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
            }}>
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
                        <span><Mail className="inline-block" /> Email: <Link to={"mailto:williamjohnackerman@gmail.com"} className="footer-link">williamjohnackerman@gmail.com</Link></span>
                        <span><PhoneEnabled className="inline-block" /> Phone: <Link to={"tel:+15162528285"} className="footer-link">+1 (516) 252-8285</Link></span>
                    </Box>
                </div>
                <div className="mt-4 lg:mt-0">
                    <h3 className="footer-sub-header">
                        My Socials
                    </h3>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Link to={"https://github.com/WilliamAckerman"} target="_blank" rel="noreferrer"><FaGithub className="footer-social-icon" /></Link>
                        <Link to={"https://www.linkedin.com/in/william-ackerman-6a4005290/"} target="_blank" rel="noreferrer"><FaLinkedin className="footer-social-icon" /></Link>
                    </Box>
                </div>
            </Box>
            <p className="mt-4 text-center"><Link to={"/privacypolicy"} className="footer-link text-center">Privacy Policy</Link></p>
            <p className="mt-2 text-center">William Ackerman, 2025. All Rights Reserved.</p>
    </div>
    )
}

export default Footer