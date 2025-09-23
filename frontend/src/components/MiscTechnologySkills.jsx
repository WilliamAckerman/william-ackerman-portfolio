import { useEffect, useState } from "react";
import { fetchMiscTechnologySkillList } from "../services/api";
import * as SiIcons from "react-icons/si";
import SkillIcon from "./SkillIcon";

function MiscTechnologySkills() {
    const [miscTechnologySkillList, setMiscTechnologySkillList] = useState([]);
    const [miscTechnologyLoading, setMiscTechnologyLoading] = useState(true);

    useEffect(() => {
        const loadMiscTechnologySkillList = async () => {
            const data = await fetchMiscTechnologySkillList();
            setMiscTechnologySkillList(data);
        };
        loadMiscTechnologySkillList();
        setMiscTechnologyLoading(false);
    }, []);

    return (
        <>
            <h2 className="text-3xl text-center font-semibold text-gray-100">Misc. Technologies</h2><br />
            { miscTechnologyLoading ? <p className="text-center text-gray-100">Loading misc. technology skills...</p> :
            <ul className="flex flex-wrap justify-center gap-6">
                {miscTechnologySkillList
                .map((skill) => (
                    <li key={skill.id} className="p-3 rounded bg-gray-100 flex flex-col items-center basis-1/3 max-w-xs">
                        <SkillIcon iconName={skill.icon_name} color={skill.color} />
                        <span className="font-semibold text-center">{skill.name}</span>
                    </li>
                ))}
            </ul>
            }
        </>
    );
}

export default MiscTechnologySkills;