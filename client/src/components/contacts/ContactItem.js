import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext';

import { Card, Badge, Button } from 'react-bootstrap';
import { EnvelopeOpenFill, Phone } from 'react-bootstrap-icons';
import basicContact2 from '../../images/basic-contact-v2.jpg';

import { makeCapital } from '../../helpers/stringHelpers';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrentContact, clearCurrentContact } = contactContext;

  const { id, name, email, phone, type } = contact

  const handleDelete = () => {
    deleteContact(id);
    clearCurrentContact();
  }

  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={basicContact2}/>
      <Card.Body>
        <Card.Title>
          {makeCapital(name)}{' '}<Badge variant={type === 'professional' ? 'success' : 'primary'}>{makeCapital(type)}</Badge>
        </Card.Title>
        {email && (
          <Card.Text>
            <EnvelopeOpenFill /> {email}
          </Card.Text>
        )}
        {phone && (
          <Card.Text>
            <Phone /> {phone}
          </Card.Text>
        )}
        <Button variant="dark" onClick={() => setCurrentContact(contact)}>Edit</Button>{' '}
        <Button variant="danger" onClick={handleDelete}>Delete</Button>{' '}
      </Card.Body>
    </Card>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default ContactItem
