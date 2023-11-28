// src/components/HomePage.js

import React, { useState } from 'react';
import { Container, Typography, List, ListItem, styled,  Link } from '@mui/material';

import AboutMe from '../view/AboutMe';
import ProjectsPage from '../view/ProjectsPage';
import ContactForm from './ContactForm';
import {
  Button, createTheme, Grid, Switch, ThemeProvider,

} from '@mui/material';
import Footer from './Footer';


const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(4),
  transition: 'background-color 0.3s, color 0.3s',
}));

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Styled ListItemIcon to add hover animation


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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',

  };

  

  const contentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'center',
    padding: '3rem',
  };



  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <StyledContainer>
        <Grid item xs={12} sx={{ marginTop: '2rem' }}>
          <Switch checked={darkMode} onChange={handleThemeToggle} color="primary" />
          <Typography variant="body1" component="span">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Typography>
        </Grid>
        <Container maxWidth="md" style={containerStyle}>
      
          <Grid style={contentStyle}>
            <Grid>
              <Typography variant="h3" style={nameStyle}>
                Hi! I am Pavithran K
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="h5" gutterBottom>
                Frontend Developer
              </Typography>
            </Grid>
            <Grid>
            <Typography variant="h3" gutterBottom sx={{textAlign: 'left'}}>
              Building Delightful Design Experiences for Users              
            </Typography>
            </Grid>
            <Grid>
              <Button style={{ fontSize: 'x-large', width: '15vw', height: "6vh", marginTop: '4vh' }} variant="contained" color="primary" component="a" href="/projects">
                Projects
              </Button>

            </Grid>
          </Grid>

          {/* Rest of your content */}
        </Container>
        <Container maxWidth="md">
          <AboutMe />
        </Container>
        <Container minWidth="lg" >
          <ProjectsPage />
        </Container>
        <Container maxWidth="lg" >
          <ContactForm />
        </Container>
        <Container maxWidth="lg" >
          <Footer />
        </Container>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default HomePage;
