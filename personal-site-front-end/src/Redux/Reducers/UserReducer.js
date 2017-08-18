import { USER_SIGNIN, USER_SIGNIN_ERROR, USER_SIGNUP, USER_SIGNUP_ERROR } from '../../Constants/Constants';

export const user = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      return { ...state, loggedIn: true, ...action.payload };
    case USER_SIGNIN_ERROR:
      return { ...state, error: 'Please Check Your Email or Password' };
    case USER_SIGNUP:
      return { ...state, loggedIn: true, ...action.payload };
    case USER_SIGNUP_ERROR:
      return { ...state, error: 'User Already Exists' };
    default:
      return state;
  }
};
