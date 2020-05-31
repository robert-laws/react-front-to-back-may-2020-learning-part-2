import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { CardList } from 'react-bootstrap-icons';
import AuthContext from '../../context/auth/authContext';
import { ArrowRightSquareFill } from 'react-bootstrap-icons';

const NavigationBar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const handleLogout = () => {
    logout();
  }

  const authLinks = (
    <Fragment>
      <Navbar.Text>
        { user && `| Signed in as: ${user.name}`}
      </Navbar.Text>
        <Nav.Link onClick={handleLogout}><ArrowRightSquareFill /> Logout</Nav.Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <LinkContainer to='/register'>
        <Nav.Link>Register</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/login'>
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
    </Fragment>
  )

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
          <LinkContainer to="/">
            <Navbar.Brand>{icon} {title}</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              { isAuthenticated ? authLinks : guestLinks }
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object
}

NavigationBar.defaultProps = {
  title: 'Contact Keeper',
  icon: <CardList size={26} />
}

export default NavigationBar;
