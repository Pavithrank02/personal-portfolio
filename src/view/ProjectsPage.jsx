// src/pages/ProjectsPage.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { keyframes } from '@emotion/react';
import ProjectCard from '../components/ProjectCard'
import chatgpt from '../assets/images/Chatgpt.png'
import dashboard from '../assets/images/Dashboard.png'
import forkify from '../assets/images/Forkify Website.png'
import landing from '../assets/images/Landing Page.png'
import youtube from '../assets/images/Youtube.png'
import Netflix from '../assets/images/Netflix.png'
import { useTemplate } from '../components/template/TemplateProvider';

const cardStyle = {
  display: 'flex',
  flexDirection: "column",
  justifyContents: "center",
  alignItems: "center",
  height: '30%',
  width: '100%',

};
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const containerStyle = {
  animation: `${fadeIn} 1s ease-in-out`,
};

const ProjectsPage = () => {
  const { selectedAnimation, selectedFont } = useTemplate();
  // Your project data
  const projects = [
    {
      id: "forkify",
      img: forkify,
      name: "forkify website",
      stack: ["< JavaScript /> ", "< CSS3 />"],
      live: "https://forkify-pavi.netlify.app",
      source: "https://github.com/Pavithrank02/JS-contents/tree/main",
      description:
        "Forkify website will provide Recipe Details. Display detailed information about each recipe, including ingredients, preparation steps, cooking time, serving size, nutritional information, and user reviews, Provide options to integrate with popular email marketing services or CRM platforms",
    },
    {
      id: "chat",
      img: chatgpt,
      name: "Chat GPT Website",
      stack: ["< Bootstrap v5 />", "< React.js />"],
      live: "https://cgpt-website.netlify.app",
      source: "https://github.com/Pavithrank02/chat-gpt",
      description:
        "This challenge from frontendmentor tested my skills to create websites, a common pattern on larger sites. It also has some nice basic layout challenge. Use the API integration to handle chat interactions. When the user sends a message, make an API request to send their input to the ChatGPT API. Receive the response and display it in the chat interface",
    },
    {
      id: "gpt",
      img: Netflix,
      name: "Netflix_GPT Website",
      stack: ["< React.js />, ", " < TailwindCSS />", "< Redux />", "< RestAPI />"],
      live: "https://netflix-gpt-website.netlify.app/",
      source: "https://github.com/Pavithrank02/netflix_gpt",
      description:
        "This project aims to seamlessly integrate ChatGPT into the Netflix platform to enhance user engagement, provide personalized content recommendations, and offer a conversational interface for users to interact with Netflix services Provide options to integrate with popular email marketing services or CRM platforms",


    },

    {
      id: "Dashboard",
      img: dashboard,
      name: "Worker Dashboard",
      stack: ["< React.js />", "< Material Ui />", "< RestAPI />"],
      live: "https://workerdashboard.netlify.app",
      source: "https://github.com/Pavithrank02/prj-dashboard",
      description:
        "Multi-page space dashboard provides relevent information for users. It's a Figma design conversion to react. Goal was to get it looking as close to the design as possible.Include a form builder tool that allows users to create customized forms to collect user data, such as email addresses or feedback. Provide options to integrate with popular email marketing services or CRM platforms",
    },

    {
      id: "landing",
      img: landing,
      name: "Landing Page",
      stack: ["< ReactJs />", "< Material UI />", "< JavaScript />"],
      live: "https://pavi-react-landing-page.netlify.app",
      source: "https://github.com/Pavithrank02/landing_page",
      description:
        "Customizable Templates: Provide a variety of professionally designed templates for users to choose from. These templates can serve as a starting point for creating their landing pages. Provide options to integrate with popular email marketing services or CRM platforms",
    },

    {
      id: "youtube",
      img: youtube,
      name: "Youtube Clone",
      stack: ["< Reactjs />", "< tailwind CSS />", "< RESTAPI />"],
      live: "https://react-youtube-prj.netlify.app",
      source: "https://github.com/Pavithrank02/react-youtube",
      description:
        "Begin by setting up a new React application using a tool like Create React App. This will provide you with the basic project structure and configuration. Use a routing library like React Router to handle navigation within your YouTube clone. Define routes for different pages, such as the home page, video page, user profile, and search results",
    },

  ];

  const InprogressProjectsData = [

    {
      id: "youtube",
      img: youtube,
      name: "Youtube Clone",
      stack: ["< Reactjs />", "< tailwind CSS />", "< RESTAPI />"],
      live: "https://react-youtube-prj.netlify.app",
      source: "https://github.com/Pavithrank02/react-youtube",
      description:
        "Begin by setting up a new React application using a tool like Create React App. This will provide you with the basic project structure and configuration. Use a routing library like React Router to handle navigation within your YouTube clone. Define routes for different pages, such as the home page, video page, user profile, and search results",
    },

    // Add more project objects as needed
  ];

  return (
    <Container sx={containerStyle} style={{ animation: selectedAnimation, fontFamily: selectedFont }}>
      <Typography variant="h2" align="center" gutterBottom>
        My Portfolio
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsPage;
