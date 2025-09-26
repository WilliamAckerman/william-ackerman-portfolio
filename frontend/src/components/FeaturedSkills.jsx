import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFeaturedSkills } from "../services/api";
import * as SiIcons from "react-icons/si";
import SkillIcon from "./SkillIcon";

function FeaturedSkills() {
    const [featuredSkills, setFeaturedSkills] = useState([]);
    const [featuredLoading, setFeaturedLoading] = useState(true);

    useEffect(() => {
        const loadFeaturedSkills = async () => {
            const data = await fetchFeaturedSkills();
            setFeaturedSkills(data);
            setFeaturedLoading(false);
        };
        loadFeaturedSkills();
    }, []);

    return (
        <>
            <h2 className="text-5xl font-semibold text-neutral-50 text-center mt-2">Featured Skills</h2>
            <br />
            <p className="text-center text-neutral-50 mt-2">
                Here is a glimpse of skills that I employ to deliver quality work.
            </p>
            <br />
            {
                featuredLoading ? <p className="text-center text-neutral-50">Loading featured skills...</p> :
                <ul className="flex flex-wrap justify-center gap-6">
                    {featuredSkills
                        .map((skill) => (
                            <li key={skill.id} className={`p-3 rounded bg-gray-100 flex flex-col items-center basis-1/3 max-w-xs justify-center`}>
                                {skill.icon_name ? <SkillIcon iconName={skill.icon_name} color={skill.color} /> : ""}
                                <span className="font-semibold text-center">{skill.name}</span>
                            </li>
                        ))
                    }
                </ul>
            }
            <br />
            <p className="text-center mt-2">
                <span className="text-neutral-50">To view more of my skills, please visited my</span> 
                <Link to="/skills"> <span className="text-green-500 underline hover:no-underline">skills</span> </Link> 
                <span className="text-neutral-50">page.</span>
            </p>
        </>
    );
}

export default FeaturedSkills;