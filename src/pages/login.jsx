import React, { Component, PropTypes } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

import { authService } from '../services/auth';
import { config } from '../services/config';

import { LoginForm } from '../components/login-form/component';

export class Login extends Component {
  static propTypes = {
    resolves: PropTypes.shape({
      returnTo: PropTypes.shape({ state: PropTypes.object, params: PropTypes.object }),
    }),
  }

  constructor(props) {
    super(props);
    this.usernames = authService.usernames;
    this.state = {
      username: config.emailAddress || '',
      password: 'password',
      authenticating: false,
      errorMessage: '',
    };
  }

  handleChangeCredentials = (credentials) => {
    this.setState(credentials);
  }

  handleLogin = (credentials) => {
    const { transition } = this.props;
    const done = () => this.setState({ authenticating: false });
    const showError = errorMessage => this.setState({ errorMessage });
    const returnToOriginalState = () => {
      this.setState({ authenticating: true });
      transition
        .router
        .stateService
        .go('Home', null, {
          reload: true,
        });
    };

    authService
      .authenticate(credentials.username, credentials.password)
      .then(returnToOriginalState)
      .catch((error) => {
        done();
        showError(error);
      });
  }

  render() {
    const { errorMessage, authenticating, username, password } = this.state;
    return (
      <div>
        <Grid >
          <Row>
            <Col xs={12} mdPush={3} md={6}>
              <LoginForm
                usernameOptions={this.usernames}
                username={username}
                password={password}
                error={errorMessage}
                loading={authenticating}
                onChangeValues={this.handleChangeCredentials}
                onSubmit={this.handleLogin}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
