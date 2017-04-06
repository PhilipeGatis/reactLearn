import { SET_ERROR_MESSAGE } from '../contants/app';
import { $state } from '../router.config';

export function setErrorMessage(message) {
  return (dispatch) => {
    dispatch({ type: SET_ERROR_MESSAGE, message });

    setTimeout(() => {
      dispatch({ type: SET_ERROR_MESSAGE, message: '' });
    }, 3000);
  };
}

export function forwardTo(state) {
  console.log(`forwardTo(${state})`);
  $state.push(state);
}

export function anyElementsEmpty(elements) {
  for (const element in elements) {
    if (!elements[element]) {
      return true;
    }
  }
  return false;
}
