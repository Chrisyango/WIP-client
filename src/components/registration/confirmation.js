import React from 'react';

class Confirmation extends React.Component {
  render() {
    return (
      <div className="confirm">
        <h2>Confirm Registration</h2>
        <ul>
          <li><b>Name:</b> {this.props.userValues.fullname}</li>
          <li><b>Email:</b> {this.props.userValues.email}</li>
          <li><b>Username:</b> {this.props.userValues.username}</li>
        </ul>
        <button 
          onClick={event => {
            event.preventDefault();
            this.props.previousStep();
          }}>Back</button>
        <button 
          className="submitbutton"
          onClick={event => {
            event.preventDefault();
            this.props.submitRegistration();
          }}>Submit Registration</button>
      </div>
    )
  }
}

export default Confirmation;