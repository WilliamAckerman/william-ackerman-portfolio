import { useEffect, useState } from "react";
import { fetchFrontendSkillList } from "../services/api";
import * as SiIcons from "react-icons/si";
import SkillIcon from "./SkillIcon";

function FrontendSkills() {
    const [frontendSkillList, setFrontendSkillList] = useState([]);
    const [frontendLoading, setFrontendLoading] = useState(true);

    useEffect(() => {
        const loadFrontendSkillList = async () => {
            const data = await fetchFrontendSkillList();
            setFrontendSkillList(data);
            setFrontendLoading(false);
        };
        loadFrontendSkillList();
    }, []);

    return (
        <>
            <h2 className="text-3xl text-center font-semibold text-neutral-50">Frontend</h2><br />
            { frontendLoading ? <p className="text-center text-neutral-50">Loading frontend skills...</p> :
            <ul className="flex flex-wrap justify-center gap-6">
                {frontendSkillList
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

export default FrontendSkills;