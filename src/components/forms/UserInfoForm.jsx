import React, { useState } from 'react';
import {
  TextField, Button, createTheme, Grid, Select, MenuItem, FormControl, InputLabel, Switch, Typography, ThemeProvider, Stepper,
  Step,
  StepLabel,
  Chip,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(4),
  transition: 'background-color 0.3s, color 0.3s',
}));

const skillsList = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'Java',
  'C++',
  'Ruby',
  'PHP',
  'Other',
];

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const steps = ['Basic Info', 'Social Media and Skills Info', 'Project Info'];


const UserInfoForm = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    selectedOption: '',
    skills: [],
    git: "",
    linkedin: "",
    other: ""
  });
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: '',
      description: '',
      live: '',
      source: '',
      img: '',
      stack: [],
    },
  ]);

  const addProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: '',
      description: '',
      live: '',
      source: '',
      img: '',
      stack: [],
    };
    setProjects([...projects, newProject]);
  };

  const handleProjectChange = (e, projectId, field) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        if (field === 'image') {
          return { ...project, [field]: e.target.files[0] };
        }
        return { ...project, [field]: e.target.value };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  const [formErrors, setFormErrors] = useState({
    nameError: '',
    emailError: '',
    descriptionError: '',
    optionError: '',
  });

  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      selectedOption: e.target.value,
    });
  };

  const handleSkillsChange = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      skills: value,
    });
  };
  const validateForm = () => {
    let valid = true;
    const errors = {
      nameError: '',
      emailError: '',
      descriptionError: '',
      optionError: '',
    };

    if (!formData.name.trim()) {
      errors.nameError = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.emailError = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.emailError = 'Invalid email address';
      valid = false;
    }

    if (!formData.description.trim()) {
      errors.descriptionError = 'description is required';
      valid = false;
    }

    if (!formData.selectedOption) {
      errors.optionError = 'Please select an option';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData, projects);
      setFormData({
        name: '',
        email: '',
        description: '',
        selectedOption: '',
        skills: [],
        
      });
      setProjects([{
        id: projects.length + 1,
        name: '',
        description: '',
        live: '',
        source: '',
        img: '',
        stack: [],
      }])
      setFormErrors({
        nameError: '',
        emailError: '',
        descriptionError: '',
        optionError: '',
      });
      window.location.reload()
    }
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleNext = () => {
    if (validateForm()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const removeProject = (projectId) => {
    const updatedProjects = projects.filter((project) => project.id !== projectId);
    setProjects(updatedProjects);
  };


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <StyledContainer>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              User Info Form
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Switch checked={darkMode} onChange={handleThemeToggle} color="primary" />
            <Typography variant="body1" component="span">
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: '30px' }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          {activeStep === 0 && (
            <form onSubmit={handleSubmit}>
              {/* Page 1 content */}
              {/* ... */}
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    error={!!formErrors.nameError}
                    helperText={formErrors.nameError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    error={!!formErrors.emailError}
                    helperText={formErrors.emailError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    error={!!formErrors.descriptionError}
                    helperText={formErrors.descriptionError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined" error={!!formErrors.optionError}>
                    <InputLabel>Select Option</InputLabel>
                    <Select
                      value={formData.selectedOption}
                      onChange={handleSelectChange}
                      label="Select Option"
                      name="selectedOption"
                      required
                    >
                      <MenuItem value="">None</MenuItem>
                      <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
                      <MenuItem value="Backend Developer">Backend Developer</MenuItem>
                      <MenuItem value="software Developer">software Developer</MenuItem>
                      <MenuItem value="Project Manager">Project Manager</MenuItem>
                      <MenuItem value="Designer">Designer</MenuItem>

                    </Select>
                    {formErrors.optionError && (
                      <Typography variant="body2" style={{ color: 'red' }}>
                        {formErrors.optionError}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    Next
                  </Button>
                </Grid>
              </Grid>

            </form>
          )}
          {activeStep === 1 && (
            // <Paper elevation={3} sx={{ width: '100%', height: '100%' }}>
            <form >
              {/* Page 2 content */}
              {/* ... */}
              <Grid xs={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={12} sx={{ padding: '20px' }}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="skills-label">Skills</InputLabel>
                    <Select
                      labelId="skills-label"
                      id="skills"
                      multiple
                      value={formData.skills}
                      onChange={handleSkillsChange}
                      renderValue={(selected) => (
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} style={{ margin: 2 }} />
                          ))}
                        </div>
                      )}
                    >
                      {skillsList.map((skill) => (
                        <MenuItem key={skill} value={skill}>
                          {skill}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid xs={12} sx={{ padding: '20px' }}>
                  <TextField
                    label="Github Link"
                    variant="outlined"
                    fullWidth
                    name="git"
                    value={formData.git}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid xs={12} sx={{ padding: '20px' }}>
                  <TextField
                    label="LinkedIn"
                    variant="outlined"
                    fullWidth
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid xs={12} sx={{ padding: '20px' }}>
                  <TextField
                    label="other"
                    variant="outlined"
                    fullWidth
                    name="other"
                    value={formData.other}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={12} sx={{ padding: '20px' }} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                  <Button onClick={handleBack}>Back</Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    Next
                  </Button>
                </Grid>
              </Grid>
            </form>

            // </Paper>

          )}
          {activeStep === 2 && (
            <form>
              {/* Page 3 content */}
              <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h4" align="center" gutterBottom>
                  Project Form
                </Typography>
                {projects.map((project, index) => (
                  <Accordion key={project.id} defaultExpanded={index === projects.length - 1}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>Project {index + 1}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            label="Project Name"
                            variant="outlined"
                            fullWidth
                            value={project.name}
                            onChange={(e) => handleProjectChange(e, project.id, 'name')}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={project.description}
                            onChange={(e) => handleProjectChange(e, project.id, 'description')}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Live Link"
                            variant="outlined"
                            fullWidth
                            value={project.live}
                            onChange={(e) => handleProjectChange(e, project.id, 'live')}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Source Link"
                            variant="outlined"
                            fullWidth
                            value={project.source}
                            onChange={(e) => handleProjectChange(e, project.id, 'source')}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleProjectChange(e, project.id, 'image')}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            onClick={() => removeProject(project.id)}
                          >
                            Remove Project
                          </Button>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                ))}
                <Grid sx={{ marginTop: "10px" }}>
                  <Button variant="contained" color="primary" onClick={addProject}>
                    Add Project
                  </Button>
                </Grid>
                {/* Other form elements or buttons can be added here */}
                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: "10px" }}>
                  <Button onClick={handleBack}>Back</Button>
                  <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Grid>
              </Paper>
              {/* ... */}
            </form>
          )}
        </Grid>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default UserInfoForm;







