import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginForm } from '../../components/login-form/component';
import { login } from '../../actions/login';

export class LoginContainer extends Component {

  login(username, password) {
    this.props.dispatch(login(username, password));
  }

  render() {
    const dispatch = this.props.dispatch;
    const { formState, currentlySending, errorMessage } = this.props.data.UserLoged;
    return (
      <LoginForm
        data={formState}
        dispatch={dispatch}
        currentlySending={currentlySending}
        errorMessage={errorMessage}
        onSubmit={this.login.bind(this)}
      />
    );
  }
}

function select(state) {
  return {
    data: state,
  };
}

export default connect(select)(LoginContainer);
