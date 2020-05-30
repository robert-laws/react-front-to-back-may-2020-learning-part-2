import React, { useContext } from 'react'
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import { Container, Row, CardColumns } from 'react-bootstrap';


const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Container>
      <Row>
        <CardColumns>
          {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </CardColumns>
      </Row>
    </Container>
  )
}

export default Contacts
