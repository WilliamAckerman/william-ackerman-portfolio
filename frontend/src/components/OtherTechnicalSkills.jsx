import { useEffect, useState } from "react";
import { fetchOtherTechnicalSkillList } from "../services/api";
import * as SiIcons from "react-icons/si";
import SkillIcon from "./SkillIcon";

function OtherTechnicalSkills() {
    const [otherTechnicalSkillList, setOtherTechnicalSkillList] = useState([]);
    const [otherTechnicalSkillLoading, setOtherTechnicalSkillLoading] = useState(true);

    useEffect(() => {
        const loadOtherTechnicalSkillList = async () => {
            const data = await fetchOtherTechnicalSkillList();
            setOtherTechnicalSkillList(data);
            setOtherTechnicalSkillLoading(false);
        };
        loadOtherTechnicalSkillList();
    }, []);

    return (
        <>
            <h2 className="text-3xl text-center font-semibold text-neutral-50">Other Technical Skills</h2><br />
            { otherTechnicalSkillLoading ? <p className="text-center text-neutral-50">Loading other technical skills...</p> :
            <ul className="flex flex-wrap justify-center gap-6">
                {otherTechnicalSkillList
                .map((skill) => (
                    <li key={skill.id} className={`p-3 rounded bg-gray-100 flex flex-col items-center basis-1/3 max-w-xs ${skill.icon_name ? "" : "justify-center"}`}>
                        <span className="font-semibold text-center">{skill.name}</span>
                    </li>
                ))}
            </ul>
            }
        </>
    );
}

export default OtherTechnicalSkills;