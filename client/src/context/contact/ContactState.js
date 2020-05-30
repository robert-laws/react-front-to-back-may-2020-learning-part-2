import React, { useReducer } from 'react';
import { uuid } from 'uuidv4';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        "id": 1,
        "name": "jim jupe",
        "email": "jim@mail.net",
        "phone": "222-222-2222",
        "type": "personal"
      },
      {
        "id": 2,
        "name": "kal kool",
        "email": "kal@net.com",
        "phone": "345-523-2556",
        "type": "professional"
      },
      {
        "id": 3,
        "name": "mel mope",
        "email": "mel@mail.com",
        "phone": "932-342-6821",
        "type": "personal"
      }
    ],
    current: null
  }

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  }

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }

  // Set Current Contact
  const setCurrentContact = contact => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }

  // Clear Current Contact
  const clearCurrentContact = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Update Contact


  // Filter Contact


  // Clear Filter


  return (
    <ContactContext.Provider value={{
      contacts: state.contacts,
      current: state.current,
      addContact,
      deleteContact,
      setCurrentContact,
      clearCurrentContact
    }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState;