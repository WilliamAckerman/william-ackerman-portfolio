import { useEffect, useState } from "react";
import { fetchSoftSkillList } from "../services/api";
import * as SiIcons from "react-icons/si";
import SkillIcon from "./SkillIcon";

function SoftSkills() {
    const [softSkillList, setSoftSkillList] = useState([]);
    const [softSkillLoading, setSoftSkillLoading] = useState(true);

    useEffect(() => {
        const loadSoftSkillList = async () => {
            const data = await fetchSoftSkillList();
            setSoftSkillList(data);
        };
        loadSoftSkillList();
        setSoftSkillLoading(false);
    }, []);

    return (
        <>
            <h2 className="text-3xl text-center font-semibold text-gray-100">Soft Skills</h2><br />
            { softSkillLoading ? <p className="text-center text-gray-100">Loading soft skills...</p> :
            <ul className="flex flex-wrap justify-center gap-6">
                {softSkillList
                .map((skill) => (
                    <li key={skill.id} className="p-3 rounded bg-gray-100 flex flex-col items-center basis-1/3 max-w-xs">
                        <span className="font-semibold text-center">{skill.name}</span>
                    </li>
                ))}
            </ul>
            }
        </>
    );
}

export default SoftSkills;