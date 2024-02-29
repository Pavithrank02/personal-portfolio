// src/components/Header.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { TemplateProvider, useTemplate } from './template/TemplateProvider';
const Header = () => {
  // const { selectedAnimation, selectedFont } = useTemplate();

  // const containerStyle = {
  //   animation: selectedAnimation,
  //   fontFamily: selectedFont
  // };
  return (
    <TemplateProvider>
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
            <Button color="inherit" component={NavLink} to="/" exact sx={{ fontSize: '1rem', mx: 3 }} activeClassName="active-link">
              Home
            </Button>
            <Button color="inherit" component={NavLink} to="/projects" sx={{ fontSize: '1rem', mx: 3 }} activeClassName="active-link">
              Projects
            </Button>
            <Button color="inherit" component={NavLink} to="/about" sx={{ fontSize: '1rem', mx: 3 }} activeClassName="active-link">
              About
            </Button>
            <Button color="inherit" component={NavLink} to="/contact" sx={{ fontSize: '1rem', mx: 3 }} activeClassName="active-link">
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
    </TemplateProvider>
  );
};

export default Header;
