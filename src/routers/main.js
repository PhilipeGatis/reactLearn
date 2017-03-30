import { Login } from '../pages/login.jsx';
import { Principal } from '../pages/principal.jsx';

export const PrincipalState = {
  name: 'Principal',
  redirectTo: 'home',
  component: Principal,
  data: { requiresAuth: true },
};

export const LoginState = {
  name: 'Login',
  url: '/login',
  component: Login,
  resolve: { returnTo },
};

function returnTo($transition$) {
  if ($transition$.to().name === 'Login') {
    return null;
  }
  let redirectedFrom = $transition$.previous();

  if (redirectedFrom != null) {
    while (redirectedFrom.previous()) {
      redirectedFrom = redirectedFrom.previous();
    }

    return { state: redirectedFrom.to(), params: redirectedFrom.params('to') };
  }

  const fromState = $transition$.from();
  const fromParams = $transition$.params('from');

  if (fromState.name !== '') {
    return { state: fromState, params: fromParams };
  }

  return { state: 'home' };
}
