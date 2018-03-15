import React from 'react';
import {reduxForm, focus} from 'redux-form';

class AccountFields extends React.Component {
  saveAndContinue() {
    let data = {
      fullname: this.fullname.value,
      password: this.password.value,
      confirmpassword: this.confirmpassword.value,
      email: this.email.value,
      username: this.username.value
    }

    if (data.password !== data.confirmpassword) {
      alert(`Passwords do not match`)
      return;
    } else {
      this.props.saveValues(data);
      this.props.nextStep();
    }
  }

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          this.saveAndContinue();
        }}
      >
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          name="fullname"
          ref={(input) => {
            this.fullname = input;
          }}
          defaultValue={this.props.userValues.fullname}
          required
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          ref={(input) => {
            this.username = input;
          }}
          defaultValue={this.props.userValues.username}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          ref={(input) => {
            this.password = input;
          }}
          defaultValue={this.props.userValues.password}
          required
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          ref={(input) => {
            this.confirmpassword = input;
          }}
          defaultValue={this.props.userValues.password}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          ref={(input) => {
            this.email = input;
          }}
          defaultValue={this.props.userValues.email}
          required
        />
        <button>Save and Continue</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('registration', Object.keys(errors)[0]))
})(AccountFields);