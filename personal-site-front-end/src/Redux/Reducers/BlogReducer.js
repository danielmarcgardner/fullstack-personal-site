import * as CONST from '../../Constants/Constants';

export const blogs = (state = { fetched: false, blogposts: [] }, action) => {
  switch (action.type) {
    case CONST.GET_BLOGS:
      console.log(action.payload);
      return { ...state, fetched: true, blogposts: state.blogposts.concat(action.payload) };
    default:
      return state;
  }
};
