// src/pages/Login.js
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin: 1rem 0;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem;
  width: 100%;
  border-radius: 6px;
  font-size: 1rem;

  &:hover {
    background: #0056b3;
  }
`;
