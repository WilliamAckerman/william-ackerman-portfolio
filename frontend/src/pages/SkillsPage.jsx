import { /*useEffect,*/ useState } from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import FrontendSkills from "../components/FrontendSkills";
import BackendSkills from "../components/BackendSkills";
import DatabaseSkills from "../components/DatabaseSkills";
//import ProgrammingLanguageSkills from "../components/ProgrammingLanguageSkills";
import ToolSkills from "../components/ToolSkills";
//import OperatingSystemSkills from "../components/OperatingSystemSkills";
//import IDESkills from "../components/IDESkills";
//import MiscTechnologySkills from "../components/MiscTechnologySkills";
//import OtherTechnicalSkills from "../components/OtherTechnicalSkills";
import SoftSkills from "../components/SoftSkills";

function TabPanel({ children, value, index }) {
    return (
        <div hidden={value !== index}>
            {value === index && (
                <Box sx={{ p: 2 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function SkillsPage() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
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
            <section id="SkillsPage" className="p-6">
                <h1 className="text-4xl text-center font-bold  text-neutral-50">Skills</h1><br />

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                    <Tabs 
                        value={value} 
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            "& .MuiTabs-scrollButtons": {
                                color: "white",
                            }
                        }}
                        allowScrollButtonsMobile
                        aria-label="Tabs for Skills section"
                    >
                        <Tab 
                            label="All"
                            sx={{
                                color: "white",
                                "&.Mui-selected": { color: "dodgerblue" },
                            }}
                        />
                        <Tab 
                            label="Frontend" 
                            sx={{
                                color: "white",
                                "&.Mui-selected": { color: "dodgerblue" },
                            }}
                        />
                        <Tab 
                            label="Backend" 
                            sx={{
                                color: "white",
                                "&.Mui-selected": { color: "dodgerblue" },
                            }}
                        />
                        <Tab 
                            label="Database" 
                            sx={{
                                color: "white",
                                "&.Mui-selected": { color: "dodgerblue" },
                            }}
                        />
                        {/*<Tab 
                            label="Programming Languages"
                            sx={{
                                color: "white",
                                "&.Mui-selected": { color: "dodgerblue" },
                            }} 
                        />*/}
                        <Tab 
                            label="Tools/Other" 
                            sx={{
                                color: "white",
                                "&.Mui-selected": { color: "dodgerblue" },
                            }}
                        />
                        {/*<Tab 
                            label="Operating Systems" 
                            sx={{
                                color: "white",
                                "&.Mui-selected": { color: "dodgerblue" },
                            }}
                        />*/}
                        {/*<Tab 
                            label="IDEs" 
                            sx={{
                                color: "white",
                                "&.Mui-selected": { color: "dodgerblue" },
                            }}
                        />*/}
                        {/*<Tab 
                            label="Misc. Technologies" 
                            sx={{
                                color: "white",
                                "&.Mui-selected": { color: "dodgerblue" },
                            }}
                        />*/}
                        {/*<Tab 
                            label="Other Technical Skills" 
                            sx={{
                                color: "white",
                                "&.Mui-selected": { color: "dodgerblue" },
                            }}
                        />*/}
                        <Tab 
                            label="Soft Skills" 
                            sx={{
                                color: "white",
                                "&.Mui-selected": { color: "dodgerblue" },
                            }}
                        />
                    </Tabs>

                    <TabPanel value={value} index={0}>
                        <FrontendSkills />
                        <br />
                        <BackendSkills />
                        <br />
                        <DatabaseSkills />
                        <br />
                        {/*<ProgrammingLanguageSkills />
                        <br />*/}
                        <ToolSkills />
                        <br />
                        {/*<OperatingSystemSkills />
                        <br />
                        <IDESkills />
                        <br />
                        <MiscTechnologySkills />
                        <br />
                        <OtherTechnicalSkills />
                        <br />*/}
                        <SoftSkills />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <FrontendSkills />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <BackendSkills />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <DatabaseSkills />
                    </TabPanel>
                    {/*<TabPanel value={value} index={4}>
                        <ProgrammingLanguageSkills />
                    </TabPanel>*/}
                    <TabPanel value={value} index={4}>
                        <ToolSkills />
                    </TabPanel>
                    {/*<TabPanel value={value} index={6}>
                        <OperatingSystemSkills />
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                        <IDESkills />
                    </TabPanel>
                    <TabPanel value={value} index={8}>
                        <MiscTechnologySkills />
                    </TabPanel>
                    <TabPanel value={value} index={9}>
                        <OtherTechnicalSkills />
                    </TabPanel>*/}
                    <TabPanel value={value} index={5}>
                        <SoftSkills />
                    </TabPanel>
                </Box>

            {/*<CustomTabPanel value={value} index={0}>
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
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <FrontendSkills />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <BackendSkills />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <DatabaseSkills />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <ProgrammingLanguageSkills />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                <ToolSkills />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={6}>
                <OperatingSystemSkills />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={7}>
                <IDESkills />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={8}>
                <MiscTechnologySkills />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={9}>
                <OtherTechnicalSkills />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={10}>
                <SoftSkills />
            </CustomTabPanel>
            */}
            </section>
        </>
    );
}

export default SkillsPage;