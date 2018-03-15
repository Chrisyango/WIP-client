import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Description from './description';
import './index.css'

class LandingPage extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="landing-page">
        <div className="overlay"></div>
        <h1>WorkInProgress</h1>
        <Description />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);