import { useEffect, useState } from "react";
import { fetchIDESkillList } from "../services/api";
import * as SiIcons from "react-icons/si";
import SkillIcon from "./SkillIcon";

function IDESkills() {
    const [IDESkillList, setIDESkillList] = useState([]);
    const [IDELoading, setIDELoading] = useState(true);

    useEffect(() => {
        const loadIDESkillList = async () => {
            const data = await fetchIDESkillList();
            setIDESkillList(data);
        };
        loadIDESkillList();
        setIDELoading(false);
    }, []);

    return (
        <>
            <h2 className="text-3xl text-center font-semibold text-gray-100">IDEs</h2><br />
            { IDELoading ? <p className="text-center text-gray-100">Loading IDEs...</p> :
            <ul className="flex flex-wrap justify-center gap-6">
                {IDESkillList
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

export default IDESkills;