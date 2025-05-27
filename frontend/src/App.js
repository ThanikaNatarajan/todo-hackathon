import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import CalendarView from "./components/CalendarView";

function App() {
  const [tasks, setTasks] = useState([]);
  const [labels, setLabels] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const fetchTasks = async (query={}) => {
    let url = "http://localhost:5000/api/tasks";
    const params = new URLSearchParams(query).toString();
    if (params) url += `?${params}`;
    const res = await axios.get(url);
    setTasks(res.data);
  };

  const fetchLabels = async () => {
    const res = await axios.get("http://localhost:5000/api/labels");
    setLabels(res.data);
  };

  useEffect(() => { fetchTasks(); fetchLabels(); }, []);

  const handleSaveTask = async (task) => {
    if (editingTask) {
      await axios.put(`http://localhost:5000/api/tasks/${editingTask._id}`, task);
    } else {
      await axios.post("http://localhost:5000/api/tasks", task);
    }
    fetchTasks();
    setEditingTask(null);
  };

  const handleComplete = async (id, completed) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, { completed });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  const handleLabelSelect = (label) => {
    fetchTasks({ label: label._id });
  };

  const handleCalendarClick = () => setShowCalendar(true);
  const handleDateSelect = (date) => fetchTasks({ date });

  return (
    <div className="app">
      <Sidebar onLabelSelect={handleLabelSelect} onCalendarClick={handleCalendarClick} />
      <TaskForm onSave={handleSaveTask} editingTask={editingTask} labels={labels} />
      <TaskList tasks={tasks} onEdit={setEditingTask} onComplete={handleComplete} onDelete={handleDelete} />
      {showCalendar && <CalendarView onDateSelect={handleDateSelect} />}
    </div>
  );
}

export default App;