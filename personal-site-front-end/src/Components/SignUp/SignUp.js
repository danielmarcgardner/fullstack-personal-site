import React from 'react';
import { Form, Grid, Container, Icon, Segment } from 'semantic-ui-react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import { renderField } from '../../Helpers/FormHelpers';
import { required, minValue8, email } from '../../Helpers/FormValidators';
import './SignUp.css';


const SignUp = (props) => {
  const { handleSubmit, signUpUser, user, history } = props;
  if (user.loggedIn === true) {
    history.push('/');
  }
  return (
    <div className="loginforms">
      <Container>
        <Segment>
          <Grid centered>
            <Grid.Row>
              <h1 className="formheader">Sign Up</h1>
            </Grid.Row>
            <Grid.Row>
              <h3 id="clarify">Sign up to write articles in the blog section</h3>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column computer={8} tablet={8} mobile={16}>
                <Form onSubmit={handleSubmit(signUpUser)} className="loginforms">
                  <Form.Field inline>
                    <Field
                      name="name"
                      component={renderField}
                      type="text"
                      label="Name"
                      placeholder="Enter your name here"
                      validate={[required]}
                    />
                  </Form.Field>
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
                  <Form.Button inverted color="blue" className="loginButton">Sign Up</Form.Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
};

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signUpUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string, PropTypes.bool).isRequired,
  history: PropTypes.objectOf(PropTypes.object, PropTypes.number, PropTypes.string).isRequired,
};

export default SignUp;
