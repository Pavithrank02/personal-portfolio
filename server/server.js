const mongoose = require('mongoose');
const express = require('express');
const FormModel = require('./models/FormModel'); // Import your Mongoose model
const multer = require('multer');
const bodyParser = require('body-parser');
const PORT = 3001;
const app = express();
app.use(express.json());

// Replace the connection string and database name with your own values
const uri = 'mongodb://127.0.0.1:27017/Portfolio';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');

  // Define and use your Mongoose models and schemas here
  // Create a new user document
const newUser = new FormModel({
  name: "String",
  email: "String",
  description: "String",
  selectedOption: "String",
  skills: ["String"],
  git: "String",
  linkedin: "String",
  other: "String",
  projects: [
    {
      name: "String",
      description: "String",
      live: "String",
      source: "String",
      img: "String",
      stack: ["String"],
    },
  ],
});

// Save the document to the database
// newUser.save()
//   .then(() => {
//     console.log('User saved successfully');
//   })
//   .catch((err) => {
//     console.error('Error saving user:', err);
//   })
//   .finally(() => {
//     // Close the database connection
//     db.close();
//   });


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware to parse JSON
app.use(express.json());
// Handle form submission
app.post('/submitForm', upload.array('image', 1), async (req, res) => {
  try {
    const formFields = req.body;
    const image = req.files ? req.files[0] : null;

    // Create a new FormData instance with data from the request body
    const newUser = new FormData({
      ...formFields,
      projects: formFields.projects?.map((project) => ({
        ...project,
        img: image ? `data:image/png;base64,${image.buffer.toString('base64')}` : '',
      })),
    });

    // Save the data to MongoDB
    await newUser.save();

    res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
})



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

