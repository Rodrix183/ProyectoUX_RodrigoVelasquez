import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, FormControl, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { useFirestoreDocData, useFirestore, useFirestoreCollectionData, useAuth, useUser} from 'reactfire';

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
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect fixed='top' expand="lg">
      <Navbar.Brand>R-Notes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        </Nav> 
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)