import React, { PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import { Project } from './row/component';

export const ProjectList = ({ projects }) => (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Versão</th>
        <th>Ultima Modificação</th>
      </tr>
    </thead>
    <tbody>
      {
          projects.map(project =>
            <Project
              key={project.id.toString()}
              project={project}
            />,
        )}
    </tbody>
  </Table>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    lastModified: PropTypes.instanceOf(Date).isRequired,
  }).isRequired).isRequired,
};
