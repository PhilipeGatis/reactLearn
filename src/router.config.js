import { UIRouterReact, servicesPlugin, pushStateLocationPlugin } from 'ui-router-react';
import { PrincipalState, LoginState } from './routers/main';
import { HomeState, ProjectEditState } from './routers/principal';

import { Auth } from './routers/hooks/auth';

export const router = new UIRouterReact();

router.plugin(servicesPlugin);
router.plugin(pushStateLocationPlugin);

const allStates = [
  PrincipalState,
  LoginState,
  HomeState,
  ProjectEditState,
];

allStates.forEach(state => router.stateRegistry.register(state));

router.urlRouter.otherwise('/home');
router.transitionService.onBefore(Auth.criteria, Auth.callback, { priority: 10 });
router.start();

export const $state = router.stateService;

