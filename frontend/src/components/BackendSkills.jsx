import { useEffect, useState } from "react";
import { fetchBackendSkillList } from "../services/api";
import * as SiIcons from "react-icons/si";
import SkillIcon from "./SkillIcon";

function BackendSkills() {
    const [backendSkillList, setBackendSkillList] = useState([]);
    const [backendLoading, setBackendLoading] = useState(true);

    useEffect(() => {
        const loadBackendSkillList = async () => {
            const data = await fetchBackendSkillList();
            setBackendSkillList(data);
            setBackendLoading(false);
        };
        loadBackendSkillList();
    }, []);

    return (
        <>
            <h2 className="text-3xl text-center font-semibold text-neutral-50">Backend</h2><br />
            { backendLoading ? <p className="text-center text-neutral-50">Loading backend skills...</p> :
            <ul className="flex flex-wrap justify-center gap-6">
                {backendSkillList
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

export default BackendSkills;