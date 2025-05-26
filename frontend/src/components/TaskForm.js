import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";

function TaskForm({ onSave, editingTask, setEditingTask }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
    } else {
      setTitle("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({ title, completed: editingTask ? editingTask.completed : false });
    setTitle("");
    setEditingTask(null);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{editingTask ? "Edit Task" : "Add Task"}</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant={editingTask ? "info" : "primary"}>
            {editingTask ? "Update" : "Add"}
          </Button>
          {editingTask && (
            <Button variant="secondary" className="ms-2" onClick={() => setEditingTask(null)}>
              Cancel
            </Button>
          )}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TaskForm;