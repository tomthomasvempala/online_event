import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      navigate("/admintable");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div style={{ width: "50vw" }}>
        <Form onSubmit={handleLogin}>
          <Form.Group as={Row} controlId="formBasicUsername">
            <Form.Label column sm={2}>
              Username 
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formBasicPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Col>
          </Form.Group>
          <p style={{'font-size':12}}>(both username and password is admin)</p>
          {error && <p className="text-danger">{error}</p>}

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
