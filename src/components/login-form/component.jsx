import React, { PropTypes } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { FieldGroup } from '../field-group/component';

export class LoginForm extends React.Component {
  static propTypes = {
    username: PropTypes.string,
    usernameOptions: PropTypes.arrayOf(PropTypes.string),
    password: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool,
    onChangeValues: PropTypes.func,
    onSubmit: PropTypes.func,
  }

  handleSubmit = () => {
    const { username, password } = this.props;
    this.props.onSubmit({ username, password });
  }

  handleChangeUsername = (event) => {
    this.props.onChangeValues({ username: event.target.value, password: this.props.password });
  }

  handleChangePassword = (event) => {
    this.props.onChangeValues({ username: this.props.username, password: event.target.value });
  }

  render() {
    const { username, usernameOptions, password, error, loading } = this.props;
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <ControlLabel>Username:</ControlLabel>
          <FormControl
            componentClass="select"
            name="username"
            id="username"
            value={username}
            onChange={this.handleChangeUsername}
          >
            <option value="" disabled />
            {usernameOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </FormControl>
        </FormGroup>
        <FieldGroup
          label="Password:"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChangePassword}
        />
        {error ? <HelpBlock>{error}</HelpBlock> : null}
        <div>
          <Button
            type="button"
            disabled={loading}
            onClick={this.handleSubmit}
          >
            {loading ? <i className="fa fa-spin fa-spinner" /> : null} <span>Log in</span>
          </Button>
        </div>
      </Form>
    );
  }
  }
