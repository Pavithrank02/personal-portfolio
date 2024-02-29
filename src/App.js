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

import { Button, createTheme, Grid, Switch, ThemeProvider, Typography, styled } from '@mui/material';
import DataComponent from './components/DataComponent';
const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(4),
  transition: 'background-color 0.3s, color 0.3s',
}));
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
const nameStyle = {
  fontSize: '3rem',
  marginBottom: '1rem',
  fontWeight: 'bold',
};
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedFont, setSelectedFont] = useState('Arial');


  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Function to handle font selection for the component
  const handleSelectFont = (font) => {
    setSelectedFont(font);
  };
  return (
    <Router>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <StyledContainer>
          <div style={{ height: '100vh', overflowY: 'scroll', fontFamily: selectedFont }} >
            <Grid item xs={12} sx={{ marginTop: '2rem' }}>
              <Switch checked={darkMode} onChange={handleThemeToggle} color="primary" />
              <Typography variant="body1" component="span">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </Typography>
            </Grid>
            {/* <Header /> */}
            <Routes>
              {/* Define routes for different pages */}
              <Route exact path="/" element={<HomePage />} />
              {/* Add routes for other pages like Projects, About, Contact */}
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/user" element={<UserInfoForm />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/data" element={<DataComponent />} />
              <Route path="/font" element={<FontSelector selectedFont={selectedFont}
                onSelectFont={handleSelectFont} />} />
            </Routes>
          </div>
        </StyledContainer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
