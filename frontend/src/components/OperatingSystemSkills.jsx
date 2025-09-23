import { useEffect, useState } from "react";
import { fetchOperatingSystemSkillList } from "../services/api";
import * as SiIcons from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import SkillIcon from "./SkillIcon";

function OperatingSystemSkills() {
    const [operatingSystemSkillList, setOperatingSystemSkillList] = useState([]);
    const [operatingSystemLoading, setOperatingSystemLoading] = useState(true);

    useEffect(() => {
        const loadOperatingSystemSkillList = async () => {
            const data = await fetchOperatingSystemSkillList();
            setOperatingSystemSkillList(data);
        };
        loadOperatingSystemSkillList();
        setOperatingSystemLoading(false);
    }, []);

    return (
        <>
            <h2 className="text-3xl text-center font-semibold text-gray-100">Operating Systems</h2><br />
            { operatingSystemLoading ? <p className="text-center text-gray-100">Loading operating systems...</p> :
            <ul className="flex flex-wrap justify-center gap-6">
                {operatingSystemSkillList
                .map((skill) => (
                    <li key={skill.id} className={`p-3 rounded bg-gray-100 flex flex-col items-center basis-1/3 max-w-xs ${skill.icon_name ? "" : "justify-center"}`}>
                        <SkillIcon iconName={skill.icon_name} color={skill.color} />
                        <span className="font-semibold text-center">{skill.name}</span>
                    </li>
                ))}
            </ul>
            }
        </>
    );
}

export default OperatingSystemSkills;