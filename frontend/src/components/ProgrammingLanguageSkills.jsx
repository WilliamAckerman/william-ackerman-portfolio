import { useEffect, useState } from "react";
import { fetchProgrammingLanguageSkillList } from "../services/api";
import * as SiIcons from "react-icons/si";
import SkillIcon from "./SkillIcon";

function ProgrammingLanguageSkills() {
    const [programmingLanguageSkillList, setProgrammingLanguageSkillList] = useState([]);
    const [programmingLanguageLoading, setProgrammingLanguageLoading] = useState(true);

    useEffect(() => {
        const loadProgrammingLanguageSkillList = async () => {
            const data = await fetchProgrammingLanguageSkillList();
            setProgrammingLanguageSkillList(data);
            setProgrammingLanguageLoading(false);
        };
        loadProgrammingLanguageSkillList();
    }, []);

    return (
        <>
            <h2 className="text-3xl text-center font-semibold text-neutral-50">Programming Languages</h2><br />
            { programmingLanguageLoading ? <p className="text-center text-neutral-50">Loading programming languages...</p> :
            <ul className="flex flex-wrap justify-center gap-6">
                {programmingLanguageSkillList
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

export default ProgrammingLanguageSkills;