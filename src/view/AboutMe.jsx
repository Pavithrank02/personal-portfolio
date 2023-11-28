// src/components/AboutMe.js

import React from 'react';
import { Container, Typography, Button, Link, Grid, Paper } from '@mui/material';
import '../components/FrontendSkills.css';
import FrontendSkills from '../components/FrontendSkills';

const AboutMe = () => {

  const containerStyle = {
    minHeight: '100vh',
    textAlign: 'center',
    padding: '2rem 0',
    
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    textAlign: 'justify'
  };
  return (
    <Container maxWidth="md" style={containerStyle}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {/* First row */}
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            About Me
          </Typography>
        </Grid>
        {/* Second row with two columns */}
        <Grid item xs={12}>
          <Typography variant="body1" style={descriptionStyle}>
            I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={descriptionStyle}>
            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <Link href="https://linkedin.com/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</Link> where I post useful content related to Web Development and Programming.
            <br />
            <br />
            I'm open to Job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, then don't hesitate to <Link href="mailto:youremail@example.com">contact me</Link>.
          </Typography>
          <Button variant="contained" color="primary" component="a" href="/projects">
            Projects
          </Button>
        </Grid>
        <Grid item xs={6}>
          {/* Right column */}
          {/* You can add content for the right column here */}
       <FrontendSkills />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
