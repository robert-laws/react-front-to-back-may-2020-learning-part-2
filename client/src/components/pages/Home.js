import React from 'react'
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';
import ContactFilter from '../contacts/ContactFilter';

import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col>
            <h3>Contact Form</h3>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactFilter />
            <hr/>
            <Contacts />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
