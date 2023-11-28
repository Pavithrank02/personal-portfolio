// Project.js

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

const cardStyle = {
  margin: '20px',
  padding: '20px',
  border: '1px solid #ccc',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },

};

const ProjectCard = ({ title, description, img, link }) => {
  return (
    <Card sx={cardStyle} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '60vh', width: '20vw' }}>
      <Grid>
        <CardMedia component="img" alt={title} height="160" image={img} />
      </Grid>
      <CardContent>
        <Grid>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </Grid>
        <Grid>
          <Typography sx={{ textAlign: 'justify' }} variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Grid>
        <Grid>
          <Button sx={{ marginTop: '10px' }} variant="contained" href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
