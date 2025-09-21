import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import ProjectList from './components/ProjectList';
import SkillList from './components/SkillList';

//import API from './services/api';

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <div>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <main className="p-6 bg-cyan-950">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;