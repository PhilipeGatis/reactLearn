import React from 'react';
import { Col } from 'react-bootstrap';
import { ProjectList } from '../../components/project-table/component';

const projects = [{ id: 1, name: 'Teste1', version: '1.0', lastModified: new Date() }];

export const ProjectContainer = ({ project }) => (
  <Col xs={12} md={12}>
    <ProjectList projects={projects} />
  </Col>
);
