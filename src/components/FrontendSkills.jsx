// src/components/FrontendSkills.js

import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Chip } from '@mui/material';
import './FrontendSkills.css'; // Import CSS file for styles

const FrontendSkills = () => {

  const skillsList = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB'];

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      <div>
        {skillsList.map((skill, index) => (
          <Chip key={index} label={skill} style={{ margin: '4px' }} />
        ))}
      </div>
    </Container>
  );
};

export default FrontendSkills;
