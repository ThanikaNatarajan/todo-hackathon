import React from "react";

function TaskList({ tasks, onEdit, onComplete, onDelete }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id} style={{
          color: task.priority === "high" ? "red" : "green"
        }}>
          <span>{task.title}</span>
          {task.label && <span> [{task.label.name}]</span>}
          {task.dueDate && <span> (Due: {task.dueDate.substring(0,10)})</span>}
          <button onClick={() => onComplete(task._id, !task.completed)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;