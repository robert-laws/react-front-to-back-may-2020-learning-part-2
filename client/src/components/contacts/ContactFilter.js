import React, { useContext, useRef, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext';

import { Form } from 'react-bootstrap';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  
  const text = useRef('');

  useEffect(() => {
    if(filtered === null) {
      text.current.value = '';
    }
  })

  const handleChange = event => {
    if(text.current.value !== '') {
      filterContacts(event.target.value)
    } else {
      clearFilter();
    }
  }

  return (
    <Form>
      <h4>Filter Contacts</h4>
      <Form.Group controlId="formSearchText">
        <Form.Label>Filter Text</Form.Label>
        <Form.Control type="text" placeholder="Enter search text" ref={text} onChange={handleChange} />
        <Form.Text className="text-muted">
          filters on the name or email of a contact
        </Form.Text>
      </Form.Group>
    </Form>
  )
}

export default ContactFilter
