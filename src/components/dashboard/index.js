import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';

class Dashboard extends React.Component {

  render () {
    return (
      <div>
        Hi
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      name: `${currentUser.fullname}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));