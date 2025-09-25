import Box from "@mui/material/Box";
import Headshot from "../images/Headshot.jpg";

function HomePage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-neutral-50 text-center">William Ackerman</h1>
            <h2 className="text-3xl font-semibold text-neutral-50 text-center mt-2">Full-Stack Web Developer</h2>
            <Box
                className="mt-2"
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                gap={{ xs: 4, md: 8 }}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: "0 auto",
                    p: { xs: 4, md: 6 },
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-neutral-50 text-center">Fast Learner, Ready Whenever</h3>
                    <p className="text-sm sm:text-base text-neutral-50 text-center mt-2">
                        As a SUNY Farmingdale alumnus with a Bachelor of Science in Computer 
                        Programming & Information Systems, I know how to approach developing solutions, 
                        whether websites or web applications. With a wide array of skills are my disposal, I 
                        understand the importance of delivering accessible, responsive solutions.
                    </p>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img 
                        src={Headshot} 
                        alt="William Ackerman" 
                        className="rounded max-w-[100px] sm:max-w-[150px] md:max-w-[300px] lg:max-w-[350px] h-auto" 
                    />
                </Box>
            </Box>

            <h2 className="text-3xl font-semibold text-neutral-50 text-center mt-2">Projects</h2>

            <h2 className="text-3xl font-semibold text-neutral-50 text-center mt-2">Skills</h2>

            <h2 className="text-3xl font-semibold text-neutral-50 text-center mt-2">About Me</h2>

            <h2 className="text-3xl font-semibold text-neutral-50 text-center mt-2">Contact Me</h2>
        </>
    );
}

export default HomePage;