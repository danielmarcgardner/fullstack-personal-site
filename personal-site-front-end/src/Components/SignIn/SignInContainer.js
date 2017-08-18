import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { signInUser } from '../../Redux/Actions/SignInUp';
import SignIn from './SignIn';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ signInUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signin',
})(SignIn));
