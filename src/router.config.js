import { PrincipalState, LoginState } from './routers/main';
import { HomeState, ProjectEditState } from './routers/principal';

import { Auth } from './routers/hooks/auth';

export const allStates = [
  PrincipalState,
  LoginState,
  HomeState,
  ProjectEditState,
];

export const configRouter = (router) => {
  router.urlRouter.otherwise('/home');
  router.transitionService.onBefore(Auth.criteria, Auth.callback, { priority: 10 });
};


