const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
    // examples: Consulting, Tech, MBA, Govt Exams
  },
  type: {
    type: String,
    required: true
    // Video, Course, PDF, Website
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Resource', resourceSchema);
