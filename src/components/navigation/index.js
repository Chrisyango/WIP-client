import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Logout from '../logout/index';

import './index.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        isShowing: false
    }
  }

  toggleNav() {
    if (!this.state.isShowing) {
      this.setState({
        isShowing: true
    })
    } else {
      this.setState({
        isShowing: false
      })
    }
  }

  render() {
    let showNav;
    if (this.state.isShowing) {
      showNav="showNavOverlay"
    } else {
      showNav="hideNavOverlay"
    }

    let isLoggedIn = (
      <div className="nav-content">
        <Link to="/" onClick={event => this.toggleNav()}>Home</Link>
        <Link to="/login" onClick={event => this.toggleNav()}>Login</Link>
        <Link to="/register" onClick={event => this.toggleNav()}>Register</Link>
      </div>
    )
    if (this.props.loggedIn) {
      isLoggedIn = (
        <div className="nav-content">
          <Link to="/dashboard" onClick={event => this.toggleNav()}>Home</Link>
          <Link to={`/users/${this.props.username}`} onClick={event => this.toggleNav()}>My Account</Link>
          <Logout toggleNav={event => this.toggleNav()}/>
      </div>
      );
    }
    
    return (
      <div className="navigation">
        <span 
          className="toggleNav"
          onClick={event => {
            this.toggleNav();
          }}
          >
            &#9776;
          </span>
        <div className={`${showNav}`}>
          {isLoggedIn}
				</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    loggedIn: currentUser !== null,
    currentUser: currentUser
  }
};

export default connect(mapStateToProps)(Navigation);