import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import requiresLogin from '../requires-login';
import Logout from '../logout/index';
import Pictures from '../pictures/index';

class Dashboard extends React.Component {

  render () {
    return (
      <div>
        <Logout />
        <Link to={`/users/${this.props.username}`}>
          Hello, {this.props.username}!
        </Link>
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