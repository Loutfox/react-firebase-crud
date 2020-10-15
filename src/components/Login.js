import React, { useState } from "react";
import { Container, Form, InputGroup, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Login = (props) => {
  const initialValues = {
    username: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.LogIn(values);
  };
  return (
    <div>
      <Container className="form-container">
        <Form onSubmit={handleSubmit}>
          <h1 className="text-primary m-4">Login</h1>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i className="fas fa-user"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i className="fas fa-key"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="password"
              placeholder="Password..."
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </InputGroup>
          <Form.Row>
            <Col>
              <Button type="submit" block>
                Log In
              </Button>
            </Col>
            <Col>
              <NavLink to="/signup">
                <Button type="button" block>
                  Sign Up
                </Button>
              </NavLink>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
