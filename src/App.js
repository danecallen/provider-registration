import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import RegistrationForm from "./registration/RegistrationForm";

function App() {
  return (
      <Container>
          <Row>
              <Container>
                  <h2>Provider Registration</h2>
              </Container>
          </Row>
          <Row>
              <RegistrationForm/>
          </Row>
      </Container>
  );
}

export default App;
