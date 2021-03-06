import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import {
  LOGIN_MUTATION,
  SIGNUP_MUTATION,
  VIEWER_QUERY
} from '../../apollo/queries';
import { graphql, compose } from 'react-apollo';
import validate from './helpers/validation'

const refetchQueries = [
  {
    query: VIEWER_QUERY,
  },
];

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: null,

    };
  }

  render() {
    const { classes, login, signup } = this.props;
    return (
      <Form
        onSubmit={(values) => {
          const mutationInput = {
            variables: {
              user: values
            }
          }
          this.state.formToggle ? login(mutationInput) : signup(mutationInput)
        }}
        validate={validate}
        render={({ handleSubmit, form, invalid, pristine }) => (
          <form
            onSubmit={handleSubmit}
            className={classes.accountForm}
          >
            {!this.state.formToggle && (
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="fullname"></InputLabel>
                <Field
                  name="fullname"
                  render={({ input, meta }) => (
                    <div>
                      <TextField
                        id="fullname"
                        type="text"
                        margin="normal"
                        label="Username"
                        fullWidth
                        inputProps={{
                          autoComplete: 'off',
                          ...input
                        }}
                        value={input.value}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}

                    </div>
                  )}
                />
              </FormControl>
            )}

            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="email"></InputLabel>
              <Field
                name="email"
                render={({ input, meta }) => (
                  <div>
                    <TextField
                      id="email"
                      type="text"
                      margin="normal"
                      label="Email"
                      fullWidth
                      inputProps={{
                        autoComplete: 'off',
                        ...input,
                      }}
                      value={input.value}
                      className={classes.textField}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              />
            </FormControl>

            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="password"></InputLabel>
              <Field
                name="password"
                render={({ input, meta }) => (
                  <div>
                    <TextField
                      id="password"
                      type="password"
                      margin="normal"
                      label="Password"
                      fullWidth
                      inputProps={{
                        autoComplete: 'off',
                        ...input
                      }}
                      value={input.value}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              />
            </FormControl>

            <FormControl className={classes.formControl}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Button
                  type="submit"
                  className={classes.formButton}
                  variant="contained"
                  size="large"
                  color="secondary"
                  disabled={
                    pristine || invalid
                  }
                >
                  {this.state.formToggle ? 'Enter' : 'Create Account'}
                </Button>
                <Typography>
                  <button
                    className={classes.formToggle}
                    type="button"
                    onClick={() => {
                      form.reset();
                      this.setState({
                        formToggle: !this.state.formToggle,
                        error: null,
                      });
                    }}
                  >
                    {this.state.formToggle
                      ? 'Create an account.'
                      : 'Login to existing account.'}
                  </button>
                </Typography>
              </Grid>
            </FormControl>

            <Typography className={classes.errorMessage}>
              {this.state.error && this.state.formToggle}
            </Typography>
          </form>
        )}
      ></Form >
    );
  }
}

export default compose(
  graphql(SIGNUP_MUTATION, {
    options: {
      refetchQueries,
    },
    name: 'signup'
  }),
  graphql(LOGIN_MUTATION, {
    options: {
      refetchQueries,
    },
    name: 'login',
  }),
  withStyles(styles),
)(AccountForm);
