import React from 'react';
import { Form, Grid, Container, Icon, Segment } from 'semantic-ui-react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import { renderField } from '../../Helpers/FormHelpers';
import { required, minValue8, email } from '../../Helpers/FormValidators';
import './SignIn.css';


const SignIn = (props) => {
  const { handleSubmit, signInUser, user, history } = props;
  if (user.loggedIn === true) {
    history.push('/');
  }
  return (
    <div className="loginforms">
      <Container>
        <Segment>
          <Grid centered>
            <h1 className="formheader">Sign In</h1>
            <Grid.Row>
              <Grid.Column computer={8} tablet={8} mobile={16}>
                <Form onSubmit={handleSubmit(signInUser)} className="loginforms">
                  <Form.Field inline>
                    <Field
                      name="email"
                      component={renderField}
                      type="email"
                      label="Email"
                      placeholder="Enter your email here"
                      validate={[required, email]}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <Field
                      name="password"
                      component={renderField}
                      label="Password"
                      type="password"
                      placeholder="Enter your password here"
                      validate={[required, minValue8]}
                    />
                  </Form.Field>
                  {renderIf(user.error)(
                    <p className="error"><Icon name="warning sign" />{user.error}</p>,
                  )}
                  <Form.Button inverted color="blue" className="loginButton">Login</Form.Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
};

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.bool, PropTypes.string).isRequired,
  history: PropTypes.objectOf(PropTypes.number, PropTypes.object, PropTypes.string).isRequired,
};

export default SignIn;
