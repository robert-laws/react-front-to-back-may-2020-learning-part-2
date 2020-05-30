import React, { useContext } from 'react'
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import { Container, Row, CardColumns } from 'react-bootstrap';


const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if(contacts.length === 0) {
    return <h4>Please add a contact</h4>
  }

  return (
    <Container>
      <Row>
        <h4>Contacts List</h4>
        <CardColumns>
          {filtered !== null ? 
            filtered.map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            )) : 
            contacts.map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            ))
          }
        </CardColumns>
      </Row>
    </Container>
  )
}

export default Contacts
