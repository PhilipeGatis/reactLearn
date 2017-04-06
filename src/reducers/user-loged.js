import { authService } from '../services/auth';
import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST, SET_ERROR_MESSAGE } from '../contants/app';

const initialState = {
  formState: {
    username: '',
    password: '',
  },
  currentlySending: false,
  loggedIn: authService.isAuthenticated(),
  errorMessage: '',
};

const assign = Object.assign;

export const UserLoged = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM:
      return assign({}, state, { formState: action.newState });
    case SET_AUTH:
      return assign({}, state, { loggedIn: action.newState });
    case SENDING_REQUEST:
      return assign({}, state, { currentlySending: action.sending });
    case SET_ERROR_MESSAGE:
      return assign({}, state, { errorMessage: action.message });
    default:
      return state;
  }
};
