import { AuthService } from '../services/auth';
import { setErrorMessage, forwardTo, anyElementsEmpty } from './app';
import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST } from '../contants/app';
import * as errorMessages from '../contants/erro-messages';

export const setAuthState = newState => ({ type: SET_AUTH, newState });

export const changeForm = newState => ({ type: CHANGE_FORM, newState });

export const sendingRequest = sending => ({ type: SENDING_REQUEST, sending });

export const login = (username, password) => (dispatch) => {
    // Show the loading indicator, hide the last error
  dispatch(sendingRequest(true));
    // If no username or password was specified, throw a field-missing error
  if (anyElementsEmpty({ username, password })) {
    dispatch(setErrorMessage(errorMessages.FIELD_MISSING));
    dispatch(sendingRequest(false));
    return;
  }
      // Use auth.js to fake a request
  AuthService.login(username, password, (success, err) => {
        // When the request is finished, hide the loading indicator
    dispatch(sendingRequest(false));
    dispatch(setAuthState(success));
    if (success === true) {
            // If the login worked, forward the user to the dashboard and clear the form
      forwardTo('Home');
      dispatch(changeForm({
        username: '',
        password: '',
      }));
    } else {
      switch (err.type) {
        case 'user-doesnt-exist':
          dispatch(setErrorMessage(errorMessages.USER_NOT_FOUND));
          return;
        case 'password-wrong':
          dispatch(setErrorMessage(errorMessages.WRONG_PASSWORD));
          return;
        default:
          dispatch(setErrorMessage(errorMessages.GENERAL_ERROR));

      }
    }
  });
};

export const logout = () => (dispatch) => {
  dispatch(sendingRequest(true));
  AuthService.logout((success, err) => {
    if (success === true) {
      dispatch(sendingRequest(false));
      dispatch(setAuthState(false));
      forwardTo('Login');
    } else {
      dispatch(setErrorMessage(errorMessages.GENERAL_ERROR));
    }
  });
};

