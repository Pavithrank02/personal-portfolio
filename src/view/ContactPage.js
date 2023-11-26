// src/pages/ContactPage.js
import React from 'react';
import { Container, Box } from '@mui/material';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <Container>
      <Box mt={4}>
        <ContactForm />
      </Box>
    </Container>
  );
};

export default ContactPage;
