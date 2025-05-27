import React, { useEffect, useState } from "react";
import axios from "axios";

function Sidebar({ onLabelSelect, onCalendarClick }) {
  const [labels, setLabels] = useState([]);
  const [newLabel, setNewLabel] = useState("");

  const fetchLabels = async () => {
    const res = await axios.get("http://localhost:5000/api/labels");
    setLabels(res.data);
  };

  useEffect(() => { fetchLabels(); }, []);

  const handleAddLabel = async (e) => {
    e.preventDefault();
    if (!newLabel.trim()) return;
    await axios.post("http://localhost:5000/api/labels", { name: newLabel });
    setNewLabel("");
    fetchLabels();
  };

  return (
    <div className="sidebar">
      <h4>Labels</h4>
      <ul>
        {labels.map(label => (
          <li key={label._id} onClick={() => onLabelSelect(label)}>{label.name}</li>
        ))}
      </ul>
      <form onSubmit={handleAddLabel}>
        <input
          value={newLabel}
          onChange={e => setNewLabel(e.target.value)}
          placeholder="Add label"
        />
        <button type="submit">+</button>
      </form>
      <button onClick={onCalendarClick}>📅 Calendar</button>
    </div>
  );
}

export default Sidebar;