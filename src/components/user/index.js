import React from 'react';
import {connect} from 'react-redux';

import requiresLogin from '../requires-login';
import YourPosts from '../pictures/yourposts';
import {fetchUsers} from '../../actions/users';
import './index.css';

export class User extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    let userInfo;
    this.props.users.users.map(user => {
      if (user.username === this.props.match.params.username) {
        userInfo = (
          <span className="userProperties">
            <h2>User Information</h2>
            <p>Fullname: {user.fullname}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </span>
        );
      } return true;
    })

    return (
      <div className="user">
        {userInfo}
        <span className="userPosts">
          <h2>User Posts</h2>
          <YourPosts postsUsername={this.props.match.params.username}/>
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      users: state.users,
      username: `${currentUser.username}`,
      name: `${currentUser.fullname}`,
      email: `${currentUser.email}`,
  };
};

export default requiresLogin()(connect(mapStateToProps)(User));