const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks, optionally filter by label or dueDate
router.get('/', async (req, res) => {
  const { label, date } = req.query;
  let filter = {};
  if (label) filter.label = label;
  if (date) {
    const start = new Date(date); start.setHours(0,0,0,0);
    const end = new Date(date); end.setHours(23,59,59,999);
    filter.dueDate = { $gte: start, $lte: end };
  }
  const tasks = await Task.find(filter).populate('label');
  res.json(tasks);
});

// Create a new task
router.post('/', async (req, res) => {
  const { title, label, dueDate, priority } = req.body;
  const task = new Task({ title, label, dueDate, priority });
  await task.save();
  res.status(201).json(await task.populate('label'));
});

// Update a task
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed, label, dueDate, priority } = req.body;
  const update = {};
  if (title !== undefined) update.title = title;
  if (completed !== undefined) update.completed = completed;
  if (label !== undefined) update.label = label;
  if (dueDate !== undefined) update.dueDate = dueDate;
  if (priority !== undefined) update.priority = priority;
  const task = await Task.findByIdAndUpdate(id, update, { new: true }).populate('label');
  res.json(task);
});

// Delete a task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ success: true });
});

module.exports = router;