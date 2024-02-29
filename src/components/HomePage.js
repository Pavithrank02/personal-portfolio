// src/components/HomePage.js

import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import AboutMe from '../view/AboutMe';
import ProjectsPage from '../view/ProjectsPage';
import ContactForm from './ContactForm';
import { personals } from '../constants';
import Footer from './Footer';
import { TemplateProvider } from './template/TemplateProvider';
import Header from './Header';

const HomePage = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden', // Hide overflow to prevent unwanted scrollbars
    transition: 'all 0.3s ease', // Add transition effect for smoother scrolling
  };

  const contentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '3rem',
  };

  const buttonStyle = {
    fontSize: 'x-large',
    width: '15vw',
    height: '6vh',
    marginTop: '4vh',
  };

  return (
    <TemplateProvider>
      <Container maxWidth="lg" style={containerStyle}>
        <Grid container style={contentStyle}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              {personals.name}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {personals.role}
            </Typography>
            <Typography variant="h3" gutterBottom>
              {personals.moto}
            </Typography>
            <Button
              style={buttonStyle}
              variant="contained"
              color="primary"
              component="a"
              href="/projects"
            >
              Projects
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" style={containerStyle}>
        <AboutMe />
      </Container>

      <Container maxWidth="lg" style={containerStyle}>
        <ProjectsPage />
      </Container>

      <Container maxWidth="lg" style={containerStyle}>
        <ContactForm />
      </Container>

      <Container maxWidth="lg" style={containerStyle}>
        <Footer />
      </Container>
    </TemplateProvider>
  );
};

export default HomePage;
