import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {

    return (
        <footer className="bg-gray-800">
            <br />
            <h2 className="text-5xl text-center text-neutral-50 font-semibold">
                William Ackerman
            </h2>
            <br />
            <h3 className="text-4xl text-center text-neutral-50 font-semibold">
                Contact Me
            </h3>
            <br />
            <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", gap: 2, color: "white" }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmailIcon /> <a href="mailto:williamjohnackerman@gmail.com" className="underline hover:no-underline text-green-500">williamjohnackerman@gmail.com</a>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PhoneIcon /> <a href="tel:+15162528285" className="underline hover:no-underline text-green-500">(+1) 516-252-8285</a>
                </Box>
            </Box>
            <br />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, color: 'white' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <a
                        href="https://www.linkedin.com/in/william-ackerman-6a4005290/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiLinkedin className="text-4xl" />
                    </a>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <a
                        href="https://github.com/WilliamAckerman"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <SiGithub className="text-4xl" href="#" />
                    </a>
                </Box>
            </Box>
            <br />
            <p className="text-center text-neutral-50">2025</p>
            <br />
        </footer>
    )
}