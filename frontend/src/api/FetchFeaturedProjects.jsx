import {
    useQuery,
} from '@tanstack/react-query';
import Box from '@mui/material/Box';

export const FetchFeaturedProjects = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['featuredprojects'],
        queryFn: () => fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_API_ROUTE}/featuredprojects`).then((res) => 
            res.json(),
        ),
    })

    if (isLoading) return "Loading..."

    if (isError) {
        console.error("Error fetching featured projects:", error.message)
        return "Error fetching featured projects: " + error.message
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            mb: 2,
            mt: 0,
            ml: "auto",
            mr: "auto",
            width: {
                "xs": "100%",
                "md": "80%",
            }
        }}>
            {data.map((featuredProject) => (
                <div 
                    key={featuredProject._id}
                    className="
                                w-1/2
                                sm:w-1/3
                                md:w-1/4
                                bg-neutral-50
                                text-center
                                p-4
                                m-4
                                border-solid
                                border-black
                                rounded-md
                            "
                >
                    <p className="font-semibold">{featuredProject.title}</p>
                    <em>
                        {months[new Date(featuredProject.start_date).getMonth()]} {new Date(featuredProject.start_date).getFullYear()} - {featuredProject.end_date ? months[new Date(featuredProject.end_date).getMonth()] : "Present"} {featuredProject.end_date && new Date(featuredProject.end_date).getFullYear()}
                    </em>
                </div>
            ))}
        </Box>
    )
}