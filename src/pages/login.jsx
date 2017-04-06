import React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import LoginContainer from '../containers/login/container';

export const Login = () => (
  <div>
    <Grid >
      <Row>
        <Col xs={12} mdPush={3} md={6}>
          <LoginContainer />
        </Col>
      </Row>
    </Grid>
  </div>
);

