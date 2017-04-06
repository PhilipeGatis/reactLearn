import React, { PropTypes } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { FieldGroup } from '../field-group/component';
import { changeForm } from '../../actions/login';

const assign = Object.assign;

export class LoginForm extends React.Component {
  // onSubmit call the passed onSubmit function
  onSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.props.data.username, this.props.data.password);
  }

  // Change the username in the app state
  changeUsername(evt) {
    let newState = this.mergeWithCurrentState({
      username: evt.target.value,
    });

    this.emitChange(newState);
  }

  // Change the password in the app state
  changePassword(evt) {
    let newState = this.mergeWithCurrentState({
      password: evt.target.value,
    });

    this.emitChange(newState);
  }

  // Merges the current state with a change
  mergeWithCurrentState(change) {
    return assign(this.props.data, change);
  }

  // Emits a change of the form state to the application state
  emitChange(newState) {
    this.props.dispatch(changeForm(newState));
  }

  render() {
    return (
      <Form horizontal onSubmit={this.onSubmit.bind(this)}>
        <FieldGroup
          label="Usuario:"
          type="text"
          name="user"
          value={this.props.data.username}
          onChange={this.changeUsername.bind(this)}
        />
        <FieldGroup
          label="Password:"
          type="password"
          name="password"
          value={this.props.data.password}
          onChange={this.changePassword.bind(this)}
        />
        {this.props.errorMessage ?
          <Alert bsStyle="danger">
            {this.props.errorMessage}
          </Alert> : null
        }
        <div>
          <Button
            type="submit"
            disabled={this.props.currentlySending}
          >
            {this.props.currentlySending ? <i className="fa fa-spin fa-spinner" /> : null} <span>Entrar</span>
          </Button>
        </div>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
