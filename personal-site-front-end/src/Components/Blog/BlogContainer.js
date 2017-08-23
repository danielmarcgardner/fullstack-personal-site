import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { getBlogPosts } from '../../Redux/Actions/BlogPosts';
import BlogPage from './Blog';

const mapStateToProps = (state) => {
  const blogs = state.blogs.blogposts;
  const fetched = state.blogs.fetched;
  return {
    blogs,
    fetched,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getBlogPosts }, dispatch);

const connectedToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.getBlogPosts();
  },
});

export default compose(connectedToStore, onDidMount)(BlogPage);
