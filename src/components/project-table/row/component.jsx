import React, { PropTypes } from 'react';
import Moment from 'react-moment';
import { UISref } from 'ui-router-react';

export const Project = ({ project }) => (
  <UISref to={'ProjectEdit'} params={{ id: project.id }}>
    <tr>
      <td>
        {project.id}
      </td>
      <td>
        {project.name}
      </td>
      <td>{project.version}</td>
      <td><Moment locale="pt-br">{project.lastModified}</Moment></td>
    </tr>
  </UISref>
);

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    lastModified: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};
