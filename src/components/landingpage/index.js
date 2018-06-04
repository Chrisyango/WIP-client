import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Description from './description';
import Howto from './howto';
import RegisterSection from './register-section';
import './index.css'

export class LandingPage extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="landing-page">
        <div className="overlay"></div>
        <div className="overlay-content">
          <h1>WIP</h1>
          <h2>Share your moments with the world</h2>
        </div>
        <Description />
        <Howto />
        <RegisterSection />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);