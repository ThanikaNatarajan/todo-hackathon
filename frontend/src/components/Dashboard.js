import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button, ListGroup, Form, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import TaskForm from "./TaskForm";

const API_URL = "http://localhost:5000/api/tasks";

function Dashboard() {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch all tasks
  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add or edit task
  const handleSaveTask = async (task) => {
    if (editingTask) {
      // Edit
      const res = await axios.put(`${API_URL}/${editingTask._id}`, { ...task });
      setTasks(tasks.map(t => t._id === editingTask._id ? res.data : t));
      setEditingTask(null);
    } else {
      // Add
      const res = await axios.post(API_URL, task);
      setTasks([...tasks, res.data]);
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  // Mark complete
  const handleComplete = async (id, completed) => {
    const res = await axios.put(`${API_URL}/${id}`, { completed });
    setTasks(tasks.map(t => t._id === id ? res.data : t));
  };

  // Edit task
  const handleEdit = (task) => setEditingTask(task);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Todo Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item className="me-2">{user?.displayName}</Nav.Item>
              <Button variant="outline-danger" onClick={logout}>Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Row>
          <Col md={4}>
            <TaskForm onSave={handleSaveTask} editingTask={editingTask} setEditingTask={setEditingTask} />
          </Col>
          <Col md={8}>
            <h4 className="mb-3">Your Tasks</h4>
            <ListGroup>
              {tasks.map(task => (
                <ListGroup.Item key={task._id} className="d-flex justify-content-between align-items-center">
                  <span style={{ textDecoration: task.completed ? "line-through" : "" }}>
                    {task.title}
                  </span>
                  <div>
                    <Button size="sm" variant={task.completed ? "secondary" : "success"}
                      className="me-2"
                      onClick={() => handleComplete(task._id, !task.completed)}>
                      {task.completed ? "Undo" : "Complete"}
                    </Button>
                    <Button size="sm" variant="info" className="me-2" onClick={() => handleEdit(task)}>
                      Edit
                    </Button>
                    <Button size="sm" variant="danger" onClick={() => handleDelete(task._id)}>
                      Delete
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;