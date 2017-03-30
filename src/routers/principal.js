import { Home } from '../pages/home.jsx';
import { ProjectEdit } from '../pages/project-edit.jsx';

export const HomeState = {
  parent: 'Principal',
  name: 'Home',
  url: '/home',
  component: Home,
};

export const ProjectEditState = {
  parent: 'Principal',
  name: 'ProjectEdit',
  url: '/projectEdit/:id',
  component: ProjectEdit,
  params: {
    id: {
      type: 'int',
      value: null,
    },
  },
  resolve: [{
    token: 'projectId',
    deps: ['$transition$'],
    resolveFn: trans => trans.params().id,
  }],
};
