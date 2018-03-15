import React from 'react';
import {Link} from 'react-router-dom';
import LogOut from '../logout/index';

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
					<div className="nav-content">
            <Link to="/"
              onClick={event => {
                this.toggleNav();
            }}>Let's GO</Link>
            <Link to="/login"
              onClick={event => {
                this.toggleNav();
            }}>Login</Link>
            <Link to="/register"
              onClick={event => {
                this.toggleNav();
            }}>Register</Link>
            <LogOut />
					</div>
				</div>
      </div>
    )
  }
}

export default Navigation;