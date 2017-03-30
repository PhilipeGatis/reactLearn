import React from 'react';
import { Navbar, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

export const NavBar = () => (
  <Navbar inverse fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">SmartComposer</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavDropdown eventKey={3} title="Administrador" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Profile</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Sair</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
