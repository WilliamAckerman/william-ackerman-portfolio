import { useEffect, useState } from "react";
import { fetchToolSkillList } from "../services/api";
import * as SiIcons from "react-icons/si";
import SkillIcon from "./SkillIcon";

function ToolSkills() {
    const [toolSkillList, setToolSkillList] = useState([]);
    const [toolLoading, setToolLoading] = useState(true);

    useEffect(() => {
        const loadToolSkillList = async () => {
            const data = await fetchToolSkillList();
            setToolSkillList(data);
            setToolLoading(false);
        };
        loadToolSkillList();
    }, []);

    return (
        <>
            <h2 className="text-3xl text-center font-semibold text-neutral-50">Tools/Other</h2><br />
            { toolLoading ? <p className="text-center text-neutral-50">Loading tools...</p> :
            <ul className="flex flex-wrap justify-center gap-6">
                {toolSkillList
                .map((skill) => (
                    <li key={skill.id} className={`p-3 rounded bg-gray-100 flex flex-col items-center basis-1/3 max-w-xs justify-center`}>
                        <SkillIcon iconName={skill.icon_name} color={skill.color} />
                        <span className="font-semibold text-center">{skill.name}</span>
                    </li>
                ))}
            </ul>
            }
        </>
    );
}

export default ToolSkills;