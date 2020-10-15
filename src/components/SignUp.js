import React, { useState } from "react";
import { Container, Form, InputGroup, Col, Button } from 'react-bootstrap';

const SignUp = (props) => {
  const initialValues = {
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = e => {
      setValues({
          ...values,
          [e.target.name] : e.target.value,
      })
  }

  const handleSubmit = e => {
      e.preventDefault();
      if(values.password !== values.confirmPassword){
          alert("The two passwords doesn't matches !");
          resetForm();
      }
      else {
          props.Signup(values);
      }
  }

  const resetForm = () => {
      setValues(initialValues)
  }

  return (
    <Container className="form-container">
      <Form onSubmit={handleSubmit} >
        <h1 className="text-primary m-4">Sign Up</h1>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className="fas fa-user"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            required
          />
        </InputGroup>
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
            required
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
            required
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
            placeholder="Confirm password..."
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <Form.Row>
          <Col>
            <Button type="submit" block>
              Log In
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  );
};

export default SignUp;
