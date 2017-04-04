import { authService } from '../../services/auth';

export const Auth = {
  criteria: {
    to: state => state.data && state.data.requiresAuth,
  },

  callback: (transition) => {
    const $state = transition.router.stateService;
    if (!authService.isAuthenticated()) {
      return $state.target('Login', undefined, { location: false });
    }
    return null;
  },
};
