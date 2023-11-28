// src/components/HomePage.js

import React, { useState } from 'react';
import { Container, Typography, List, ListItem, styled, Link } from '@mui/material';

import AboutMe from '../view/AboutMe';
import ProjectsPage from '../view/ProjectsPage';
import ContactForm from './ContactForm';
import {
  Button, createTheme, Grid, Switch, ThemeProvider,

} from '@mui/material';
import TemplateMaker from './template/TemplateMaker';
import  {TemplateProvider}  from './template/TemplateProvider';
import Footer from './Footer';



const HomePage = () => {


  // Styled ListItemIcon to add hover animation




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
  const nameStyle = {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  };


  return (
    <TemplateProvider>
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
            <Typography variant="h3" gutterBottom sx={{ textAlign: 'left' }}>
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
    </TemplateProvider>

  );
};

export default HomePage;
