import { USER_SIGNIN, USER_SIGNIN_ERROR, USER_SIGNUP, USER_SIGNUP_ERROR } from '../../Constants/Constants';

const signInAction = payload => ({
  type: USER_SIGNIN,
  payload,
});

const signUpAction = payload => ({
  type: USER_SIGNUP,
  payload,
});

const signInActionError = () => ({
  type: USER_SIGNIN_ERROR,
});

const signUpActionError = () => ({
  type: USER_SIGNUP_ERROR,
});

export function signInUser(info) {
  return async (dispatch, getState, { Api }) => {
    const payload = await Api.signIn(info);
    if (payload === 'error') {
      return dispatch(signInActionError());
    }
    return dispatch(signInAction(payload));
  };
}

export function signUpUser(info) {
  return async (dispatch, getState, { Api }) => {
    const payload = await Api.signUp(info);
    if (payload === 'error') {
      return dispatch(signUpActionError());
    }
    return dispatch(signUpAction(payload));
  };
}
