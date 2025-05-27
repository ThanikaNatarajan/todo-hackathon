import React, { useState, useEffect } from "react";
import axios from "axios";

function CalendarView({ onDateSelect }) {
  const [selectedDate, setSelectedDate] = useState("");

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
    onDateSelect(e.target.value);
  };

  return (
    <div>
      <h4>Calendar</h4>
      <input type="date" value={selectedDate} onChange={handleChange} />
    </div>
  );
}

export default CalendarView;