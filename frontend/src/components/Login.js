import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, githubProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Container, Button, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  if (user) {
    navigate("/dashboard");
    return null;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: 350, padding: "2rem" }}>
        <Card.Title className="mb-4 text-center">Sign In</Card.Title>
        <Button className="mb-2 w-100" variant="danger" onClick={() => handleLogin(googleProvider)}>
          Sign in with Google
        </Button>
        <Button className="mb-2 w-100" style={{ background: "#333", border: 0 }} onClick={() => handleLogin(githubProvider)}>
          Sign in with GitHub
        </Button>
      </Card>
    </Container>
  );
}

export default Login;