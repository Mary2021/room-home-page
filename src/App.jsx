import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './layouts/NavBar';
import Hero from './layouts/Hero';
import Main from './layouts/Main';
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <>
    <Container fluid className="App">
      <NavBar />
      <Hero />
      <Main />
    </Container>
    </>
  );
  
}

export default App;
