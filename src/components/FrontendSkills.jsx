// src/components/FrontendSkills.js

import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import './FrontendSkills.css'; // Import CSS file for styles

const FrontendSkills = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    textAlign: 'center',
  };

  return (
    <Container maxWidth="md" style={containerStyle}>
      <Typography variant="h3" gutterBottom>
        Frontend Developer Skills
      </Typography>
      {/* Skill list with animation */}
      <List className="skill-list">
        <ListItem className="skill-item">
          <ListItemText primary="HTML5" />
        </ListItem>
        <ListItem className="skill-item">
          <ListItemText primary="CSS3" />
        </ListItem>
        <ListItem className="skill-item">
          <ListItemText primary="JavaScript" />
        </ListItem>
        {/* Add more skills as needed */}
      </List>
    </Container>
  );
};

export default FrontendSkills;
