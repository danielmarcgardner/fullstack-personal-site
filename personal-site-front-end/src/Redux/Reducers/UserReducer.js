import * as CONST from '../../Constants/Constants';

export const user = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case CONST.USER_SIGNIN:
      return { ...state, error: null, loggedIn: true, ...action.payload };
    case CONST.USER_SIGNIN_ERROR:
      return { ...state, error: 'Please Check Your Email or Password' };
    case CONST.USER_SIGNUP:
      return { ...state, error: null, loggedIn: true, ...action.payload };
    case CONST.USER_SIGNUP_ERROR:
      return { ...state, error: 'User Already Exists' };
    case CONST.USER_SIGNOUT:
      return { loggedIn: false };
    default:
      return state;
  }
};
