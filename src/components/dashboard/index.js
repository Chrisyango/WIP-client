import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import Pictures from '../pictures/index';

class Dashboard extends React.Component {

  render () {
    return (
      <div>
        <Pictures />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      name: `${currentUser.fullname}`,
      email: `${currentUser.email}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));