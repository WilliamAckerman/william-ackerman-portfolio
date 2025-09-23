//import { useEffect, useState } from "react";
import FrontendSkills from "../components/FrontendSkills";
import BackendSkills from "../components/BackendSkills";
import DatabaseSkills from "../components/DatabaseSkills";
import ProgrammingLanguageSkills from "../components/ProgrammingLanguageSkills";
import ToolSkills from "../components/ToolSkills";
import OperatingSystemSkills from "../components/OperatingSystemSkills";
import IDESkills from "../components/IDESkills";
import MiscTechnologySkills from "../components/MiscTechnologySkills";
import OtherTechnicalSkills from "../components/OtherTechnicalSkills";
import SoftSkills from "../components/SoftSkills";

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
            <br />
            <ProgrammingLanguageSkills />
            <br />
            <ToolSkills />
            <br />
            <OperatingSystemSkills />
            <br />
            <IDESkills />
            <br />
            <MiscTechnologySkills />
            <br />
            <OtherTechnicalSkills />
            <br />
            <SoftSkills />
        </>
    );
}

export default SkillsPage;