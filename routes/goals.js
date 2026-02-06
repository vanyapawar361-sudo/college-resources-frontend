const express = require('express');
const Goal = require('../models/Goal');

const router = express.Router();

// Create a goal
router.post('/', async (req, res) => {
  try {
    const goal = await Goal.create(req.body);
    res.json(goal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all goals (populate resources)
router.get('/', async (req, res) => {
  const goals = await Goal.find().populate('resources');
  res.json(goals);
});
// Update a goal by ID
router.put('/:id', async (req, res) => {
  try {
    const goal = await Goal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!goal) {
      return res.status(404).json({ error: 'Goal not found' });
    }

    res.json(goal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a goal by ID
router.delete('/:id', async (req, res) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);

    if (!goal) {
      return res.status(404).json({ error: 'Goal not found' });
    }

    res.json({ message: 'Goal deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
