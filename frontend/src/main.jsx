import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ViewResumeCV from './pages/ViewResumeCV.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import { queryClient } from './queryClient.js';
import { QueryClientProvider } from '@tanstack/react-query';
import { DisplayModeProvider } from './DisplayModeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DisplayModeProvider>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/viewresumecv" element={<ViewResumeCV />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </DisplayModeProvider>
  </StrictMode>,
)
