function SkillList({ skills }) {
    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {skills.map(s => (
                    <li key={s.id}>
                        {s.name} ({s.type_id})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillList;