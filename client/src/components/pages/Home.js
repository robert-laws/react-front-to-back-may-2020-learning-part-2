import React from 'react'
import Contacts from '../contacts/Contacts';
import ContactItem from '../contacts/ContactItem';

import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col>
            <h3>Contact Form</h3>
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
