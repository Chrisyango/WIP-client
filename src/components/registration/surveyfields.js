import React from 'react';

class SurveyFields extends React.Component {
  saveAndContinue(event) {
    let data = {
      age: this.age.value,
      coolness: this.coolness.value
    }
    this.props.saveValues(data);
    this.props.nextStep();
  }

  render() {
    return (
      <form>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          ref={(input) => {
            this.age = input;
          }}
          defaultValue={this.props.userValues.age}
        />
        <label htmlFor="coolness">Coolness</label>
        <select
          id="coolness"
          ref={(input) => {
            this.coolness = input;
          }}
          defaultValue={this.props.userValues.coolness}
        >
          <option value="I'm lame">Not too cool...</option>
          <option value="Kind of cool?">Kind of cool?</option>
          <option value="Cool enough">Cool enough</option>
          <option value="Coooooool">Coooooool</option>
          <option value="Too cool">Too cool</option>
          <option value="Too cool for school">Not even in school</option>
        </select>

        <button onClick={event => {
          event.preventDefault();
          this.props.previousStep();
        }}>Back</button>

        <button onClick={event => {
          event.preventDefault();
          this.saveAndContinue();
        }}>Save and Continue</button>
      </form>
    )
  }
}

export default SurveyFields;