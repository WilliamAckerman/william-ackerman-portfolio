// CSS imports
import './../index.css';
import './../styles/Skills.css';

import { useContext } from 'react';
import {
    useQuery
} from "@tanstack/react-query";
import SkillIcon from "./SkillIcon.jsx";
import { fetchProjectSkills } from "./../api/fetchProjectSkills.js";
import { queryClient } from './../queryClient.js';

// Display mode-related imports
import { DisplayModeContext } from '../DisplayModeContext.js';
import { DisplayModeHook } from '../hooks/DisplayModeHook.jsx';

export const FetchProjectSkills = (props) => {
    const project = props.project;
    const { darkMode } = useContext(DisplayModeContext)
    const { text, boxBg, border } = DisplayModeHook()

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['fetchProjectSkills', project],
        queryFn: async () => {
            const res = await fetchProjectSkills(project)
            console.log(res)
            return await res.json()
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey: ['fetchProjectSkills', project] })
    })

    if (isLoading) return (
        <p className={`text-center ${text}`}>
            Loading project skills...
        </p>
    )

    if (isError) {
        console.error("Error fetching project skills: ", error.message);
        return (
            <p className={`text-center ${text}`}>
                Error fetching project skills: {error.message}
            </p>
        )
    }

    return (
        <>
            <h2 className={`
                uppercase
                font-bold
                text-xl sm:text-2xl
                mt-4
                mb-4
                ${text}
            `}>
                Technologies/Skills
            </h2>

            <div className="
                flex 
                items-center 
                justify-evenly 
                flex-wrap 
                mt-0 
                mb-2 
                ml-auto 
                mr-auto
            ">
            {data.map((projectSkill) => (
                <div
                    key={projectSkill._id}
                    className={`skillCard ${boxBg} ${border}`}
                >
                    {projectSkill.icon && <SkillIcon icon={projectSkill.icon} color={`#${darkMode ? projectSkill.darkColor : projectSkill.lightColor}`} name={projectSkill.name} />}
                    <span className={`mt-1 ${text}`}>{projectSkill.name}</span>
                </div>
            ))}
            </div>
        </>
    )
}