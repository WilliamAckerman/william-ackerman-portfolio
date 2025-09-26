import { useEffect, useState } from "react";
import { fetchFeaturedProjects } from "../services/api.js";

function FeaturedProjects() {
    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [featuredProjectsLoading, setFeaturedProjectsLoading] = useState(true);

    useEffect(() => {
        const loadFeaturedProjects = async () => {
            const data = await fetchFeaturedProjects();
            setFeaturedProjects(data);
            setFeaturedProjectsLoading(false);
        }
        loadFeaturedProjects();
    }, []);

    function formatDate(dateString) {
        if (!dateString) return "Present";
        const date = new Date(dateString + "T00:00:00");
        return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    }

    return (
        <>
            <h2 className="text-5xl font-semibold text-neutral-50 text-center mt-2">Projects</h2>
            <br />
            <p className="text-center text-neutral-50">
                Here are some projects that I am particularly proud of.
            </p>
            <br />
            {
                featuredProjectsLoading ? <p className="text-center text-neutral-50">Loading featured projects...</p> :
                <div className="flex flex-wrap justify-center gap-6">
                    {featuredProjects
                    .map((project) => (
                        <div key={project.id}  className="p-4 border bg-neutral-50 rounded-lg shadow basis-1/2 max-w-md justify-center">
                            <h2 className="text-xl font-semibold">{project.title}</h2>
                            <p>{formatDate(project.start_date)} - {formatDate(project.end_date)}</p>
                        </div>
                    ))}
                </div>
            }
        </>
    );
}

export default FeaturedProjects;