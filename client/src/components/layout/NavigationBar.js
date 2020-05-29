import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { CardList } from 'react-bootstrap-icons';

const NavigationBar = ({ title, icon }) => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
          <LinkContainer to="/">
            <Navbar.Brand>{icon} {title}</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType
}

NavigationBar.defaultProps = {
  title: 'Contact Keeper',
  icon: <CardList size={26} />
}

export default NavigationBar;
