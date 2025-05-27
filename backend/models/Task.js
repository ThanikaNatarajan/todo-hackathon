const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  label: { type: mongoose.Schema.Types.ObjectId, ref: 'Label' },
  dueDate: { type: Date },
  priority: { type: String, enum: ['high', 'low'], default: 'low' }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);