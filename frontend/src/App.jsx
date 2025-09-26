import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ProjectList from './components/ProjectList';
import SkillList from './components/SkillList';

//import API from './services/api';

function App() {

  return (
    <div>
      {/*<nav className="p-4 bg-gray-800 text-white flex flex-wrap gap-4"> {/* className originally had p-4 }
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>*/}

      <Navbar />

      <main className="bg-cyan-950">{/* Formerly had p-6 in className */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;