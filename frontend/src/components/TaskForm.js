import React, { useState, useEffect } from "react";
import axios from "axios";

function TaskForm({ onSave, editingTask, labels }) {
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setLabel(editingTask.label?._id || "");
      setDueDate(editingTask.dueDate ? editingTask.dueDate.substring(0,10) : "");
      setPriority(editingTask.priority || "low");
    } else {
      setTitle("");
      setLabel("");
      setDueDate("");
      setPriority("low");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({ title, label, dueDate, priority });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title" />
      <select value={label} onChange={e => setLabel(e.target.value)}>
        <option value="">Select label</option>
        {labels.map(l => <option value={l._id} key={l._id}>{l.name}</option>)}
      </select>
      <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="high">High Priority</option>
        <option value="low">Low Priority</option>
      </select>
      <button type="submit">{editingTask ? "Update" : "Add"}</button>
    </form>
  );
}

export default TaskForm;