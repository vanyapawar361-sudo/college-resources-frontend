const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  progress: {
    type: Number,
    default: 0
  },
  resources: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Resource'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Goal', goalSchema);
