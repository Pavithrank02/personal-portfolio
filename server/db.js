// server.js

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
const port = 5000;

app.use(bodyParser.json());
const URL = process.env.REACT_APP_LINK

// Connect to MongoDB (replace 'your-database-url' with your actual MongoDB connection strings)
mongoose.connect("mongodb+srv://pavithran:9790436040@cluster1.oxk2vdh.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
// Define MongoDB schema and model for the form data
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  live: String,
  source: String,
  img: String,
});

const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  description: String,
  selectedOption: String,
  skills: [String],
  git: String,
  linkedin: String,
  other: String,
  projects: [projectSchema],
});

const FormData = mongoose.model('FormData', formDataSchema);
const newDocument = new FormData(FormData);

// Save the document to the database
newDocument.save((err, savedDocument) => {
  if (err) {
    console.error('Error saving document:', err);
  } else {
    console.log('Document saved successfully:', savedDocument);
  }
});

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware to parse JSON
app.use(express.json());

// Route to handle form submissions
app.post('/submit-form', upload.array('image', 1), async (req, res) => {
  try {
    const formFields = req.body;
    const image = req.files ? req.files[0] : null;

    // Create a new FormData instance with data from the request body
    const newFormData = new FormData({
      ...formFields,
      projects: formFields.projects?.map((project) => ({
        ...project,
        img: image ? `data:image/png;base64,${image.buffer.toString('base64')}` : '',
      })),
    });

    // Save the data to MongoDB
    await newFormData.save();

    res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
