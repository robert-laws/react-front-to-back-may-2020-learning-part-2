import React from 'react'
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';

import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col>
            <h3>Contact Form</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <Contacts />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
