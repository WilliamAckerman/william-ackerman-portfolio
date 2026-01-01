// CSS imports
import './../index.css';
import './../styles/Skills.css';

import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import SkillIcon from './SkillIcon.jsx';
import { fetchSkills } from './../api/fetchSkills.js';

// Material UI import
import Box from '@mui/material/Box';

// Display mode-related imports
import { DisplayModeContext } from './../DisplayModeContext.js';
import { DisplayModeHook } from './../hooks/DisplayModeHook.jsx';

export const FetchSkills = (props) => {
    const type = props.type; // Determines the skill type to filter by
    const division = props.division; // Allows for different formatting with the "All Skills" filter in the Skills page
    const { darkMode } = useContext(DisplayModeContext)
    const { text, boxBg, boxText, border } = DisplayModeHook()

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['fetchSkills', type], // Include query parameters in a queryKey
        queryFn: async () => await fetchSkills(type)
    })

    // Displayed when loading skills
    if (isLoading) return (
        <p className={`text-center ${boxText}`}>
            Loading {type} skills...
        </p>
    )

    // Triggers if an error occurs
    if (isError) {
        console.error("Error: ", error.message);
        return (
            <p className={`text-center ${boxText}`}>
                Error fetching {type} skills: {error.message}
            </p>
        )
    }

    return (
        <>
            {
                type != "featured" 
                && 
                (division == "all" ?
                <h3 className={`${text} mb-2 font-normal text-xl sm:text-2xl md:text-3xl xl:text-4xl text-center`}>
                    {type}
                </h3>
                :
                <h2 className={`secondary-header ${text}`}>
                    {type}
                </h2>)
            }
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
                    },
                    maxWidth: '1400px',
                }}
            >
                {data.map((skill) => (
                    <div
                        key={skill._id}
                        className={`skillCard ${boxBg} ${border}`}
                    >
                        {skill.icon && <SkillIcon icon={skill.icon} color={`#${darkMode ? skill.darkColor : skill.lightColor}`} name={skill.name} />}
                        <span className={`mt-1 ${text}`}>{skill.name}</span>
                    </div>
                ))}
            </Box>
        </>
    )
}