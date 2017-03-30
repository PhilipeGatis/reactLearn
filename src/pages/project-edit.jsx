import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export class ProjectEdit extends Component {
  render() {
    return (
      <Row>
        <Col md={3}>
          <h4>Projeto: {this.props.resolves.projectId}</h4>
          <div>Arvore</div>
        </Col>
        <Col md={9}>
          <div>content</div>
        </Col>
      </Row>
    );
  }

}
