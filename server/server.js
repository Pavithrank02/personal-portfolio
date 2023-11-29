const mongoose = require('mongoose');
const express = require('express');
const FormModel = require('./models/FormModel');
const multer = require('multer');
const bodyParser = require('body-parser');
const PORT = 3001;
const app = express();
app.use(express.json());

const uri = 'mongodb://127.0.0.1:27017/Portfolio';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');

  const storage = multer.memoryStorage();
  const upload = multer({ storage: storage });

  // Middleware to parse JSON
  app.use(express.json());

  // Handle form submission
  app.post('/submitForm', upload.array('image', 1), async (req, res) => {
    console.log(res. req)
    try {
      const formFields = req.body;
      const image = req.files ? req.files[0] : null;
  
      // Ensure formFields.projects is an array
      const projectsArray = Array.isArray(formFields.projects) ? formFields.projects : [];
  
      const newFormData = new FormModel({
        ...formFields,
        projects: projectsArray.map((project) => ({
          ...project,
          img: image ? `data:image/png;base64,${image.buffer.toString('base64')}` : '',
        })),
      });
      console.log('Received form data:', formFields);
      await newFormData.save();
  
      res.status(200).json({ message: 'Form data saved successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  app.get('/api/data', async (req, res) => {
    try {
      // Use the model to find documents in the collection
      const documents = await FormModel.find({});
      res.json(documents);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
