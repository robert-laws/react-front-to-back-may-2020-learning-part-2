import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if(isAuthenticated) {
      props.history.push('/');
    }

    if(error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordTwo: ''
  })

  const { name, email, password, passwordTwo } = user;

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    if(name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger')
    } else if(password !== passwordTwo) {
      setAlert('Passwords do not match', 'danger')
    } else {
      register({
        name,
        email,
        password
      })
    }
  }

  return (
    <Row className="mt-4">
      <Col lg={2}></Col>
      <Col>  
        <Form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h4>Account <span className="text-primary">Register</span></h4>
          </div>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" value={name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" name="password" value={password} onChange={handleChange} required minLength="6" />
          </Form.Group>

          <Form.Group controlId="formPasswordTwo">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" name="passwordTwo" value={passwordTwo} onChange={handleChange} required minLength="6" />
          </Form.Group>

          <Button variant="primary" type="submit" block>Register</Button>
        </Form>
      </Col>
      <Col lg={2}></Col>
    </Row>
  )
}

export default Register
