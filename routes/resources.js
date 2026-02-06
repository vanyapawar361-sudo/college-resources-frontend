const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Resource.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Resource not found" });
    }

    res.status(200).json({ message: "Resource deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all resources
router.get('/', async (req, res) => {
    try {
        const resources = await Resource.find();
        res.json(resources);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a new resource (optional for testing)
router.post('/', async (req, res) => {
    try {
        const resource = await Resource.create(req.body);
        res.json(resource);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;

