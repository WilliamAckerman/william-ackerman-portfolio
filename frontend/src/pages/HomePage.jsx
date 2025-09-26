import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Headshot from "../images/Headshot.jpg";

import FeaturedProjects from "../components/FeaturedProjects.jsx";
import FeaturedSkills from "../components/FeaturedSkills.jsx";

function HomePage() {
    return (
        <>
            { /*
            <h1 className="text-6xl font-bold text-neutral-50 text-center">William Ackerman</h1>
            <h2 className="text-5xl font-semibold text-neutral-50 text-center mt-2">Full-Stack Web Developer</h2>
            Original location */}
            <section id="hero" className="bg-blue-700">
                {/* Box sx originally had p: { xs: 4, md: 6 }
                Could use 100vh for height (min: md) 
                */}
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={{ xs: 4, md: 8 }}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: "0 auto",
                        height: { xs: "auto"},
                        p: { xs: 2, sm: 4, md: 6 },
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                    
                        {/* Proposed new location */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-50 text-center">William Ackerman</h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-50 text-center mt-2">Full-Stack Web Developer</h2>
                        <br />

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
                            className="rounded max-w-[100px] sm:max-w-[150px] md:max-w-[275px] lg:max-w-[350px] h-auto" 
                        />
                        {/* img's former className="rounded max-w-[100px] sm:max-w-[150px] md:max-w-[300px] lg:max-w-[350px] h-auto" */}
                    </Box>
                </Box>
            </section>

            <section id="Projects" className="p-6">
                <FeaturedProjects />
            </section>

            <section id="FeaturedSkills" className="p-6">
                <FeaturedSkills />
            </section>

            <section id="AboutMe" className="p-6">
                <h2 className="text-5xl font-semibold text-neutral-50 text-center mt-2">About Me</h2>
                <p className="text-center mt-2">
                    <span className="text-neutral-50">
                        Throughout my time as a developer, I have gone through quite a lot of growth. Whether 
                        it was discovering new qualities about myself, or gaining proficiency in technologies I 
                        previously did not see myself using, my journey as a developer has been quite a ride. Please 
                        visit the 
                    </span> 
                    <Link to="/about"> <span className="text-green-500 underline hover:no-underline">about</span> </Link> 
                    <span className="text-neutral-50">
                        page if you would like to learn more about me.
                    </span>
                </p>
            </section>

            <section id="Contact" className="p-6">
                <h2 className="text-5xl font-semibold text-neutral-50 text-center mt-2">Contact Me</h2>
                <p className="text-center mt-2">
                <span className="text-neutral-50">
                    I am always willing to work with new people; it's how I can forge new connections 
                    and become a more proficient developer. Please visit the 
                </span> 
                <Link to="/contact"> <span className="text-green-500 underline hover:no-underline">contact</span> </Link> 
                <span className="text-neutral-50">
                    page if you would like to get in touch with me.
                </span>
                </p>
            </section>
        </>
    );
}

export default HomePage;