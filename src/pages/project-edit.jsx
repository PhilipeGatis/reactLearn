import React, { Component } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';

export class ProjectEdit extends Component {
  render() {
    return (
      <Row>
        <Col md={3}>
          <Panel header={`Projeto: ${this.props.resolves.projectId}`}>
            Panel content
          </Panel>
        </Col>
        <Col md={9}>
          <div>content</div>
        </Col>
      </Row>
    );
  }

}
