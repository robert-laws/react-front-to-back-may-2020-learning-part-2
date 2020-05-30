import React, { useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
          <TransitionGroup>
            {filtered !== null ? 
              filtered.map(contact => (
                <CSSTransition key={contact.id} timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              )) : 
              contacts.map(contact => (
                <CSSTransition key={contact.id} timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </CardColumns>
      </Row>
    </Container>
  )
}

export default Contacts
