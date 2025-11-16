import { useQuery } from '@tanstack/react-query';
import Box from '@mui/material/Box';
import SkillIcon from '../components/SkillIcon.jsx';

export const FetchSkills = (props) => {
    const type = props.type;

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['fetchSkills', type], // Include query parameters in a queryKey
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_API_ROUTE}/skills/${type}`);
            if (!res.ok) { // Prevents the UI from showing undefined errors
                throw new Error(`HTTP error: Status: ${res.status}`);
            }
            return res.json()
        },
    })

    if (isLoading) return (
        <p className="text-neutral-50 text-center">
            Loading {type} skills...
        </p>
    )

    if (isError) {
        console.error("Error: ", error.message);
        return (
            <p className="text-neutral-50 text-center">
                Error fetching {type} skills: {error.message}
            </p>
        )
    }

    //console.log(`${type} skills: `, data)

    return (
        <>
            <h2 className="mb-4 text-xl sm:text-3xl md:text-4xl xl:text-5xl text-center text-neutral-50 font-semibold">{type}</h2>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    mt: 0,
                    mb: 2,
                    ml: 'auto',
                    mr: 'auto',
                    width: {
                        "xs": "100%",
                        "md": "80%",
                    }
                }}
            >
                {data.map((skill) => (
                    <div
                        key={skill._id}
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
                            rounded-sm
                            shadow-sm
                            flex
                            flex-col
                            items-center
                            justify-center
                        "
                    >
                        {/* TODO: Favicon goes here */}
                        {skill.icon && <SkillIcon icon={skill.icon} hexColor={skill.hexColor} />}
                        <span className="font-semibold">{skill.name}</span>
                    </div>
                ))}
            </Box>
        </>
    )
}