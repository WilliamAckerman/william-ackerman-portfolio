import {
    useQuery,
} from '@tanstack/react-query';
import Box from '@mui/material/Box';

export const FetchFeaturedSkills = () => {
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['featuredskills'],
        queryFn: () => fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_API_ROUTE}/featuredskills`).then((res) => 
            res.json(),
        ),
    })

    if (isLoading) return 'Loading...'

    if (isError) {
        console.error("Error fetching featured skills:", error.message)
        return "Error fetching featured skills: " + error.message
    }

    //console.log("Featured skills:", data)

    /*
    Featured Skill Display:
        - Default: One skill displayed per row (w-1/2)
        - sm: Two skills displayed per row (w-1/3)
        - md: Three skills displayed per row (w-1/4)
    */
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
            {data.map((featuredSkill) => (
                <div 
                    key={featuredSkill._id} 
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
                    <span className="font-semibold">{featuredSkill.name}</span>
                </div>
            ))}
        </Box>
    )
}