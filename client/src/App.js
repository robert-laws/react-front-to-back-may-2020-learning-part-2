import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import NavigationBar from './components/layout/NavigationBar';
import { Container, Row, Col } from 'react-bootstrap';
import Home from './components/pages/Home';
import About from './components/pages/About';

import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <>
      <ContactState>
        <Router>
          <NavigationBar />
          <Container>
            <Row>
              <Col>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </ContactState>
    </>
  );
}

export default App;
