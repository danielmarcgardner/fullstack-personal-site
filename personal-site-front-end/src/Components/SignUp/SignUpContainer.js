import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { signUpUser } from '../../Redux/Actions/SignInUp';
import SignUp from './SignUp';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ signUpUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signup',
})(SignUp));
