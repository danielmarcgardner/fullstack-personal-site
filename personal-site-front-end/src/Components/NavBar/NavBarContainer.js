import { connect } from 'react-redux';
import NavBar from './NavBar';

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(NavBar);
