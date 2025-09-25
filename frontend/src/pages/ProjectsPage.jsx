import { useEffect, useState } from "react";
import { fetchProjects } from "../services/api";

function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function formatDate(dateString) {
        if (!dateString) return "Present";
        const date = new Date(dateString + "T00:00:00");
        return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    }

    useEffect(() => {
        fetchProjects()
        .then(setProjects)
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading projects...</p>;
    if (error) return <p class="text-red-500">Error: {error}</p>;

    return (
        <>
            <h1 className="text-4xl font-bold text-neutral-50">Projects</h1>
            <br />
            <div className="grid gap-4 md:grid-cols-2">
                {projects.map((p) => (
                    <div key={p.id} className="p-4 border bg-neutral-50 rounded-lg shadow">
                        <h2 className="text-xl font-semibold">{p.title}</h2>
                        <p>{formatDate(p.start_date)} - {formatDate(p.end_date)}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProjectsPage;