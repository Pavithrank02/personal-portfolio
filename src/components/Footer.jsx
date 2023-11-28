// Footer.js

import React from 'react';
import { Typography, Container, List, ListItem, ListItemIcon, styled, Grid } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


const socialMediaLinks = [
  { icon: <GitHub sx={{ fontSize: 40, color: 'primary' }} />, url: 'https://github.com/yourusername' },
  { icon: <LinkedIn sx={{ fontSize: 40 }} />, url: 'https://linkedin.com/in/yourusername' },
  { icon: <Twitter sx={{ fontSize: 40 }} />, url: 'https://twitter.com/yourusername' },
  { icon: <Instagram sx={{ fontSize: 40 }} />, url: 'https://instagram.com/yourusername' },
];

const AnimatedListItemIcon = styled(ListItemIcon)({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

const footerStyle = {
  animation: `${fadeIn} 1s ease-in-out`,
  padding: '20px',
  marginTop: '20px',
  textAlign: 'center',
  borderTop: '1px solid #444',
};

const Footer = () => {
  return (
    <Container sx={footerStyle}>
      <List sx={{}}>
        {socialMediaLinks.map((item, index) => (
          <Grid sx={{ justifyContent: 'left', display: 'flex', flexDirection: 'row', }}>
            <ListItem key={index} >
              <Link href={item.url} target="_blank" rel="noopener noreferrer" color="inherit">
                <AnimatedListItemIcon >
                  {item.icon}
                </AnimatedListItemIcon>
              </Link>
            </ListItem>
          </Grid>
        ))}
      </List>
      <Typography variant="body2">
        © 2023 My Portfolio. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
