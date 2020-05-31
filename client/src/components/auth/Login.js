import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if(isAuthenticated) {
      props.history.push('/');
    }

    if(error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user;

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    if(email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger')
    } else {
      login({
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
            <h4>Account <span className="text-primary">Login</span></h4>
          </div>

          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" name="password" value={password} onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit" block>Login</Button>
        </Form>
      </Col>
      <Col lg={2}></Col>
    </Row>
  )
}

export default Login
