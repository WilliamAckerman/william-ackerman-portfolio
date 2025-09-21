//import { useEffect, useState } from "react";
import FrontendSkills from "../components/FrontendSkills";
import BackendSkills from "../components/BackendSkills";
import DatabaseSkills from "../components/DatabaseSkills";

function SkillsPage() {
    {/*const [skillList, setSkillList] = useState([]);

    useEffect(() => {
        const loadSkillList = async () => {
            const data = await fetchSkillList();
            setSkillList(data);
        };
        loadSkillList();
    }, []);*/}

    return (
        <>
            <h1 className="text-4xl text-center font-bold text-gray-100">Skills</h1><br />
            <FrontendSkills />
            <br />
            <BackendSkills />
            <br />
            <DatabaseSkills />
        </>
    );
}

export default SkillsPage;