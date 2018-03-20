import React from 'react';
import {connect} from 'react-redux';

import requiresLogin from '../requires-login';

class User extends React.Component {
  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: `${currentUser.username}`,
      name: `${currentUser.fullname}`,
      email: `${currentUser.email}`,
  };
};

export default requiresLogin()(connect(mapStateToProps)(User));