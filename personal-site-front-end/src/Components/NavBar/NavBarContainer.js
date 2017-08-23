import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOutUser } from '../../Redux/Actions/SignInUp';
import NavBar from './NavBar';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ signOutUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
