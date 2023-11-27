// src/components/ProjectCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  transition: 'transform 0.3s ease-in-out',
};

const mediaStyle = {
  paddingTop: '5.25%', // 16:9 aspect ratio (for the image)
  transition: 'transform 0.3s ease-in-out',
  
};

const hoverEffect = {
  transform: 'scale(1.05)',
};

const hoverEffectMedia = {
  transform: 'scale(1.1)',
};

const ProjectCard = ({ title, description, project }) => {
  console.log(project.img)
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = hoverEffect.transform;
    e.currentTarget.firstChild.style.transform = hoverEffectMedia.transform;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = '';
    e.currentTarget.firstChild.style.transform = '';
  };

  return (
    <Card
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        component="img"
        image={project.img}
        alt={title}
        style={mediaStyle}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        {/* Add more content as needed */}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
