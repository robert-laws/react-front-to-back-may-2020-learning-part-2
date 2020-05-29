import React from 'react';
import PropTypes from 'prop-types'
import { Card, Badge, Button } from 'react-bootstrap';
import basicContact2 from '../../images/basic-contact-v2.jpg';
import { EnvelopeOpenFill, Phone } from 'react-bootstrap-icons';

const makeCapital = word => {
  let words = word.split(' ');
  let newWord = '';

  if(words.length > 1) {
    for (var value of words) {
      newWord += (capitalizeWord(value) + ' ')
    }
  } else {
    newWord = capitalizeWord(word)
  }

  return newWord;
}

const capitalizeWord = word => {
  let myWord = word.charAt(0).toUpperCase() + word.slice(1)
  return myWord;
}

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact

  return (
    <>
      <Card style={{ width: '18rem' }} className="my-3">
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
          <Button variant="dark">Edit</Button>{' '}
          <Button variant="danger">Delete</Button>{' '}
        </Card.Body>
      </Card>
    </>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default ContactItem
