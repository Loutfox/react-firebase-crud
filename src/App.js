import React, { useState, useEffect } from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import database from "./firebase";

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactToUpdate, setContactToUpdate] = useState(null);

  useEffect(() => {
    database.ref("contacts/").on("value", function (snapshot) {
      setContacts([]);
      snapshot.forEach(function (childSnapshot) {
        var contact = {
          ...childSnapshot.val(),
          key: childSnapshot.key,
        };
        setContacts((prevState) => [...prevState, contact]);
      });
    });
  }, []);

  const addContact = (contact) => {
    database
      .ref()
      .child("contacts")
      .push(contact, (error) => {
        if (error) {
          alert("Contact registration failed");
        } else {
          alert("Contact registered successfully");
        }
      });
  };

  const editContact = (contact) => {
    database.ref("contacts/" + contact.key).set(contact, (err) => {
      if (err) {
        alert("Modification failed");
      } else {
        alert("Modification succeeded");
      }
    });
  };

  const deleteContact = (key) => {
    database.ref("contacts/" + key).remove();
  };

  const handleUpdate = (index) => {
    setContactToUpdate(contacts[index]);
  };

  const resetForm = () => {
    setContactToUpdate(null);
  };

  return (
    <Container>
      <Row>
        <h1 className="contact-title">Contact Register</h1>
      </Row>
      <Row>
        <Col md={5}>
          <ContactForm
            addContact={addContact}
            editContact={editContact}
            contactToUpdate={contactToUpdate}
            resetForm={resetForm}
          />
        </Col>
        <Col md={7}>
          <ContactList
            contacts={contacts}
            handleUpdate={handleUpdate}
            deleteContact={deleteContact}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
