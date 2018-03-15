import React from 'react';
import {reduxForm, focus} from 'redux-form';

import AccountFields from './accountfields';
import Confirmation from './confirmation';
import Success from './success';

import {registerUser} from '../../actions/registration';
import {login} from '../../actions/auth';
let userValues = {
  fullname: null,
  username: null,
  email: null,
  password: null,
}

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1
    }
  }

  nextStep() {
    this.setState({
      step: this.state.step +1
    })
  }

  previousStep() {
    this.setState({
      step: this.state.step -1
    })
  }

  submitRegistration() {
    return this.props.dispatch(registerUser(userValues))
      .then(() => this.props.dispatch(login(userValues.username, userValues.password)))
      .then(() => {
        userValues = {
          fullname: null,
          username: null,
          email: null,
          password: null,
        }
      });
  }

  render() {
    function saveValues(data) {
      userValues = Object.assign({}, userValues, data);
    }

    if (this.state.step === 1) {
      return <AccountFields
        userValues={userValues}
        saveValues={data => saveValues(data)}
        nextStep={event => this.nextStep()}
      />
    } else if (this.state.step === 2) {
      return <Confirmation 
        userValues={userValues}
        previousStep={event => this.previousStep()}
        submitRegistration={event => {
          this.submitRegistration();
          this.nextStep();
        }}
      />
    } else if (this.state.step === 3) {
      return <Success 
        userValues={userValues}
      />
    }
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);