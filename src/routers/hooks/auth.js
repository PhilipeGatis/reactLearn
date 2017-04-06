import { store } from '../../store';

export const Auth = {
  criteria: {
    to: state => state.data && state.data.requiresAuth,
  },

  callback: (transition) => {
    const { UserLoged } = store.getState();

    const $state = transition.router.stateService;

    if (!UserLoged.loggedIn) {
      return $state.target('Login', undefined, { location: false });
    }

    return null;
  },
};
