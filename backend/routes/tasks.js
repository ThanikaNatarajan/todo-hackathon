const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
});

// Create a new task
router.post('/', async (req, res) => {
  const { title } = req.body;
  const task = new Task({ title });
  await task.save();
  res.status(201).json(task);
});

// Update a task (mark as completed)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const task = await Task.findByIdAndUpdate(id, { completed }, { new: true });
  res.json(task);
});

// Delete a task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ success: true });
});

module.exports = router;