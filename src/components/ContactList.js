import React from "react";
import { Table } from "react-bootstrap";
const ContactList = (props) => {
  return (
    <>
      <h4 style={{ fontWeight: 700 }}>Contact List</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.contacts.map((contact, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{contact.fullName}</td>
                <td>{contact.mobile}</td>
                <td>{contact.email}</td>
                <td style={{display: "flex", justifyContent:"space-evenly", alignItems:"center"}}>
                  <i className="fas fa-edit text-primary" style={{cursor:"pointer", fontSize : "1.2rem"}} onClick={e => props.handleUpdate(index)} ></i>
                  <i className="fas fa-trash text-danger" style={{cursor:"pointer", fontSize : "1.2rem"}} onClick= { e => props.deleteContact(contact.key)}></i>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ContactList;
