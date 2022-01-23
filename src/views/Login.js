import React from "react";
import { Container, Card, Col } from "shards-react";
import LoginForm from "../components/login/LoginForm";

const Login = () => (
  <Container fluid className="main-content-container px-4">
    <div className="login">
      <div className="login__content">
        <Col lg="8" className="mb-4">
          <Card small>
            <LoginForm />
          </Card>
        </Col>
      </div>
    </div>
  </Container>
);

export default Login;
