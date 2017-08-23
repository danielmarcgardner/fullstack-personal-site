import * as CONST from '../../Constants/Constants';

const signInAction = payload => ({
  type: CONST.USER_SIGNIN,
  payload,
});

const signUpAction = payload => ({
  type: CONST.USER_SIGNUP,
  payload,
});

const signInActionError = () => ({
  type: CONST.USER_SIGNIN_ERROR,
});

const signUpActionError = () => ({
  type: CONST.USER_SIGNUP_ERROR,
});

const signOutAction = () => ({
  type: CONST.USER_SIGNOUT,
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

export function signOutUser() {
  return async (dispatch, getState, { Api }) => {
    const payload = await Api.signOut();
    console.log(payload);
    return dispatch(signOutAction());
  };
}
