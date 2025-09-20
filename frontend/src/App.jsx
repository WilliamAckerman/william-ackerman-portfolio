import { useEffect, useState } from 'react';
import ProjectList from './components/ProjectList';
import SkillList from './components/SkillList';
import API from './services/api';

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    API.get('/projects').then(res => setProjects(res.data));
    API.get('/skills').then(res => setSkills(res.data));
  }, []);

  return (
    <div>
      <h1>My Portfolio</h1>
      <ProjectList projects={projects} />
      <SkillList skills={skills} />
    </div>
  );
}

export default App;