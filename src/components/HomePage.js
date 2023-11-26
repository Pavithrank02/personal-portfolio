// src/components/HomePage.js

import React from 'react';
import { Container, Typography, Button, List, ListItem,styled,  ListItemIcon, Link } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import UserInfoForm from './forms/UserInfoForm';

const HomePage = () => {
  // Styled ListItemIcon to add hover animation
const AnimatedListItemIcon = styled(ListItemIcon)({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '80vh',
   
  };

  const menuStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    width: '50px',
    minWidth: '80px',
    maxHeight: '30vh',
    marginTop: 170,
    marginLeft: '-23rem',
    marginRight: '15rem', 

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

  const nameStyle = {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  };

  const socialMediaLinks = [
    { icon: <GitHub sx={{ fontSize: 40,  color: 'primary' }}/>, url: 'https://github.com/yourusername' },
    { icon: <LinkedIn sx={{ fontSize: 40 }}/>, url: 'https://linkedin.com/in/yourusername' },
    { icon: <Twitter sx={{ fontSize: 40 }} />, url: 'https://twitter.com/yourusername' },
    { icon: <Instagram sx={{ fontSize: 40 }}/>, url: 'https://instagram.com/yourusername' },
  ];

  return (
    <Container maxWidth="md" style={containerStyle}>
      <div style={menuStyle}>
        <List>
          {socialMediaLinks.map((item, index) => (
            <ListItem key={index} sx={{ justifyContent: 'left' }}>
              <Link href={item.url} target="_blank" rel="noopener noreferrer" color="inherit">
              <AnimatedListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                  {item.icon}
                </AnimatedListItemIcon>
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
      <div style={contentStyle}>
        <Typography variant="h1" style={nameStyle}>
          Hi, I am Pavithran K
        </Typography>
        {/* Rest of your content */}
        <Typography variant="h3" gutterBottom>
          Frontend Developer
        </Typography>
        <Typography variant="body1" gutterBottom>
        Welcome to my portfolio! I specialize in frontend development and strive to create
        user-friendly and visually appealing web applications.        </Typography>
        <Button style={{fontSize: 'x-large', width: '15vw', height: "6vh", marginTop: '4vh'}} variant="contained" color="primary" component="a" href="/projects">
          Projects
        </Button>
      </div>
      <div>
        <UserInfoForm />
      </div>
    </Container>
  );
};

export default HomePage;
