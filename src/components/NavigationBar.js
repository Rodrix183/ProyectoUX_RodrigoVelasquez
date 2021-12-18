import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, FormControl, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { useFirestoreDocData, useFirestore, useFirestoreCollectionData, useAuth, useUser} from 'reactfire';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect fixed='top' expand="lg">
      <Navbar.Brand>Apuntes app</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        </Nav> 
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)