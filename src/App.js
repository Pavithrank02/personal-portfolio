// src/App.js

import AboutMe from './components/AboutMe';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <Router>
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
      <Header />
      <Routes>
        {/* Define routes for different pages */}
        <Route exact path="/" element={<HomePage />} />
        {/* Add routes for other pages like Projects, About, Contact */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
