import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import fire from "../firebase";

function Contacts(props) {
  const [contacts, setContacts] = useState([]);
  const [contactToUpdate, setContactToUpdate] = useState(null);

  useEffect(() => {
    fire.database().ref("contacts/").on("value", function (snapshot) {
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
    fire.database()
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
    fire.database().ref("contacts/" + contact.key).set(contact, (err) => {
      if (err) {
        alert("Modification failed");
      } else {
        alert("Modification succeeded");
      }
    });
  };

  const deleteContact = (key) => {
    fire.database().ref("contacts/" + key).remove();
  };

  const handleUpdate = (index) => {
    setContactToUpdate(contacts[index]);
  };

  const resetForm = () => {
    setContactToUpdate(null);
  };

  return (
    <Container style={{position: "relative"}}>
      <Button variant="danger" className="signout-btn" onClick={props.signOut}><i className="fas fa-power-off"></i> Sign Out</Button>
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

export default Contacts;
