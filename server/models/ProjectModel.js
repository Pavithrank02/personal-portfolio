const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  id: { type: String, required: true },
  img: { type: String, required: true },
  name: { type: String, required: true },
  stack: [{ type: String, required: true }],
  live: { type: String, required: true },
  source: { type: String, required: true },
  description: { type: String, required: true },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
