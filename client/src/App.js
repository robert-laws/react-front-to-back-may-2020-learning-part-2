import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import NavigationBar from './components/layout/NavigationBar';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './routing/PrivateRoute';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import setAuthToken from './utils/setAuthToken';
if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <>
      <AuthState>
        <ContactState>
          <AlertState>
            <Router>
              <NavigationBar />
              <Container>
                <Alerts />
                <Switch>
                  <PrivateRoute Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </Container>
            </Router>
          </AlertState>
        </ContactState>
      </AuthState>
    </>
  );
}

export default App;
