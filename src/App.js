// src/App.js

import AboutMe from './view/AboutMe';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsPage from './view/ProjectsPage';
import ContactPage from './view/ContactPage';
import FontSelector from './components/fonts/FontSelector';
import { useState } from 'react';
import UserInfoForm from './components/forms/UserInfoForm';

const App = () => {
  const [selectedFont, setSelectedFont] = useState('Arial');

  // Function to handle font selection for the component
  const handleSelectFont = (font) => {
    setSelectedFont(font);
  };
  return (
    <Router>
    <div style={{ height: '100vh', overflowY: 'scroll', fontFamily: selectedFont }} >
      <Routes>
        {/* Define routes for different pages */}
        <Route exact path="/" element={<HomePage />} />
        {/* Add routes for other pages like Projects, About, Contact */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/user" element={<UserInfoForm />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/font" element={<FontSelector selectedFont={selectedFont}
        onSelectFont={handleSelectFont} /> } />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
