import React, { useContext, useEffect } from 'react'
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

import { Row, Col } from 'react-bootstrap';

const Home = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, user } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Row className="mt-4">
        <Col>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <h3>Your Contacts</h3>
            <h4 className="text-primary">{user && `Hello, ${user.name}!`}</h4>
          </div>
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
    </>
  )
}

export default Home
