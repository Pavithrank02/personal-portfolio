// src/components/Header.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}>
        {/* Logo and Name */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* Add your logo or icon here */}
            <span role="img" aria-label="logo">🚀</span>
          </IconButton>
          <Typography variant="h5" component="div" sx={{ display: { xs: 'h6', md: 'block' } }}>
            Pavithran K
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/" sx={{ display: { xs: 'none', md: 'block' }, fontSize: '1rem', mx: 3 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/projects" sx={{ display: { xs: 'none', md: 'block' }, fontSize: '1rem', mx: 3 }}>
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ display: { xs: 'none', md: 'block' }, fontSize: '1rem', mx: 3 }}>
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ display: { xs: 'none', md: 'block' }, fontSize: '1rem', mx: 3 }}>
            Contact
          </Button>
        </Box>

        {/* Responsive Menu Icon (for smaller screens) */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {/* Menu Icon */}
          <span role="img" aria-label="menu">☰</span>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
