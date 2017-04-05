import React from 'react';
import { UISref } from 'ui-router-react';
import { Navbar, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import { authService } from '../../services/auth';

let $state = {};
export class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleSelect = this
      .handleSelect
      .bind(this);
    console.log($state);
  }

  handleSelect(eventKey) {
    event.preventDefault();
    const { transition } = this.props;
    switch (eventKey) {
      case 1.2:
        authService.logout();
        transition
          .transition
          .router
          .stateService
          .go('Login', null, {
            reload: true,
          });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Navbar inverse fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <UISref to="Home">
              <a>SmartComposer</a>
            </UISref>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight onSelect={this.handleSelect}>
            <NavDropdown eventKey={1} title="Administrador" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>Profile</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={1.2}>Sair</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}
