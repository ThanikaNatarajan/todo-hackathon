const express = require('express');
const router = express.Router();
const Label = require('../models/Label');

// Create a new label
router.post('/', async (req, res) => {
  try {
    const label = new Label({ name: req.body.name });
    await label.save();
    res.status(201).json(label);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all labels
router.get('/', async (req, res) => {
  const labels = await Label.find({});
  res.json(labels);
});

module.exports = router;