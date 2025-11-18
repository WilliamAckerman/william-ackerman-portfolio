import {
    useQuery
} from "@tanstack/react-query";
import SkillIcon from "./SkillIcon.jsx";
import { apiFetchProjectSkills } from "../api/apiFetchProjectSkills.js";
import { queryClient } from './../queryClient.js';

export const FetchProjectSkills = (props) => {
    const project = props.project;
    console.log(project)

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['fetchProjectSkills', project],
        queryFn: async () => {
            const res = await apiFetchProjectSkills(project)
            console.log(res)
            return await res.json()
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey: ['fetchProjectSkills', project] })
    })

    if (isLoading) return (
        <p className="text-center">
            Loading project skills...
        </p>
    )

    if (isError) {
        console.error("Error fetching project skills: ", error.message);
        return (
            <p className="text-center">
                Error fetching project skills: {error.message}
            </p>
        )
    }

    return (
        <>
            <h2 className="
                uppercase
                font-bold
                text-xl sm:text-2xl
                mt-4
                mb-4
            ">
                Technologies
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
                    className="
                        
                        w-1/3
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
                    {projectSkill.icon && <SkillIcon icon={projectSkill.icon} hexColor={projectSkill.hexColor} />}
                    <span className="font-semibold">{projectSkill.name}</span>
                </div>
            ))}
            </div>
        </>
    )
}