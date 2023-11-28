// src/pages/ContactPage.js
import React from 'react';
import { Container, Box } from '@mui/material';
import ContactForm from '../components/ContactForm';
import { useTemplate } from '../components/template/TemplateProvider';

const ContactPage = () => {
  const { selectedAnimation, selectedFont } = useTemplate();
  return (
    <Container style={{ animation: selectedAnimation, fontFamily: selectedFont }}>
      <Box mt={4}>
        <ContactForm />
      </Box>
    </Container>
  );
};

export default ContactPage;
