import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
const ContactForm = (props) => {
  const initialValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };

  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    if (props.contactToUpdate) {
      setValues(props.contactToUpdate);
    } else {
      setValues(initialValues);
    }
  }, [props.contactToUpdate, initialValues]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.contactToUpdate) {
      props.editContact(values);
    } else {
      props.addContact(values);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        border: " 1px solid #c3c3c3",
        padding: "1rem",
        borderRadius: ".5rem",
      }}
    >
      <h4 style={{ fontWeight: 700 }}>Contact Form</h4>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Full name"
          onChange={handleChange}
          name="fullName"
          value={values.fullName}
          required
        />
      </Form.Group>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Control
              type="number"
              placeholder="Mobile"
              onChange={handleChange}
              name="mobile"
              value={values.mobile}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={values.email}
              required
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Address"
          onChange={handleChange}
          name="address"
          value={values.address}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {props.contactToUpdate ? "Update" : "Submit"}
      </Button>
      <Button
        variant="danger"
        style={{ marginLeft: ".5rem" }}
        type="button"
        onClick={props.resetForm}
      >
        Cancel
      </Button>
    </Form>
  );
};

export default ContactForm;
