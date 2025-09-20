function ProjectList({ projects }) {
    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map(p => (
                    <li key={p.id}>
                        <strong>{p.title}</strong>
                        <br />
                        {p.start_date?.slice(0, 7)} - {p.end_date?.slice(0, 7) || 'Present'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectList;