import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, current, clearCurrentContact } = contactContext;

  useEffect(() => {
    if(current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      })
    }
  }, [contactContext, current])

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const handleChange = event => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value
    })
  }

  const resetSetContact = () => {
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    if(current === null) {
      addContact(contact);
      resetSetContact();
    } else {
      updateContact(contact);
      clearAll();
    }
  }

  const clearAll = () => {
    clearCurrentContact();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h4>{current ? 'Edit Contact' : 'Add Contact'}</h4>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={name} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Phone #</Form.Label>
        <Form.Control type="text" placeholder="Enter phone" name="phone" value={phone} onChange={handleChange} />
      </Form.Group>

      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={3}>
            Contact Type
          </Form.Label>
          <Col sm={9}>
            <Form.Check
              type="radio"
              label="personal"
              name="type"
              value="personal"
              id="typePersonal"
              checked={type === 'personal'}
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              label="professional"
              name="type"
              value="professional"
              id="typeProfessional"
              checked={type === 'professional'}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Button variant="primary" type="submit" block>
        {current ? 'Update Contact' : 'Add Contact'}
      </Button>
      {current && <Button variant="secondary" type="button" onClick={clearAll} block>Clear</Button>}
    </Form>
  )
}

export default ContactForm
