import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../actions/users';
import {login} from '../../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
const passwordLength = length({min: 8, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const {username, password, fullname, email} = values;
    const user = {username, password, fullname, email};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className="registration-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
      )}>
        <label htmlFor="fullname">Full Name</label>
        <Field 
          component={Input} 
          type="text" 
          name="fullname"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="email">Email</label>
        <Field 
          component={Input} 
          type="email" 
          name="email" 
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="username">Username</label>
        <Field
          component={Input}
          type="text"
          name="username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          validate={[required, passwordLength, isTrimmed]}
        />
        <label htmlFor="confirm password">Confirm password</label>
        <Field
          component={Input}
          type="password"
          name="confirm password"
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button type="submit">
          Register
        </button>
      </form>
  );
  }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);