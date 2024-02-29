// models/FormModel.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  // Define your document fields here
  name: String,
  email: String,
  description: String,
  selectedOption: String,
  skills: [String],
  git: String,
  linkedin: String,
  other: String,
  projects: [
    {
      name: String,
      description: String,
      live: String,
      source: String,
      img: String,
      stack: [String],
    },
  ],
});

const FormModel = mongoose.model('Forms', formSchema);

module.exports = FormModel;
