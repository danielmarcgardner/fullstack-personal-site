import * as CONST from '../../Constants/Constants';

const getPosts = payload => ({
  type: CONST.GET_BLOGS,
  payload,
});

export const getBlogPosts = () => async (dispatch, getState, { Api }) => {
  if (getState().blogs.fetched === true) {
    return;
  }
  const payload = await Api.fetchBlogPosts();
  return dispatch(getPosts(payload));
};
