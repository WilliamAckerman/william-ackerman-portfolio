import Box from "@mui/material/Box";
import Headshot from "../images/Headshot.jpg";

function AboutPage() {

    {/* justifyContent: { xs: 'center', md: 'right' },
    alignItems: { xs: 'center', md: 'right' }, */}

    return (
        <>
            <h1 className="text-4xl font-bold text-neutral-50 text-center">About</h1>
            <Box
                className="mt-2"
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                gap={{ xs: 4, md: 8 }}
                sx={{
                    margin: "0 auto",
                    p: { xs: 4, md: 6 },
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-neutral-50 xs:text-center lg:text-left font-semibold">About Me</h2>
                    <p className="text-sm sm:text-base text-neutral-50 xs:text-center md:text-left mt-2">
                        Hello, my name is William Ackerman. I take great joy in developing full-stack 
                        websites and web applications. Whether frontend or backend, I always ensure that 
                        I am able to deliver quality work that will satisfy its users.
                    </p>
                    <p className="text-sm sm:text-base text-neutral-50 xs:text-center md:text-left mt-2">
                        I pride myself on my attention to detail and ability to adapt to new technologies. 
                        I am highly proficient in SQL, JavaScript, and PHP, in addition to having 
                        experience utilizing frameworks such as React and Node.js.
                        Additionally, I am well-versed in designing for accessibility and responsiveness 
                        across devices. A trick that I often use to enhance my development practices is 
                        imagining myself as a user while I go about designing.
                    </p>
                    <p className="text-sm sm:text-base text-neutral-50 xs:text-center md:text-left mt-2">
                        I have a Bachelor of Science in Computer Programming & Information Systems, which I 
                        studied for at Farmingdale State College from 2021 to 2025. During my time at FSC, I 
                        got to learn about new technologies, meet new people, and discover new things about myself. 
                        And most importantly, I developed a passion for web development!
                    </p>
                    <p className="text-sm sm:text-base text-neutral-50 xs:text-center md:text-left mt-2">
                        As far as my personal interests go, I tend to gravitate towards theatre. This started from when I auditioned 
                        for my high school's fall musical near the end of ninth grade. Later on, 
                        I would end up joining Farmingdale State College's Backstage Theatre Company
                        during my first semester. As my time at FSC went by, I would 
                        become the Backstage Theatre Company's Vice President. And after some more time had passed,
                        I would later be promoted to its President. The Backstage Theatre Company 
                        was an integral part of my time at Farmingdale State College. Even after my 
                        graduation, I still cherish my memories of it.
                    </p>
                    <p className="text-sm sm:text-base text-neutral-50 xs:text-center md:text-left mt-2">
                        I am always eager to meet and work with new people, as well as gain experience 
                        in new technologies.
                    </p>
                </Box>
                <Box 
                    sx={{ 
                        display: "flex", 
                        justifyContent: { xs: "center", md: "right" }
                        }}>
                    <img 
                        src={Headshot} 
                        alt="William Ackerman" 
                        className="rounded max-w-[100px] sm:max-w-[150px] md:max-w-[300px] lg:max-w-[350px] h-auto" 
                    />
                </Box>
            </Box>
        </>
    );
}

export default AboutPage;