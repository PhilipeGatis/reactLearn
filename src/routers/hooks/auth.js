import { AuthService } from '../../services/auth';

const authService = new AuthService();
export const Auth = {
  criteria: {
    to: state => state.data && state.data.requiresAuth,
  },

  callback: (transition) => {
    const $state = transition.router.stateService;
    if (!authService.isAuthenticated()) {
      return $state.target('login', undefined, { location: false });
    }
    return null;
  },
};
