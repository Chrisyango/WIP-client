import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import Logout from '../logout/index';

class Dashboard extends React.Component {

  render () {
    return (
      <div>
        Welcome {this.props.username}!
        {this.props.email}
        <Logout />
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