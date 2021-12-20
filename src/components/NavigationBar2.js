import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, FormControl, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { useFirestoreDocData, useFirestore, useFirestoreCollectionData, useAuth, useUser } from 'reactfire';

const Styles = styled.div`
  .navbar {
    background-color: #87bdd8;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: black;
    &:hover {
      color: black;
    }
  }
  .navbar-brand {
    font-weight: bold;
  } 
  #icono{
    width : 20px;
  }
`;

export function NavigationBar2() {

  return (
    <Styles>
      <Navbar collapseOnSelect fixed='top' expand="lg">
        <img id="icono" src="imgs/icon-notes.png" />
        <Navbar.Brand>R-Notes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar nota"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <Nav className="ml-auto">
          </Nav>
          <Form inline>
            <Button variant="outline-success" href="/">Cerrar Sesión</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Styles >
  );
}